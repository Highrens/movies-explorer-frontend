import React, { useEffect, useState } from 'react';

import logo from '../../images/logo.svg';
import account from '../../images/profile.svg'
import './Header.css';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

const isLogin = true;




export function Header(props) {
    const [currentUrl, setCurrentUrl] = useState('');
    useEffect(() => {
        // Обновляем значение currentUrl при загрузке и изменении URL
        setCurrentUrl(window.location.pathname);
      }, []);


  return (
      <header className={currentUrl  === '/' ? "header header_green" : "header" }>
        <div className='header__container'>
            <div className='header__left-column'>
                <a href='/'>
                    <img className="header__logo" src={logo} alt="Логотип Сайта movies" />
                </a>     
                <nav className='header__nav'>
                    <a href='movies' className='header__navigation-link header__navigation-link_selected'>Фильмы</a>
                    <a href='saved-movies' className='header__navigation-link'>Сохраненные фильмы</a>
                </nav>
            </div>
            <div className='header__right-column'>
                {!isLogin ?
                <>
                    <a className='header__register-button'  href='sign-up'>
                        Регистрация
                    </a>
                    <a className='header__login-button' href='sign-in'>
                        Войти
                    </a>
                </> :
                    <>
                    <BurgerMenu currentUrl={currentUrl}/>
                        <a className='header__account-button' href='profile'>
                            Аккаунт
                            <img src={account} className='header__account-icon' alt='s'></img>
                        </a>
                    </>
                }
          </div>
        </div>
      </header>
  );
}