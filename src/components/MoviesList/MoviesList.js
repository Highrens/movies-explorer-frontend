import "./MoviesList.css";
import { Movie } from "../Movie/Movie";
import { Morebutton } from "../MoreButton/MoreButton";

import Preloader from "../Preloader/Preloader";

export function MoviesList(props) {

  function isMovieSaved(movie) {
    return ( props.savedMovies.some((savedMovie) => savedMovie.movieId === movie.id)) 
  }

  function ToShow() {
    if (props.tip !== "") {
      return <h2 className="movies__tip">{props.tip}</h2>;
    }
    if (props.showPreloader) {
      return <Preloader />;
    }
    if (props.movies !== null) {
      return (
        <ul className="movies">
          {props.movies.map((data, i) => (
            <Movie key={i}
             saved={props.saved || isMovieSaved(data)} 
             onMovieButtonCkick={props.onMovieButtonCkick}
             movie={data} />
          ))}
        </ul>
      );
    }
  }

  return (
    <>
      <section aria-label="movies-container" className="movies-container">
        {ToShow()}
      </section>
      {props.showMoreButton ? (
        <Morebutton HandleClick={props.MoreButtonClick} />
      ) : (
        <></>
      )}
    </>
  );
}
