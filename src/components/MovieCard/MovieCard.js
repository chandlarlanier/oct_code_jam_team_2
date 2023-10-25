import "./MovieCard.css";
import StarRating from "../StarRating/StarRating";
import { useState } from "react";

const MovieCard = ({title, poster}) => {
    const [hover, setHover] = useState(0);
  return (
    <div className="movie-card">
      <div className={`movie-card__poster`} onMouseEnter={() => setHover(1)} onMouseLeave={() => setHover(0)}>
        <img alt="Movie poster" src={poster}/>
        <div className={`movie-card__overlay ${hover ? "active" : "inactive"}`}>
            <p className='movie-card__description'>Description here</p>
        </div>
      </div>
      <div className="">{title}</div>
      <StarRating />
    </div>
  );
};

export default MovieCard;
