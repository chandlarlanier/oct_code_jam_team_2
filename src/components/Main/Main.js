import "./Main.css";
import MovieCard from "../MovieCard/MovieCard";

const Main = () => {
  return (
    <div className="main">
      <div className="main__app-description">Welcome to Haunted Tomatoes, your one-stop destination for all things spooky and cinematic! Get ready to dive into the world of Halloween movies, share your opinions, and discover new frightful favorites.</div>
      <div className="main__movie-cards">
        <div className="movie-cards__left-scroll"></div>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <div className="movie-cards__right-scroll">
        </div>
      </div>
    </div>
  );
};

export default Main;
