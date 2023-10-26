import "./MovieCard.css";
import StarRating from "../StarRating/StarRating";
import { useState } from "react";

const MovieCard = ({ title, poster, description }) => {
  const [hover, setHover] = useState(0);
  return (
    <div className="movie-card">
      <div
        className="movie-card__poster"
        onMouseEnter={() => setHover(1)}
        onMouseLeave={() => setHover(0)}
      >
        <img alt="Movie poster" src={poster} className="movie-card__image" />
        <div
          className={`movie-card__overlay ${
            hover
              ? "movie-card__overlay_active"
              : "movie-card__overlay_inactive"
          }`}
        >
          <p className="movie-card__description">{description}</p>
        </div>
      </div>
      <div className="movie-card__info">
        <p className="movie-card__title">{title}</p>
        <StarRating />
      </div>
    </div>
  );
};

export default MovieCard;
