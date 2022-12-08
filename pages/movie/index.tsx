import Head from "next/head";
import { useReducer, useState } from "react";

import { Container } from "../../src/components/Container";
import { DisplayCardsInGrid } from "../../src/components/DisplayCardsInGrid";
import { SingleMovieCard } from "../../src/components/SingleMovieCard";
import useFetch from "../../src/hooks/useFetch";
import {
  filtersReducer,
  initialState,
  SortBy,
} from "../../src/reducer/filtersReducer";
import { Genre, Movie } from "../../src/types/movies";
import { getUrlForFilters } from "../../src/utils/helpers";
import Filters from "../../src/components/Filters";
import Styled from "../../styles/pages/MoviesPage.styled";
import clientPromise from "../../src/lib/mongodb";

type MovieProps = {
  genre: Genre[];
};

const Movie = (props: MovieProps) => {
  const { genre } = props;
  const [state, dispatch] = useReducer(filtersReducer, initialState);
  const [newUrl, setNewUrl] = useState("api/filter?genre=&date=-1");
  const { data: movies, error } = useFetch<{ data: Movie[] }>(newUrl);

  const onGenresChange = (name: string) => {
    dispatch({
      type: "TOGGLE_CHECKBOX",
      payload: { name },
    });
  };

  const onSortChange = (item: SortBy) => {
    dispatch({ type: "SORT_MOVIES", payload: { sort: item } });
  };

  const resetFilters = () => dispatch({ type: "RESET" });

  return (
    <main>
      <Head>
        <title>All movies</title>
      </Head>
      <Container>
        <Styled.Title>All Movies</Styled.Title>
        {genre && (
          <Filters
            state={state}
            genre={genre}
            actions={{ onGenresChange, onSortChange, resetFilters }}
            onSubmit={() => setNewUrl(getUrlForFilters(state))}
          />
        )}
        {error ? (
          <Styled.NoData>There was an error</Styled.NoData>
        ) : !movies ? (
          <Styled.NoData>Loading...</Styled.NoData>
        ) : (
          <DisplayCardsInGrid>
            {movies.data.length === 0 ? (
              <Styled.NoMoviesFound>
                No movies match filters
              </Styled.NoMoviesFound>
            ) : (
              movies.data.map((movie) => {
                return <SingleMovieCard key={movie.id} {...movie} />;
              })
            )}
          </DisplayCardsInGrid>
        )}
      </Container>
    </main>
  );
};

export async function getStaticProps() {
  const client = await clientPromise;
  const db = client.db("movie-database");
  const genresResponse = await db.collection("genres").find({}).toArray();

  if (!genresResponse) {
    return {
      props: {
        genre: null,
      },
    };
  }

  return {
    props: {
      genre: genresResponse[0].genres,
    },
  };
}

export default Movie;
