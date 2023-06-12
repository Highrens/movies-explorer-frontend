const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';


const _getResponseData = (res) => {
  if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

export const getMovies = () => {
  return fetch(BASE_URL, {
    method: 'GET'})
  .then(_getResponseData);
};
