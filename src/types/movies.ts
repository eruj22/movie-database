export interface Movie {
  adult: string;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  _id?: string;
  movieId: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Movies {
  status: string;
  data: Movie[];
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface CastAndCrew {
  adult: boolean;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
}

export interface Cast extends CastAndCrew {
  cast_id: number;
  character: string;
  order: number;
}

export interface Crew extends CastAndCrew {
  department: string;
  job: string;
}

export interface SingleMovie {
  _id: string;
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  cast: Cast[];
  crew: Crew[];
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  trailer: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
