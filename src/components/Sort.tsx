import { useRef, useState } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";
import { FiltersState, SortBy } from "../reducer/filtersReducer";
import { sortList } from "../utils/helpers";
import Styled from "./Sort.styled";
import StyledShared from "../../styles/pages/MoviesPage.styled";
import { CheckIcon } from "../icons/CheckIcon";
import { ChevronDown } from "../icons/ChevronDown";

type SortProps = {
  onSortChange: (key: SortBy) => void;
  state: FiltersState;
};

const Sort = (props: SortProps) => {
  const { state, onSortChange } = props;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  useOnClickOutside(menuRef, () => setIsDropdownOpen(false));

  const selectedValue = sortList.find((item) => item.key === state.sort)?.text;

  return (
    <Styled.Wrapper ref={menuRef}>
      <StyledShared.Button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {selectedValue}
        <ChevronDown />
      </StyledShared.Button>
      <Styled.Menu isOpen={isDropdownOpen} aria-label="Genres">
        {sortList.map(({ key, text }) => {
          return (
            <Styled.Item
              key={key}
              aria-label={text}
              onClick={() => {
                onSortChange(key);
                setIsDropdownOpen(false);
              }}
              selected={state.sort === key}
            >
              <CheckIcon />
              {text}
            </Styled.Item>
          );
        })}
      </Styled.Menu>
    </Styled.Wrapper>
  );
};

export default Sort;
