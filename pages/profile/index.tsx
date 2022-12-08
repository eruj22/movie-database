import { GetServerSideProps } from "next";
import { unstable_getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Container } from "../../src/components/Container";
import { WatchlistMovie } from "../../src/components/WatchlistMovie";
import clientPromise from "../../src/lib/mongodb";
import { Movie } from "../../src/types/movies";
import { UserData } from "../../src/types/user";
import Styled from "../../styles/pages/Profile.styled";
import { authOptions } from "../api/auth/[...nextauth]";

const getUniqueValues = (movies: Movie[]) => {
  return movies.filter(
    (value, index, self) =>
      self.findIndex((item) => item._id === value._id) === index
  );
};

type ProfileProps = {
  userData: UserData[];
};

const Profile = (props: ProfileProps) => {
  const { userData } = props;
  const { status } = useSession();
  const [allMovies, setAllMovies] = useState<Movie[]>([]);

  useEffect(() => {
    if (!userData) {
      return;
    }

    const urls = userData[0].watchlist?.map(
      (movieId) => `${process.env.NEXT_PUBLIC_BASE_URL}/api/movies/${movieId}`
    );

    if (urls && urls.length > 0) {
      Promise.allSettled(
        urls!.map((url) => {
          fetch(url)
            .then((resp) => resp.json())
            .then((data) =>
              setAllMovies((prevMovies) => [...prevMovies, data.data])
            );
        })
      );
    }
    // eslint-disable-next-line
  }, []);

  if (status === "unauthenticated" || !userData) {
    return (
      <main>
        <Head>
          <title>Profile</title>
        </Head>
        <Container>
          <Styled.Title>Restricted page</Styled.Title>
          <Styled.Subtitle>
            You don&apos;t have access to this page.{" "}
            <Link href="/">Go home</Link>
          </Styled.Subtitle>
        </Container>
      </main>
    );
  }

  return (
    <main>
      <Head>
        <title>Profile</title>
      </Head>
      <Container>
        <Styled.Title>Hello {userData[0]?.name}</Styled.Title>
        <Styled.Subtitle>
          Your watchlist
          {allMovies.length === 0 &&
            " is empty. Add some films to see them below"}
        </Styled.Subtitle>
        <Styled.WatchlistWrapper>
          {getUniqueValues(allMovies).map((movie: Movie) => {
            return <WatchlistMovie key={movie._id} {...movie} />;
          })}
        </Styled.WatchlistWrapper>
      </Container>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const client = await clientPromise;
  const db = client.db("test");

  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session || !session.user) {
    return {
      props: {
        userData: null,
      },
    };
  }

  const response = await db
    .collection("users")
    .find({ name: session.user.name, email: session.user.email })
    .toArray();

  return {
    props: {
      userData: JSON.parse(JSON.stringify(response)),
    },
  };
};

export default Profile;
