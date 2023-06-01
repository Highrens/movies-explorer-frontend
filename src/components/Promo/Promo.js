import './Promo.css';
import landingLogo from '../../images/landing-logo.svg'

export function Promo(props) {
  return (
   <div className='promo__container'>
      <div className='promo'>
          <h1 className='promo__landing-text'>Учебный проект студента факультета Веб-разработки.</h1>
          <div className='promo__landing-logo-container'>
            <img className='promo__landing-logo' src={landingLogo} alt='logo'></img>
          </div>
         
      </div>
    </div>
  );
}