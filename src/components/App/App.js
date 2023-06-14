import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate, json } from "react-router-dom";
import { Header } from "../Header/Header.js";
import { Footer } from "../Footer/Footer.js";
import { Landing } from "../Landing/Landing";
import { Notfound } from "../NotFound/NotFound";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { Profile } from "../Profile/Profile";
import { Movies } from "../Movies/Movies";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import ProtectedRoute from "../ProtectedRoute";

import {
  register,
  login,
  getUserInfo,
  getMySavedMovies,
  saveMovie,
  deleteMovie,
  editProfile,
} from "../../utils/MainApi";

import { getMovies } from "../../utils/MoviesApi.js";

import {
  CurrentUserContext,
  LoggenInContext,
} from "../../contexts/CurrentUserContext";
import {
  showMoreBigPicture,
  showMoreButtonDefault,
  showMoreMediumPicture,
  bigPicture,
  mediumPicture,
  movieOnPageAmountDefalut,
  movieOnPageBigPicture,
  movieOnPageMediumPicture,
  movieOnPageSmallPicture,
  shortDuration,
  conflictErrorCode,
} from "../../constants/constants";

function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({});
  const [loggenIn, setLoggenIn] = useState(true);
  //Все Сохраненные пользователем фильмы
  const [savedMovies, setSavedMovies] = useState([]);
  //Отфильтрованные фильмы (показываются на странице)
  const [filtredMovies, setFiltredMovies] = useState([]);
  const [savedFiltredMovies, setSavedFiltredMovies] = useState([]);
  //Возможные сообщения ошибки
  const [movieTip, setMovieTip] = useState("");
  const [savedMovieTip, setSavedMovieTip] = useState("");
  const [error, setError] = useState("");
  //Прелоудер
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);
  //ЧекБокс короткометражек
  const [shortsCheckbox, setShortsCheckbox] = useState(true);
  const [savedShortsCheckbox, setSavedShortsCheckbox] = useState(true);
  //Критерии поиска
  const [searchText, setSearchText] = useState("");
  const [savedSearchText, setSavedSearchText] = useState("");
  //Кнопка "Еще"
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [MoreToShow, setMoreToShow] = useState(showMoreButtonDefault);
  const [moviesAmount, setMoviesAmount] = useState(movieOnPageAmountDefalut);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    //Если пользователь есть - грузим его и сохраненные им фильмы
    if (localStorage.getItem("jwt")) {
      getUserInfo()
        .then((res) => {
          if (res) {
            setLoggenIn(true);
            setCurrentUser(res);
          }
        })
        .catch((data) => console.log(data));
      getMySavedMovies()
        .then((res) => {
          setSavedMovies(res);
          setSavedFiltredMovies(res);
        })
        .catch((data) => console.log(data));
      // Грузим чекбок и фильмы
      if (localStorage.getItem("Shorts")) {
        setShortsCheckbox(localStorage.getItem("Shorts") === "true");
      }
      if (localStorage.getItem("SearchText")) {
        setSearchText(localStorage.getItem("SearchText"));
      }
    } else {
      setLoggenIn(false);
    }
    // удалить обработчик события при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //Фильтрация фильмов
  useEffect(() => {
    if (localStorage.getItem("AllMovies")) {
      setFiltredMovies(filterMovies());
    }
  }, [searchText, shortsCheckbox, moviesAmount]);

  //Фильтрация сохраненных фильмов
  useEffect(() => {
    if (window.location.pathname === "/saved-movies") {
      setSavedFiltredMovies(filterSaved());
    }
  }, [savedSearchText, savedShortsCheckbox, savedMovies]);

  function handleResize() {
    if (window.innerWidth > bigPicture) {
      setMoreToShow(showMoreBigPicture);
      setMoviesAmount(movieOnPageBigPicture);
    } else if (window.innerWidth > mediumPicture) {
      setMoreToShow(showMoreMediumPicture);
      setMoviesAmount(movieOnPageMediumPicture);
    } else {
      setMoviesAmount(movieOnPageSmallPicture);
    }
  }

  //Кнопка фильма
  function onMovieButtonClick(movie, isSaved) {
    // Если фильм сохранен
    if (isSaved) {
      //Ищем фильм для удаления
      let movieToDelete = savedMovies.find(
        (savedMovie) => savedMovie.movieId === movie.id
      );
      if (movieToDelete === undefined) {
        movieToDelete = savedMovies.find(
          (savedMovie) => savedMovie.movieId === movie.movieId
        );
      }
      //Удаляем
      deleteMovie(movieToDelete._id)
        .then((res) => {
          getMySavedMovies().then((res) => {
            setSavedMovies(res);
          });
        })
        .catch((data) => console.log(data));
    } else {
      //Если фильм не сохранен - сохраняем
      saveMovie(movie)
        .then((res) => {
          getMySavedMovies().then((res) => {
            setSavedMovies(res);
          });
        })
        .catch((data) => console.log(data));
    }
  }

  //Поиск
  function filterByCheckbox(filtredMovies, checkbox) {
    if (!checkbox) {
      return (filtredMovies = filtredMovies.filter(
        (movie) => movie.duration > shortDuration
      ));
    }
    return filtredMovies;
  }

  function saveSearchText(searchText) {
    localStorage.setItem("SearchText", searchText);
  }

  function saveShortsCheckbox(isChecked) {
    localStorage.setItem("Shorts", isChecked);
  }

  function filterMovies() {
    setMovieTip("");

    let AllMovies = JSON.parse(localStorage.getItem("AllMovies"));
    if (searchText === "") {
      setMovieTip("Нужно ввести ключевое слово");
      return AllMovies;
    }
    let filtredMovies = AllMovies.filter((movie) =>
      movie.nameRU.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
    //localStorage.setItem("filtredMovies", JSON.stringify(filtredMovies));
    filtredMovies = filterByCheckbox(filtredMovies, shortsCheckbox);

    if (filtredMovies.length === 0) setMovieTip("Ничего не найдено");

    if (filtredMovies.length > moviesAmount) {
      setShowMoreButton(true);
    } else {
      setShowMoreButton(false);
    }

    filtredMovies = filtredMovies.slice(0, moviesAmount);
    return filtredMovies;
  }

  function HandleMoreButtonClick() {
    setMoviesAmount(moviesAmount + MoreToShow);
  }

  function handleSearchSumbit(text) {
    if (text === "") {
      setMovieTip("Нужно ввести ключевое слово");
      setShowMoreButton(false);
      return;
    }
    setMovieTip("");
    if (!localStorage.getItem("AllMovies")) {
      setIsMoviesLoading(true);
      getMovies()
        .then((res) => {
          localStorage.setItem("AllMovies", JSON.stringify(res));
          setSearchText(text);
          saveSearchText(text);
        })
        .catch((err) => {
          setMovieTip(`Во время запроса произошла ошибка. Возможно,
           проблема с соединением или сервер недоступен. 
           Подождите немного и попробуйте ещё раз`);
          console.log(err);
        })
        .finally(() => {
          setIsMoviesLoading(false);
        });
    } else {
      setSearchText(text);
      saveSearchText(text);
    }
  }

  function checkboxChange(isChecked) {
    setShortsCheckbox(isChecked);
    saveShortsCheckbox(isChecked);
  }
  // Сохраненные фильмы
  function showAllSavedMovies() {
    setSavedMovieTip("");
    setSavedFiltredMovies(savedMovies);
  }

  function handleSavedMoviesSearchSubmit(text) {
    // if (text === "") {
    //   setSavedMovieTip("Нужно ввести ключевое слово");
    //   return;
    // };
    setSavedMovieTip("");
    setSavedSearchText(text);
  }

  function filterSaved() {
    if (savedSearchText === "") {
      return savedMovies;
    }
    let filtredMovies = savedMovies.filter((movie) =>
      movie.nameRU
        .toLocaleLowerCase()
        .includes(savedSearchText.toLocaleLowerCase())
    );
    filtredMovies = filterByCheckbox(filtredMovies, savedShortsCheckbox);
    if (filtredMovies.length === 0) setSavedMovieTip("Ничего не найдено");
    return filtredMovies;
  }

  function ChangeSavedCheckbox(isChecked) {
    setSavedShortsCheckbox(isChecked);
  }

  //Редактирование Аккаунта
  function EditProfile({ name, email }) {
    setError("");
    editProfile({ name, email })
      .then((res) => {
        setError("Успешно обновленно!");
        setCurrentUser(res);
      })
      .catch((err) => {
        if (err.includes(conflictErrorCode)) {
          setError("Пользователь с таким Email уже существует");
        } else {
          setError("Что то пошло не так...");
        }
      });
  }
  // Все что связанно с входом в Аккаунт
  function handleRegisterSubmit({ name, password, email }) {
    setError("");
    register(name, password, email)
      .then((res) => {
        handleLoginSubmit({ password, email });
      })
      .catch((data) => {
        if (data.includes(conflictErrorCode)) {
          setError("Пользователь с таким Email уже существует");
        } else {
          setError("Что то пошло не так...");
        }
        console.log(data);
      });
  }
  function handleLoginSubmit({ password, email }) {
    setError("");
    login(password, email)
      .then((res) => {
        if (res) {
          setLoggenIn(true);
          localStorage.setItem("jwt", res.name);
          console.log(res);
          navigate("/movies", { replace: true });
          setCurrentUser(res);
          if (localStorage.getItem("Shorts")) {
            setShortsCheckbox(localStorage.getItem("Shorts") === "true");
          }
          if (localStorage.getItem("SearchText")) {
            setSearchText(localStorage.getItem("SearchText"));
          }
        }
      })
      .then((res) => {
        getMySavedMovies()
          .then((res) => {
            setSavedFiltredMovies(res);
            setSavedMovies(res);
          })
          .catch((data) => console.log(data));
      })
      .catch((data) => {
        setError("Что то пошло не так...");
        console.log(data);
      });
  }
  function handleSignOut() {
    setLoggenIn(false);

    localStorage.clear();

    setSavedMovies([]);
    setFiltredMovies([]);
    setSavedFiltredMovies([]);

    setSearchText("");
    setMovieTip("")
    setSavedMovieTip("")
    setShowMoreButton(false);
    navigate("/", { replace: true });
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <LoggenInContext.Provider value={loggenIn}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Landing />
                  <Footer />
                </>
              }
            />
            <Route
              path="/movies"
              element={
                loggenIn ? (
                  <ProtectedRoute
                    element={Movies}
                    loggedIn={loggenIn}
                    onMovieButtonCkick={onMovieButtonClick}
                    handleSearchSumbit={handleSearchSumbit}
                    HandleMoreButtonClick={HandleMoreButtonClick}
                    checkboxChange={checkboxChange}
                    movies={filtredMovies}
                    savedMovies={savedMovies}
                    MoreToShow={MoreToShow}
                    tip={movieTip}
                    showMoreButton={showMoreButton}
                    showPreloader={isMoviesLoading}
                  />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/saved-movies"
              element={
                loggenIn ? (
                  <ProtectedRoute
                    element={SavedMovies}
                    loggedIn={loggenIn}
                    onMovieButtonCkick={onMovieButtonClick}
                    //Поиск по сохраненным фильмам
                    handleSearchSumbit={handleSavedMoviesSearchSubmit}
                    HandleMoreButtonClick={HandleMoreButtonClick}
                    checkboxChange={ChangeSavedCheckbox}
                    movies={savedFiltredMovies}
                    MoreToShow={MoreToShow}
                    tip={savedMovieTip}
                    showMoreButton={false}
                    showPreloader={isMoviesLoading}
                    savedMovies={savedMovies}
                    //Показываем Все фильмы (при первом запуске)
                    showAllSavedMovies={showAllSavedMovies}
                  />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/profile"
              element={
                loggenIn ? (
                  <ProtectedRoute
                    element={Profile}
                    handleProfileEdit={EditProfile}
                    handleLogout={handleSignOut}
                    loggedIn={loggenIn}
                    err={error}
                  />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/sign-up"
              element={
                !loggenIn ? (
                  <Register onSubmit={handleRegisterSubmit} error={error} />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route
              path="/sign-in"
              element={
                !loggenIn ? (
                  <Login onSubmit={handleLoginSubmit} error={error} />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
            <Route path="/404" element={<Notfound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </LoggenInContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
