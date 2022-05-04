import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import api from "../api/api-service";
import { useMoviesContext } from "../context/movies-context";

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

const MovieList = (props: Props) => {
  const { data } = props;
  const { fetchedMovies, setFetchedMovies } = useMoviesContext();
  const [moviesLoaded, setMoviesLoaded] = useState(LIMIT_MOVIES_PER_LOAD);
  const [count, setCount] = useState(LIMIT_MOVIES_PER_LOAD * 2 + 1);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setFetchedMovies([...data.movies]);
  }, []);

  useEffect(() => {
    if (isMounted) {
      api
        .get("/movies", {
          limit: LIMIT_MOVIES_PER_LOAD,
          skip: moviesLoaded,
        })
        .then((data) => {
          setCount(data.count);
          setFetchedMovies([...fetchedMovies, ...data.movies]);
        });
      setIsMounted(false);
    }
  }, [isMounted]);

  const handleLoadMore = () => {
    setMoviesLoaded(moviesLoaded + LIMIT_MOVIES_PER_LOAD);
    setIsMounted(true);
    console.log(fetchedMovies);
  };

  return (
    <React.Fragment>
      <div className="MovieList">
        {fetchedMovies.map((movie, index) => {
          return <MovieCard key={index} movie={movie} />;
        })}
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
