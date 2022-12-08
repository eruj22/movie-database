import { useState, useRef } from "react";

import useOnClickOutside from "../hooks/useOnClickOutside";
import { ChevronDown } from "../icons/ChevronDown";
import { FiltersState } from "../reducer/filtersReducer";
import { Genre } from "../types/movies";
import Styled from "./Genres.styled";
import StyledShared from "../../styles/pages/MoviesPage.styled";

type GenresProps = {
  data: Genre[];
  onGenresChange: (name: string) => void;
  state: FiltersState;
};

const Genres = (props: GenresProps) => {
  const { data, state, onGenresChange } = props;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  useOnClickOutside(menuRef, () => setIsDropdownOpen(false));

  const selectedValue =
    state.genre.size === 0
      ? "All Genres"
      : state.genre.size > 2
      ? "Multiple Genres Selected"
      : [...state.genre].join(", ");

  return (
    <Styled.Wrapper ref={menuRef}>
      <StyledShared.Button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {selectedValue}
        <ChevronDown />
      </StyledShared.Button>
      <Styled.Menu isOpen={isDropdownOpen} aria-label="Genres">
        {data.map(({ id, name }) => {
          const isChecked = state.genre.has(name);
          return (
            <Styled.Item
              key={id}
              aria-label={name}
              onClick={() => onGenresChange(name)}
            >
              <Styled.Checkbox
                id={name}
                type="checkbox"
                name={name}
                checked={isChecked}
                onChange={() => undefined}
              />
              <span>{name}</span>
            </Styled.Item>
          );
        })}
      </Styled.Menu>
    </Styled.Wrapper>
  );
};

export default Genres;
