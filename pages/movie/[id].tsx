import { ObjectId } from "mongodb";
import { GetServerSideProps } from "next";
import { unstable_getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import { authOptions } from "../api/auth/[...nextauth]";
import { Actions } from "../../src/components/Actions";
import { Container } from "../../src/components/Container";
import { DisplayCards } from "../../src/components/DisplayCards";
import { Info } from "../../src/components/Info";
import { Video } from "../../src/components/Video";
import { ArrowRightIcon } from "../../src/icons/ArrowRightIcon";
import clientPromise from "../../src/lib/mongodb";
import { SingleMovie } from "../../src/types/movies";
import { SessionData, UserData } from "../../src/types/user";
import {
  formatRating,
  getRuntime,
  transformDate,
} from "../../src/utils/helpers";
import Styled from "../../styles/pages/SingleMoviePage.styled";

const postToWatchlist = async (sessionData: SessionData, id: string) => {
  return fetch('/api/user', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: sessionData.user.name,
      email: sessionData.user.email,
      watchlist: id,
    }),
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
};

type SingleMovieProps = {
  movie: SingleMovie;
  userData: UserData[];
};

const Movie = (props: SingleMovieProps) => {
  const { movie, userData } = props;
  const { data } = useSession();

  const isMovieInWatchlist =
    userData &&
    userData[0].watchlist &&
    !!userData[0].watchlist.find((item) => item === movie._id);
  const [isInWatchlist, setIsInWatchlist] = useState(
    isMovieInWatchlist ?? false
  );

  if (!movie) {
    return (
      <>
        <Head>
          <title>Movie info</title>
        </Head>
        <Styled.NoMovieWrapper>No movie found</Styled.NoMovieWrapper>
      </>
    );
  }

  const {
    _id,
    cast,
    crew,
    genres,
    overview,
    poster_path,
    release_date,
    runtime,
    spoken_languages,
    tagline,
    title,
    trailer,
    vote_average,
  } = movie;

  return (
    <main>
      <Head>
        <title>Movie info: {movie.title}</title>
      </Head>
      <Container>
        <Styled.Title>{title}</Styled.Title>
        <Styled.GridArea>
          <Styled.FlexBasicInfo>
            <Styled.FlexWrapper>
              <Styled.Fact>{transformDate(release_date)}</Styled.Fact>
              <span>&#183;</span>
              <Styled.Fact>{getRuntime(runtime)}</Styled.Fact>
              <span>&#183;</span>
              <Styled.Fact>{spoken_languages[0].name}</Styled.Fact>
            </Styled.FlexWrapper>
            <Styled.RatingWrapper>
              <Styled.PopcornIconWrapper>
                <Image src="/assets/popcorn.png" alt="" fill />
              </Styled.PopcornIconWrapper>
              <Styled.Rating>{formatRating(vote_average)}</Styled.Rating>
              <Styled.RatingTotal>/10</Styled.RatingTotal>
            </Styled.RatingWrapper>
          </Styled.FlexBasicInfo>
          <Styled.FlexGenres>
            <Styled.FlexWrapper>
              {genres.map(({ id, name }) => {
                return <Styled.Genre key={id}>{name}</Styled.Genre>;
              })}
            </Styled.FlexWrapper>
            {userData && (
              <Actions
                onClick={() => {
                  setIsInWatchlist(!isInWatchlist);
                  postToWatchlist(data as SessionData, _id);
                }}
                isInWatchlist={isInWatchlist}
                userData={userData[0]}
              />
            )}
          </Styled.FlexGenres>
          <Styled.PosterWithHeadline>
            <Styled.PosterWrapper>
              <Image
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt={`Poster for movie ${title}`}
                fill
              />
            </Styled.PosterWrapper>
            <Styled.Tagline>{tagline}</Styled.Tagline>
          </Styled.PosterWithHeadline>
          <Styled.VideoWrapper>
            <Video embedId={trailer} title={title} />
          </Styled.VideoWrapper>
        </Styled.GridArea>
        <Styled.OverviewAndInfo>
          <Styled.Overview>
            <Styled.Subtitle>Overview</Styled.Subtitle>
            <p>{overview}</p>
          </Styled.Overview>
          <Info crew={crew} />
        </Styled.OverviewAndInfo>
        <Styled.CastWrapper>
          <DisplayCards title="Cast" gap={20}>
            {cast.slice(0, 13).map(({ id, profile_path, name, character }) => {
              return (
                <Styled.Cast key={id}>
                  {profile_path ? (
                    <Styled.CastImage>
                      <Image
                        src={`https://image.tmdb.org/t/p/original${profile_path}`}
                        alt={name}
                        fill
                      />
                    </Styled.CastImage>
                  ) : (
                    <Styled.CastNoImage>No image found</Styled.CastNoImage>
                  )}
                  <div>
                    <Styled.CastName>{name}</Styled.CastName>
                    <Styled.CastRole>{character}</Styled.CastRole>
                  </div>
                </Styled.Cast>
              );
            })}
            <Styled.CastAll>
              <Styled.GoToLink href={`/cast/${_id}`}>View more</Styled.GoToLink>
            </Styled.CastAll>
          </DisplayCards>
        </Styled.CastWrapper>
        <Styled.GoToLink href={`/cast/${_id}`}>
          See All Cast and Crew
          <ArrowRightIcon />
        </Styled.GoToLink>
      </Container>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const client = await clientPromise;
  const db = client.db("test");

  const movieId = context.params?.id;
  if (movieId?.length !== 24 || !movieId) {
    return {
      props: {
        movie: null,
      },
    };
  }

  const mongoDbId = new ObjectId(movieId as string);
  const movieResponse = await db
    .collection("singlemovies")
    .findOne({ _id: mongoDbId });

  if (!movieResponse) {
    return {
      props: {
        movie: null,
      },
    };
  }

  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session || !session.user) {
    return {
      props: {
        movie: JSON.parse(JSON.stringify(movieResponse)),
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
      movie: JSON.parse(JSON.stringify(movieResponse)),
      userData: JSON.parse(JSON.stringify(response)),
    },
  };
};

export default Movie;
