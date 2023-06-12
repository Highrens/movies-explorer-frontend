// export const BASE_URL = 'https://api.iwillwatch.nomoredomains.monster';
 export const BASE_URL = 'http://localhost:3001';

const _getResponseData = (res) => {
  if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
} 

export const register = ( name, password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, password, email})
  })
  .then(_getResponseData); 
};

export const login = ( password, email) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({password, email})
    })
    .then(_getResponseData); 
  };

export const getMySavedMovies = () => {
  return fetch(BASE_URL  + '/movies', {
    method: 'GET',
    credentials: 'include'})
  .then(_getResponseData);
}

export const getUserInfo = () => {
  return fetch(BASE_URL  + '/users/me', {
    method: 'GET',
    credentials: 'include',})
  .then(_getResponseData);
}

export const editProfile = ({name, email}) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email})
  })
  .then(_getResponseData); 
};

export const saveMovie = (Film) => {
  return fetch(BASE_URL  + '/movies', {
    method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
    body: JSON.stringify({
      country: Film.country,
      director: Film.director,
      duration: Film.duration,
      year: Film.year,
      description: Film.description,
      image: "https://api.nomoreparties.co/" + Film.image.url,
      trailerLink: Film.trailerLink,
      thumbnail: "https://api.nomoreparties.co/" + Film.image.formats.thumbnail.url,
      movieId: Film.id,
      nameRU: Film.nameRU,
      nameEN: Film.nameEN
    })
  })
  .then(_getResponseData);
}

export const deleteMovie = (movieId) => {
  return fetch(BASE_URL  + '/movies/' + movieId, {
    method: 'DELETE',
    credentials: 'include',})
  .then(_getResponseData);
}