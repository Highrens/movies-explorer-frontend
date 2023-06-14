import './AboutMe.css';
import photo from '../../images/20230130_134138.jpg';
export function AboutMe(props) {
  return (
    <section className="about-me">
        <h2 className='about-me__header'>Студент</h2>
        <div className='about-me__two-coloumns'>
          <div className='about-me__coloumn'>
            <h2 className='about-me__name'>Сергей</h2>
            <h3 className='about-me__proff'>Фронтенд-разработчик, 25 лет</h3>
            <p className='about-me__text'>Я родился и живу в Самаре, с самого детства и по сей день меня увлекали технологии,
            собирая лего и биониклов с самого детсва я понимал что на 100% я 	&mdash; &#171;технарь&#187; в 15 я уже пытался что то программировать на C#.
            Но не одни программы писать! В свободное время я люблю рисовать, заниматься 3D моделированием и танцами, а в свободное время пишу свою игру.
            Именно потому я и выбрал Веб, разнообразные задачи от верстки до алгоритмов то что меня питает,
             а видеть свои результаты 	&mdash; сразу в окне потрясающе!
            </p>
            <a href='https://github.com/Highrens' className='about-me__github-link' target="_blank"  rel="noreferrer">Github</a>
            </div>  
          <div className='about-me__coloumn'>
            <img className='about-me__photo' alt='Фотография' src={photo}></img>
            </div>    
        </div>
        <h3 className='about-me__portfolio-header'>Портфолио</h3>
        <ul className='about-me__portfolio-list'>
          <li>
            <a className='about-me__portfolio-list-element' href='https://highrens.github.io/MeAndHer/' target="_blank"  rel="noreferrer">
              <p className='about-me__portfolio-link' >Одностраничный сайт</p>
              <p className='about-me__portfolio-link'>&#8599;</p>
            </a>
          </li>
          <li>
            <a className='about-me__portfolio-list-element' href='https://highrens.github.io/russian-travel/' target="_blank"  rel="noreferrer">
              <p className='about-me__portfolio-link' >Адаптивный сайт</p>
              <p className='about-me__portfolio-link'>&#8599;</p>
            </a>
          </li>
          <li>
            <a className='about-me__portfolio-list-element' href='https://welcometomesto.nomoredomains.monster/' target="_blank"  rel="noreferrer">
              <p className='about-me__portfolio-link' >Одностраничное приложение</p>
              <p className='about-me__portfolio-link'>&#8599;</p>
            </a>
          </li>
        </ul>
    </section>
  );
}

