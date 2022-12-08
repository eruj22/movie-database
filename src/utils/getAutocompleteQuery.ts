import { Dispatch, SetStateAction } from "react";
import * as Realm from "realm-web";

import { Movie } from "../types/movies";

export const getAutocompleteQuery = async (
  searchTerm: string,
  setAutocomplete: Dispatch<SetStateAction<[] | Movie[]>>
) => {
  const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID ?? "";
  const app = new Realm.App({ id: REALM_APP_ID });
  const credentials = Realm.Credentials.anonymous();

  const user = await app.logIn(credentials);
  const searchAutocomplete = await user.functions.searchAutocomplete(
    searchTerm
  );

  setAutocomplete(searchAutocomplete);
};
