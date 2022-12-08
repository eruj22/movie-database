import Image from "next/image";
import { Cast, Crew } from "../types/movies";
import Styled from "./Person.styled";

export const Person = ({ ...data }: Crew | Cast) => {
  const { name, profile_path } = data;
  const role = "job" in data ? data.job : data.character;

  return (
    <Styled.Wrapper>
      {profile_path ? (
        <Styled.Image>
          <Image
            src={`https://image.tmdb.org/t/p/original${profile_path}`}
            alt={name}
            fill
          />
        </Styled.Image>
      ) : (
        <Styled.NoImage>No image found</Styled.NoImage>
      )}
      <Styled.Info>
        <Styled.Name>{name}</Styled.Name>
        <Styled.Role>{role}</Styled.Role>
      </Styled.Info>
    </Styled.Wrapper>
  );
};
