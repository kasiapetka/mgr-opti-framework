import { createContext, useContext } from "react";
export type GlobalContent = {
  selectedGenres: Array<string>;
  setSelectedGenres: (genres: Array<string>) => void;
  //  keyword: string;
  // setKeyword: (keyword: string) => void;
};

export const FiltersContext = createContext<GlobalContent>({
  selectedGenres: [],
  setSelectedGenres: () => {},
  // keyword: '',
  // setKeyword: ()=>{}
});

export const useFiltersContext = () => useContext(FiltersContext);
