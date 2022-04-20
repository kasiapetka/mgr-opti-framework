import React from "react";
import imgPlaceholder from "../assets/movie_placeholder.png";

type Props = {
  movie: {
    id: number;
    actors: string;
    director: string;
    genres: Array<string>;
    plot: string;
    posterUrl: string;
    runtime: number;
    title: string;
    year: number;
  };
};

const MovieCard = (props: Props) => {
  const { movie } = props;

  return (
    <div className="MovieCard">
      <div className="MovieCardHeader">
        <img
          src={movie?.posterUrl ? movie?.posterUrl : imgPlaceholder}
          alt=""
          height={350}
        />
      </div>

      <div className="MovieCardBody">
        <div className="MovieCardTags">
          {movie.genres?.map((genre, index) => {
            return (
              <span className="MovieCardTag" key={index}>
                {genre}
              </span>
            );
          })}
        </div>

        <h4>{movie.title}</h4>
        <p>
          <span className="MovieCardCaptionsBold">Director:</span>{" "}
          {movie.director}
        </p>
        <p>
          <span className="MovieCardCaptionsBold">Stars:</span> {movie.actors}
        </p>
      </div>

      <div className="MovieCardFooter">
        <p>
          {movie.year} | {movie.runtime} min
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
