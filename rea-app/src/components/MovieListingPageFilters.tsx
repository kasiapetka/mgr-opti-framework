import React, { useState } from "react";
import GenresFilter from "./GenresFilter";
import Filter from "./utilities/Filter";
import Search from "./utilities/Search";
import { useGenresContext } from "../context/genres-context";
import { useMoviesContext } from "../context/movies-context";
import api from "../api/api-service";
import { useFiltersContext } from "../context/filters-context";

type Props = {};

const MovieListingPageFilters = (props: Props) => {
  const [showGenresFilter, setShowGenresFilter] = useState(false);
  const { genres, setGenres } = useGenresContext();
  const { setFetchedMovies, isLoading } = useMoviesContext();
  const { selectedGenres, setSelectedGenres } = useFiltersContext();

  const handleToggle = (toggle: boolean) => {
    setShowGenresFilter(toggle);
    if (genres.length === 0) {
      api.get("/genres").then((data) => setGenres(data));
    }
  };

  const handleFilterByGenre = (genres: string[]) => {
    setSelectedGenres(genres);
    if (genres?.length === 0) {
      api.get("/movies").then((data) => setFetchedMovies(data.movies));
    } else {
      api
        .get("/movies", {
          genres: JSON.stringify([...genres]),
        })
        .then((data) => setFetchedMovies(data.movies));
    }
  };

  const handleSearch = (keyword: string) => {
    api
      .get("/movies", {
        keyword: keyword,
      })
      .then((data) => setFetchedMovies(data.movies));
  };

  if (isLoading) {
    return <p></p>;
  }

  return (
    <React.Fragment>
      <div className="MovieListingHeader">
        <Search handleSearch={handleSearch} />
        <Filter show={showGenresFilter} handleToggle={handleToggle} />
      </div>
      <GenresFilter
        show={showGenresFilter}
        genres={genres}
        handleFilterByGnere={handleFilterByGenre}
      />
    </React.Fragment>
  );
};

export default MovieListingPageFilters;
