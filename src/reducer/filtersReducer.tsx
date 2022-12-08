export const initialState = {
  genre: new Set<string>(),
  sort: "dateDesc" as const,
};

export type FiltersState = {
  genre: Set<string>;
  sort: SortBy;
};

type Action =
  | {
      type: "TOGGLE_CHECKBOX";
      payload: {
        name: string;
      };
    }
  | {
      type: "SORT_MOVIES";
      payload: {
        sort: SortBy;
      };
    }
  | {
      type: "RESET";
    };

export type SortBy =
  | "dateAsc"
  | "dateDesc"
  | "popularityDesc"
  | "popularityAsc"
  | "voteDesc"
  | "voteAsc";

export const filtersReducer = (
  state: FiltersState,
  action: Action
): FiltersState => {
  if (action.type === "TOGGLE_CHECKBOX") {
    const { name } = action.payload;
    const selectedGenres = new Set(state.genre);
    if (state.genre.has(name)) {
      selectedGenres.delete(name);
      return {
        ...state,
        genre: selectedGenres,
      };
    }
    selectedGenres.add(name);
    return {
      ...state,
      genre: selectedGenres,
    };
  }
  if (action.type === "SORT_MOVIES") {
    const { sort } = action.payload;

    return {
      ...state,
      sort,
    };
  }
  if (action.type === "RESET") {
    return { genre: new Set<string>(), sort: "dateDesc" };
  }
  throw Error("Unknown action.");
};
