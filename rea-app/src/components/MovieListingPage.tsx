import React, { useState } from "react";
import MovieList from "./MovieList";
import MovieListingPageFilters from "./MovieListingPageFilters";
import { GenresContext } from "../context/genres-context";

type Props = {};

const MovieListingPage = (props: Props) => {
  const [genres, setGenres] = useState<string[]>([]);

  return (
    <div className="MovieListingPage">
      <GenresContext.Provider value={{ genres, setGenres }}>
        <MovieListingPageFilters />
      </GenresContext.Provider>
      <MovieList />
    </div>
  );
};

export default MovieListingPage;
