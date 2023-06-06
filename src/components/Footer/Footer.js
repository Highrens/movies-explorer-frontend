import './Footer.css';

export function Footer(props) {
  return (
    <footer className="footer">
        <h3 className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className='footer__copyright-block'>
            <h3 className='footer__date'>&#169; 2023</h3>
            <ul className="footer__links">
                <li className='footer__link-container'><a  className='footer__link' href="https://practicum.yandex.ru/"  target="_blank"  rel="noreferrer">Яндекс.Практикум</a></li>
                <li className='footer__link-container'><a  className='footer__link' href="https://github.com/"  target="_blank"  rel="noreferrer">Github</a></li>
            </ul>
        </div>
    </footer>
  );
}