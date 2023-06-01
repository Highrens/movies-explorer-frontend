import './Profile.css';

export function Profile (props) {

    return (
    <div className="profile">
        <h2 className='profile__title'>{"Привет, " + props.name + "!"}</h2>
        <div className='profile__info'>
            <div className='profile__info-part'>
                <h3 className='profile__info-text'>Имя</h3>
                <h3 className='profile__info-text'>{props.name}</h3>
            </div>
            <div className='profile__info-part'>
                <h3 className='profile__info-text'>Email</h3>
                <h3 className='profile__info-text'>pochta@yandex.ru</h3>
            </div>
        </div>
        <button className='profile__edit' onClick={props.handleProfileEdit}>Редактировать</button>
        <button className='profile__logout' onClick={props.handleLogout}>Выйти из аккаунта</button>
    </div>
    );
  }
  