import { ObjectId } from "mongodb";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { Fragment } from "react";
import { Container } from "../../src/components/Container";
import { Person } from "../../src/components/Person";
import { ArrowLeftIcon } from "../../src/icons/ArrowLeftIcon";
import clientPromise from "../../src/lib/mongodb";
import { Crew, SingleMovie } from "../../src/types/movies";
import { getUniqueCrewMembers } from "../../src/utils/helpers";
import Styled from "../../styles/pages/Cast.styled";

const allDepartments = [
  "Directing",
  "Production",
  "Writing",
  "Costume & Make-Up",
  "Camera",
  "Sound",
  "Art",
];

const Cast = ({ movie }: { movie: SingleMovie }) => {
  const { _id, crew, cast, title } = movie;

  let crewSplitIntoDepartments: Crew[][] = [];

  allDepartments.forEach((department) => {
    crewSplitIntoDepartments.push(
      crew.filter((person) => person.department === department)
    );
  });

  const filterCrew = crewSplitIntoDepartments.map((crewDepartment) => {
    return getUniqueCrewMembers(crewDepartment);
  });

  return (
    <main>
      <Head>
        <title>Cast for {title}</title>
      </Head>
      <Container>
        <Styled.Back href={`/movie/${_id}`}>
          <ArrowLeftIcon />
          Go Back to Movie
        </Styled.Back>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Flex>
          <Styled.CastWrapper>
            <Styled.Subtitle>Cast</Styled.Subtitle>
            {cast.map((person) => {
              return <Person key={person.id} {...person} />;
            })}
          </Styled.CastWrapper>
          <Styled.CrewWrapper>
            {filterCrew.map((crew, index) => {
              return (
                <Fragment key={index}>
                  <Styled.Subtitle>{allDepartments[index]}</Styled.Subtitle>
                  {crew.map((crewMember) => {
                    return <Person key={crewMember.id} {...crewMember} />;
                  })}
                </Fragment>
              );
            })}
          </Styled.CrewWrapper>
        </Styled.Flex>
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

  return {
    props: {
      movie: JSON.parse(JSON.stringify(movieResponse)),
    },
  };
};

export default Cast;
