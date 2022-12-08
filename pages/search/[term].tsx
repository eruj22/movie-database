import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import * as Realm from "realm-web";

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

  const getMoviesFromQuery = async () => {
    const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID ?? "";
    const app = new Realm.App({ id: REALM_APP_ID });
    const credentials = Realm.Credentials.anonymous();

    const user = await app.logIn(credentials);
    const allMovies = await user.functions.searchMovies(query.term);
    setMovies(allMovies);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!isReady) return;

    setIsError(false);
    try {
      setIsLoading(true);
      getMoviesFromQuery();
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
    // eslint-disable-next-line
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
