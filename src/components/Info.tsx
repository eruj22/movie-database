import { Crew } from "../types/movies";
import { findPersonInCrew } from "../utils/helpers";
import Styled from "./Info.styled";

type InfoProps = {
  crew: Crew[];
};

export const Info = ({ crew }: InfoProps) => {
  const peopleShownInInfo = ["Director", "Producer", "Writer", "Characters"];

  return (
    <Styled.InfoWrapper>
      <Styled.Subtitle>Info</Styled.Subtitle>
      {peopleShownInInfo.map((person) => {
        const info = findPersonInCrew(person, crew);
        const multiplePeople =
          info.length > 1 && person !== "Characters" ? "s" : "";

        if (info.length === 0) {
          return;
        }

        return (
          <Styled.Info key={person}>
            <Styled.InfoRole>{`${person}${multiplePeople}:`}</Styled.InfoRole>
            <Styled.InfoPerson>{info.join(", ")}</Styled.InfoPerson>
          </Styled.Info>
        );
      })}
    </Styled.InfoWrapper>
  );
};
