import "./MovieCard.css";
import StarRating from "../StarRating/StarRating";
import { useState } from "react";

const MovieCard = () => {
    const [hover, setHover] = useState(0);
  return (
    <div className="movie-card">
      <div className={`movie-card__poster ${hover ? "active" : "inactive"}`} onMouseEnter={() => setHover(1)} onMouseLeave={() => setHover(0)}>
        <img alt="Movie poster"/>
        <div className='movie-card__overlay'>
            <p className='movie-card__description'>Description here</p>
        </div>
      </div>
      <div className="">Title here</div>
      <StarRating />
    </div>
  );
};

export default MovieCard;
