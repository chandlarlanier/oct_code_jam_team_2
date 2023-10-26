import "./Main.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "../MovieCard/MovieCard";
import { movieArray } from "../../utils/constants.js";
import Slider from "react-slick";

const Main = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="main">
      <div className="main__app-description">
        Welcome to Haunted Tomatoes, your one-stop destination for all things
        spooky and cinematic! Get ready to dive into the world of Halloween
        movies, share your opinions, and discover new frightful favorites.
      </div>
      <div className="main__carousel">
        <Slider {...settings} className="carousel__slider">
          {movieArray.map((movie) => {
            return (
              <MovieCard
                title={movie.title}
                poster={movie.card}
                description={movie.description}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Main;
