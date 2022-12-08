import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Container } from "../../src/components/Container";
import { DisplayCardsInGrid } from "../../src/components/DisplayCardsInGrid";
import { SearchInput } from "../../src/components/SearchInput";
import { SingleMovieCard } from "../../src/components/SingleMovieCard";
import { Movie } from "../../src/types/movies";
import Styled from "../../styles/pages/SearchPage.styled";

const Search = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { query, isReady } = useRouter();

  const getMovies = async () => {
    const allMovies = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/filter?genre=&date=-1`
    ).then((res) => res.json());
    setMovies(allMovies.data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!isReady) return;

    try {
      setIsError(false);
      setIsLoading(true);
      getMovies();
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  }, [isReady, query.term]);

  return (
    <main>
      <Head>
        <title>Search for movies</title>
      </Head>
      <Container>
        <Styled.Title>Search</Styled.Title>
        <SearchInput />
        {isError ? (
          <Styled.NoMoviesFound>
            There has been an error. Try refreshing the page.
          </Styled.NoMoviesFound>
        ) : isLoading ? (
          <Styled.NoMoviesFound>Loading...</Styled.NoMoviesFound>
        ) : movies.length === 0 ? (
          <Styled.NoMoviesFound>
            No movies found with search query: {query.term}
          </Styled.NoMoviesFound>
        ) : (
          <DisplayCardsInGrid>
            {movies.map((movie) => {
              return <SingleMovieCard key={movie.id} {...movie} />;
            })}
          </DisplayCardsInGrid>
        )}
      </Container>
    </main>
  );
};

export default Search;
