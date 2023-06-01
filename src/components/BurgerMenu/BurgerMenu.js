import './BurgerMenu.css'
import account from '../../images/profile.svg'

export function BurgerMenu (props) {
    return (
    <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
        </label>
            <div className="menu__box">
            <ul className="menu__nav">
                <li><a className={props.currentUrl  === '/' ? " menu__item menu__item_first menu__item_current" : "menu__item menu__item_first" } href="/">Главная</a></li>
                <li><a className={props.currentUrl  === '/movies' ? "menu__item menu__item_current" : "menu__item" } href="/movies">Фильмы</a></li>
                <li><a className={props.currentUrl  === '/saved-movies' ? "menu__item menu__item_current" : "menu__item" } href="/saved-movies">Сохраненные фильмы</a></li>
                <a className='header__account-button header__account-button_burgershow' href='profile'>
                    Аккаунт
                    <img src={account} className='header__account-icon' alt='s'></img>
                </a>
            </ul>
            </div>
            
  </div>
  )

}