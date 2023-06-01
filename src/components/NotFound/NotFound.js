import './NotFound.css';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

export function Notfound(props) {
  const navigate = useNavigate();


  return (
      <div className="not-found">
        <div className='not-found__error'>
            <h1 className='not-found__error-number'>404</h1>
            <h2 className='not-found__error-text'>Страница не найдена</h2>
            <button className='not-found__back-button' onClick={() => navigate(-1)}>Назад</button>
        </div>
      </div>
  );
}