import "./Main.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "../MovieCard/MovieCard";
import { movieArray } from "../../utils/Constants.js";
import Slider from "react-slick";

const Main = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
        <Slider {... settings}>
          {movieArray.map((movie) => {
            return <MovieCard title={movie.Title} poster={movie.Card} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Main;
