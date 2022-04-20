import { createContext, useContext } from "react";
export type GlobalContent = {
  genres: string[];
  setGenres: (genres: string[]) => void;
};

export const GenresContext = createContext<GlobalContent>({
  genres: [],
  setGenres: () => {},
});

export const useGenresContext = () => useContext(GenresContext);
