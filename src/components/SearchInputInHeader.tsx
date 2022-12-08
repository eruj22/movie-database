import { useRouter } from "next/router";
import { FormEvent, useEffect, useRef, useState } from "react";

import { SearchIcon } from "../icons/SearchIcon";
import Styled from "./SearchInputInHeader.styled";
import { Movie } from "../types/movies";
import useOnClickOutside from "../hooks/useOnClickOutside";
import { useDebounce } from "../hooks/useDebounce";
import { getAutocompleteQuery } from "../utils/getAutocompleteQuery";

export const SearchInputInHeader = () => {
  const { push, isReady, query } = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [autocomplete, setAutocomplete] = useState<Movie[] | []>([]);
  const [isSearchInputShown, setIsSearchInputShown] = useState(false);
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const menuRef = useRef(null);
  const debouncedSearchTerm = useDebounce(searchTerm, 400);
  useOnClickOutside(menuRef, () => setShowAutocomplete(false));

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);

    if (event.target.value.length === 0) {
      setAutocomplete([]);
    }
  };

  const clearAutocomplete = () => setAutocomplete([]);

  const onSearchButtonClick = () => {
    setIsSearchInputShown(!isSearchInputShown);

    if (isSearchInputShown) {
      setSearchTerm("");
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    push({
      pathname: `/search/${searchTerm}`,
    });

    setSearchTerm("");
    setShowAutocomplete(false);
  };

  useEffect(() => {
    if (isReady && typeof query.term === "string") {
      setSearchTerm(query.term);
    }
  }, [isReady, query.term]);

  useEffect(() => {
    if (searchTerm.length > 3 && debouncedSearchTerm) {
      try {
        getAutocompleteQuery(searchTerm, setAutocomplete);
      } catch (error) {
        console.log(error);
      }
    }
    // eslint-disable-next-line
  }, [debouncedSearchTerm]);

  return (
    <Styled.Wrapper onSubmit={handleSubmit} ref={menuRef}>
      <Styled.Input
        type="search"
        placeholder="Search for your favorite movie"
        onChange={onInputChange}
        value={searchTerm}
        onFocus={() => setShowAutocomplete(true)}
        isShown={isSearchInputShown}
      />
      <Styled.IconButton
        type="button"
        aria-label={
          isSearchInputShown ? "Close search input" : "Open search input"
        }
        onClick={onSearchButtonClick}
        isShown={isSearchInputShown}
      >
        <SearchIcon />
      </Styled.IconButton>

      <Styled.AutocompleteMenu
        show={showAutocomplete && autocomplete.length > 0}
      >
        {autocomplete.map((movie) => {
          return (
            <Styled.AutocompleteItem
              key={movie.title}
              onClick={clearAutocomplete}
            >
              <Styled.AutocompleteLink href={`/movie/${movie._id}`}>
                {movie.title}
              </Styled.AutocompleteLink>
            </Styled.AutocompleteItem>
          );
        })}
      </Styled.AutocompleteMenu>
    </Styled.Wrapper>
  );
};
