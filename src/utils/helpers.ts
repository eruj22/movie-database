import { FiltersState, SortBy } from "../reducer/filtersReducer";
import { Crew, Movie } from "../types/movies";

export const transformDate = (date: string) => {
  if (!date) {
    return "";
  }

  const splitDate = date.split("-");

  return `${splitDate[2]}.${splitDate[1]}.${splitDate[0]}`;
};

export const findPersonInCrew = (person: string, crew: Crew[]) => {
  const people = crew
    .filter((crewMember) => crewMember.job === person)
    .map((person) => person.name);
  return people;
};

export const getRuntime = (runtime: number) => {
  if (!runtime) {
    return "";
  }

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return `${hours}h ${minutes}m`;
};

export const formatRating = (rating: number) => {
  if (!rating) {
    return "/";
  }

  const number = rating.toFixed(1);
  const splitNumber = number.split(".");

  return splitNumber[1] === "0" ? splitNumber[0] : number;
};

export const sortList: {
  key: SortBy;
  text: string;
}[] = [
  {
    key: "dateDesc",
    text: "Date Descending",
  },
  {
    key: "dateAsc",
    text: "Date Ascending",
  },
  {
    key: "popularityDesc",
    text: "Popularity Descending",
  },
  {
    key: "popularityAsc",
    text: "Popularity Ascending",
  },
  {
    key: "voteDesc",
    text: "Vote Descending",
  },
  {
    key: "voteAsc",
    text: "Vote Ascending",
  },
];

export const sortingOptions = ["date", "popularity", "vote"] as const;

export const getUrlForFilters = (state: FiltersState) => {
  const indexOfSortOption = sortingOptions.findIndex((item) =>
    state.sort.includes(item)
  );
  const sortKey = sortingOptions[indexOfSortOption];

  const params = {
    genre: [...state.genre].join(","),
    ...{ [sortKey]: state.sort.includes("Asc") ? "1" : "-1" },
  };

  return `api/filter?` + new URLSearchParams(params);
};

export const getUniqueCrewMembers = (array: Crew[]) => {
  const newArray = new Map();

  array.forEach((item) => {
    const propertyValue = item["id"];

    if (newArray.has(propertyValue)) {
      const prevJob = item.job?.split(",")[0];
      const curJob = newArray.get(propertyValue).job;

      item.job = `${prevJob}, ${curJob}`;

      newArray.set(propertyValue, { ...item });
    } else {
      newArray.set(propertyValue, item);
    }
  });

  return Array.from(newArray.values());
};
