import React from "react";
import MovieCard from "./MovieCard";

type Props = {
  data: {
    classname: string;
    movies: Array<{
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
    type: string;
  };
};

const Featured = (props: Props) => {
  const { classname, movies, type } = props.data;
  return (
    <section className={classname + " section_featured"}>
      <h2>{type === "fan" ? "Fan Favourites" : "Featured Videos"}</h2>
      <div className="featured">
        {movies.map((movie, index) => {
          return <MovieCard key={index} movie={movie} />;
        })}
      </div>
    </section>
  );
};

export default Featured;
