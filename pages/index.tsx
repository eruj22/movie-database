import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";

import { Container } from "../src/components/Container";
import { DisplayCards } from "../src/components/DisplayCards";
import { SearchInput } from "../src/components/SearchInput";
import { SingleMovieCard } from "../src/components/SingleMovieCard";
import clientPromise from "../src/lib/mongodb";
import { Movie } from "../src/types/movies";
import Styled from "../styles/pages/Home.styled";

type MovieProps = {
  popularMovies: Movie[];
  latestMovies: Movie[];
};

const Home: NextPage<MovieProps> = (props: MovieProps) => {
  const { popularMovies, latestMovies } = props;

  return (
    <>
      <Head>
        <title>Movie Database: Home page</title>
      </Head>
      <Styled.Hero>
        <Container>
          <Styled.Title>Find your favorite movie</Styled.Title>
          <SearchInput />
        </Container>
      </Styled.Hero>
      <main>
        <Container>
          <Styled.MoviesWrapper>
            <DisplayCards title="Popular Movies:">
              {popularMovies.map((movie) => {
                return (
                  <Fragment key={movie.id}>
                    <SingleMovieCard {...movie} />
                  </Fragment>
                );
              })}
            </DisplayCards>
            <DisplayCards title="Latest Movies:">
              {latestMovies.map((movie) => {
                return (
                  <Fragment key={movie.id}>
                    <SingleMovieCard {...movie} />
                  </Fragment>
                );
              })}
            </DisplayCards>
          </Styled.MoviesWrapper>
        </Container>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const client = await clientPromise;
  const db = client.db("movie-database");

  const popularMoviesResponse = await db
    .collection("movies")
    .find({})
    .toArray();

  const latestMoviesResponse = await db
    .collection("latest-movies")
    .find({})
    .toArray();

  return {
    props: {
      popularMovies: popularMoviesResponse[0].results.splice(0, 10),
      latestMovies: latestMoviesResponse[0].results,
    },
  };
}

export default Home;
