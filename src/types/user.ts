export interface UserData {
  _id: string;
  name: string;
  email: string;
  image: string;
  emailVerified: boolean;
  watchlist?: string[];
}

export interface SessionData {
  user: {
    name: string;
    email: string;
    image: string;
  };
  expires: string;
}
