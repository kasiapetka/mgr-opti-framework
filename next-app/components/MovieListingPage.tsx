import React, { useState } from "react";
import MovieList from "./MovieList";
import MovieListingPageFilters from "./MovieListingPageFilters";

type Props = {
  data: {
    count: number;
    movies: Array<{
      _id: string;
      id: number;
      title: string;
      year: number;
      runtime: number;
      genres: string[];
      director: string;
      actors: string;
      plot: string;
      posterUrl: string;
    }>;
  };
};

const MovieListingPage = (props: Props) => {
  const { data } = props;

  const [genres, setGenres] = useState<string[]>([]);

  return (
    <div className="MovieListingPage">
      <MovieListingPageFilters />
      <MovieList data={data} />
    </div>
  );
};

export default MovieListingPage;
