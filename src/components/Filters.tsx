import Styled from "./Filters.styled";
import StyledShared from "../../styles/pages/MoviesPage.styled";
import Genres from "./Genres";
import Sort from "./Sort";
import { Genre } from "../types/movies";
import { FiltersState, SortBy } from "../reducer/filtersReducer";

type FiltersProps = {
  genre: Genre[];
  state: FiltersState;
  actions: {
    onSortChange: (key: SortBy) => void;
    onGenresChange: (name: string) => void;
    resetFilters: () => void;
  };
  onSubmit: () => void;
};

const Filters = (props: FiltersProps) => {
  const {
    genre,
    onSubmit,
    state,
    actions: { onGenresChange, onSortChange, resetFilters },
  } = props;

  return (
    <Styled.Wrapper>
      <Styled.FlexFilters>
        <Genres data={genre} state={state} onGenresChange={onGenresChange} />
        <Sort state={state} onSortChange={onSortChange} />
      </Styled.FlexFilters>
      <Styled.FlexSubmit>
        <StyledShared.Button variant="secondary" onClick={resetFilters}>
          Reset Filters
        </StyledShared.Button>
        <StyledShared.Button variant="primary" onClick={onSubmit}>
          Submit
        </StyledShared.Button>
      </Styled.FlexSubmit>
    </Styled.Wrapper>
  );
};

export default Filters;
