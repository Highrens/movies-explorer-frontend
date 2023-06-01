import './Movie.css'
import checkedmark from '../../images/checkIcon.svg'
import deleteMark from '../../images/delete-Icon.svg'

export function Movie (props){
    return (
        <li className='movie'>
        <div className='movie__header'>
            <h3 className='movie__header-title'>{props.name}</h3>
            <p className='movie__header-duration'>{props.duration}</p>
        </div>
        <img src={props.photo} alt={" Обложка фильма " + props.name} className='movie-image'></img>
        <button className={"movie__button" + (props.saved && window.location.pathname === '/movies' ? " movie__button_checked" : "")}>
            {props.saved ? <img src={window.location.pathname === '/movies' ? checkedmark : deleteMark} alt='Сохранено'></img> : "Сохранить"}
        </button>
    </li>
    )
}