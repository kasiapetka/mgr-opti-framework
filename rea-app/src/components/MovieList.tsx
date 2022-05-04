import React, { useEffect, useState } from "react";
import { useMoviesContext } from "../context/movies-context";
import MovieCard from "./MovieCard";
import api from "../api/api-service";

type Props = {};

const LIMIT_MOVIES_PER_LOAD = 12;

const MovieList = (props: Props) => {
  const [moviesLoaded, setMoviesLoaded] = useState(LIMIT_MOVIES_PER_LOAD);
  const [isMounted, setIsMounted] = useState(false);
  const { fetchedMovies, setFetchedMovies, isLoading, setIsLoading } =
    useMoviesContext();
  const [count, setCount] = useState(LIMIT_MOVIES_PER_LOAD * 2 + 1);

  useEffect(() => {
    setIsLoading(true);
    api.get(`/movies`, { limit: LIMIT_MOVIES_PER_LOAD }).then((data) => {
      setFetchedMovies(data.movies);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (isMounted) {
      setIsLoading(true);
      api
        .get(`/movies`, {
          limit: LIMIT_MOVIES_PER_LOAD,
          skip: moviesLoaded,
        })
        .then((data) => {
          setCount(data.count);
          setFetchedMovies([...fetchedMovies, ...data.movies]);
        });
      setIsMounted(false);
      setIsLoading(false);
    }
  }, [isMounted]);

  const handleLoadMore = () => {
    setMoviesLoaded(moviesLoaded + LIMIT_MOVIES_PER_LOAD);
    setIsMounted(true);
  };

  if (isLoading) {
    return <p>Loading data...</p>;
  }
  return (
    <React.Fragment>
      <div className="MovieList">
        {fetchedMovies.map((movie: any, index: number) => (
          <MovieCard key={index} movie={movie} />
        )) || <p>Couldn't load the data... :(</p>}
      </div>
      <div className="Loadmore">
        {moviesLoaded + LIMIT_MOVIES_PER_LOAD >= count ? null : (
          <button onClick={handleLoadMore}>Show more</button>
        )}
      </div>
    </React.Fragment>
  );
};

export default MovieList;
