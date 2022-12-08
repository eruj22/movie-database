import Image from "next/image";
import Link from "next/link";
import { Movie } from "../types/movies";
import { formatRating, transformDate } from "../utils/helpers";
import Styled from "./SingleMovieCard.styled";

export const SingleMovieCard = ({ ...movie }: Movie) => {
  const { _id, movieId, release_date, poster_path, vote_average, title } =
    movie;

  return (
    <Link href={`/movie/${movieId ? movieId : _id}`}>
      <Styled.Wrapper>
        {poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={`Poster for movie ${title}`}
            height={330}
            width={220}
          />
        ) : (
          <Styled.NoImage>No image found</Styled.NoImage>
        )}
        <Styled.Info>
          <Styled.RatingWrapper>
            <Styled.PopcornIconWrapper>
              <Image src="/assets/popcorn.png" alt="" fill />
            </Styled.PopcornIconWrapper>
            <Styled.Rating>{formatRating(vote_average)}</Styled.Rating>
          </Styled.RatingWrapper>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Date>{transformDate(release_date)}</Styled.Date>
        </Styled.Info>
      </Styled.Wrapper>
    </Link>
  );
};
