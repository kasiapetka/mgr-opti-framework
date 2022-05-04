import React, { Fragment, useState } from "react";
import MovieListingPage from "../../components/MovieListingPage";
import api from "../../api/api-service";
import { MoviesContext } from "../../context/movies-context";

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

const LIMIT_MOVIES_PER_LOAD = 12;

const Movies = (props: Props) => {
  const { data } = props;
  const [fetchedMovies, setFetchedMovies] = useState<Array<object>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <Fragment>
      <MoviesContext.Provider
        value={{
          fetchedMovies,
          setFetchedMovies,
          isLoading,
          setIsLoading,
        }}
      >
        <MovieListingPage data={data} />
      </MoviesContext.Provider>
    </Fragment>
  );
};

export default Movies;

export const getServerSideProps = async () => {
  const data = await api.get(`/movies`, { limit: LIMIT_MOVIES_PER_LOAD });

  return {
    props: { data: data },
  };
};
