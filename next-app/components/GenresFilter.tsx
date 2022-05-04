import React, { useState } from "react";
import { useFiltersContext } from "../context/filters-context";

type Props = {
  show: boolean;
  genres: string[];
  handleFilterByGnere: (e: any) => void;
};

const GenresFilter = (props: Props) => {
  const { show, genres, handleFilterByGnere } = props;
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const toggleGenre = (genre: string) => {
    if (!selectedGenres.includes(genre)) {
      setSelectedGenres([...selectedGenres, genre]);
    } else {
      let newSelectedGenres = selectedGenres.filter((g) => g !== genre);
      setSelectedGenres(newSelectedGenres);
    }
  };

  return show ? (
    <div className="GenresFilter">
      <ul className="GenresFilterList">
        {genres.map((genre, index) => {
          return (
            <li
              key={index}
              onClick={() => toggleGenre(genre)}
              style={{
                backgroundColor: selectedGenres.includes(genre)
                  ? "rgb(105, 104, 104)"
                  : "rgb(7,7,7)",
              }}
            >
              <span>{genre}</span>
            </li>
          );
        })}
      </ul>
      <button onClick={() => handleFilterByGnere(selectedGenres)}>
        Apply filters
      </button>
    </div>
  ) : null;
};

export default GenresFilter;
