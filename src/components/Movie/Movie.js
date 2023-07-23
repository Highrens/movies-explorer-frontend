import "./Movie.css";
import checkedmark from "../../images/checkIcon.svg";
import deleteMark from "../../images/delete-Icon.svg";

export function Movie(props) {
  function handleMovieButtonCkick (){
    props.onMovieButtonCkick(props.movie, props.saved);
  }

  return (
    <li className="movie">
      <div className="movie__header">
        <h3 className="movie__header-title">{props.movie.nameRU}</h3>
        <p className="movie__header-duration">
          {Math.floor(props.movie.duration / 60) + " ч "+ (props.movie.duration % 60 === 0 ? "" : props.movie.duration % 60 + " м")}
        </p>
      </div>
      <a href={props.movie.trailerLink} target="blank" rel="noreferrer">
        <img
          src={
            window.location.pathname === "/saved-movies"
              ? props.movie.image
              : "https://api.nomoreparties.co/" + props.movie.image.url
          }
          alt={" Обложка фильма " + props.movie.nameRU}
          className="movie-image"
        />
      </a>
      <button
        className={
          "movie__button" +
          (props.saved && window.location.pathname === "/movies"
            ? " movie__button_checked"
            : "")
        }
        onClick={handleMovieButtonCkick}
      >
        {props.saved ?  
        (<img src={window.location.pathname === "/movies" ? checkedmark : deleteMark}  alt="Сохранено"/>)
        : ("Сохранить")
       }
      </button>
    </li>
  );
}
