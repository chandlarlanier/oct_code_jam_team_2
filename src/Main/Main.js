import "./Main.css";
import MovieCard from "../MovieCard/MovieCard";
import rightArrow from "../../images/right-arrow.svg";
import leftArrow from "../../images/left-arrow.svg";

const Main = () => {
  return (
    <div className="main">
      <div className="main__app-description">Welcome to Haunted Tomatoes, your one-stop destination for all things spooky and cinematic! Get ready to dive into the world of Halloween movies, share your opinions, and discover new frightful favorites.</div>
      <div className="main__movie-cards">
        <div className="movie-cards__left-scroll"><img className="left-scroll__arrow" src={leftArrow}/></div>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <div className="movie-cards__right-scroll">
            <img className='right-scroll__arrow' src={rightArrow}/>
        </div>
      </div>
    </div>
  );
};

export default Main;
