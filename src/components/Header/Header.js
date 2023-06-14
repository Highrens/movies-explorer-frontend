import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {LoggenInContext} from "../../contexts/CurrentUserContext";
import logo from '../../images/logo.svg';
import account from '../../images/profile.svg';
import './Header.css';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

export function Header(props) {

    const loggenIn = React.useContext(LoggenInContext);
    
    const [currentUrl, setCurrentUrl] = useState('');
    useEffect(() => {
        // Обновляем значение currentUrl при загрузке и изменении URL
        setCurrentUrl(window.location.pathname);
      }, []);


  return (
      <header className={currentUrl  === '/' ? "header header_green" : "header" }>
        <div className='header__container'>
            <div className='header__left-column'>
                <Link to='/'>
                    <img className="header__logo" src={logo} alt="Логотип Сайта movies" />
                </Link>     
                {!loggenIn ? "" :
                    <nav className='header__nav'>
                        <Link to='/movies' className='header__navigation-link header__navigation-link_selected'>Фильмы</Link>
                        <Link to='/saved-movies' className='header__navigation-link'>Сохраненные фильмы</Link>
                    </nav>
                }
            </div>
            <div className='header__right-column'>
                {!loggenIn ?
                <>
                    <Link className='header__register-button'  to='/sign-up'>
                        Регистрация
                    </Link>
                    <Link className='header__login-button' to='/sign-in'>
                        Войти
                    </Link>
                </> :
                    <>
                    <BurgerMenu currentUrl={currentUrl}/>
                    <Link className='header__account-button' to='/profile'>
                        Аккаунт
                            <img src={account} className='header__account-icon' alt='s'></img>
                    </Link>
                    </>
                }
          </div>
        </div>
      </header>
  );
}