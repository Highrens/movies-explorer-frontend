import './BurgerMenu.css'
import { Link } from 'react-router-dom';

import account from '../../images/profile.svg'

export function BurgerMenu (props) {
    return (
    <div className="menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
        </label>
            <div className="menu__box">
            <ul className="menu__nav">
                <li><Link className={props.currentUrl  === '/' ? " menu__item menu__item_first menu__item_current" : "menu__item menu__item_first" } to="/">Главная</Link></li>
                <li><Link className={props.currentUrl  === '/movies' ? "menu__item menu__item_current" : "menu__item" } to="/movies">Фильмы</Link></li>
                <li><Link className={props.currentUrl  === '/saved-movies' ? "menu__item menu__item_current" : "menu__item" } to="/saved-movies">Сохраненные фильмы</Link></li>
                <li className='menu__account-button'>
                    <Link className='menu__account-button-link' to='/profile'>
                        Аккаунт
                        <img src={account} className='header__account-icon' alt='s'></img>
                    </Link>
                </li>
            </ul>
            </div>
            
  </div>
  )

}