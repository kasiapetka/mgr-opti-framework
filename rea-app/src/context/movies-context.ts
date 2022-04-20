import { createContext, useContext } from "react";
export type GlobalContent = {
  fetchedMovies: Array<object>;
  setFetchedMovies: (fetchedMovie: Array<object>) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

export const MoviesContext = createContext<GlobalContent>({
  fetchedMovies: [],
  setFetchedMovies: () => {},
  isLoading: false,
  setIsLoading: () => {},
});

export const useMoviesContext = () => useContext(MoviesContext);
