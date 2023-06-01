import './Techs.css';

export function Techs (props) {
  return (
      <div className="techs">
        <div className="techs__content">
          <h2 className='techs__header'>Технологии</h2>
          <h1 className='techs__amount'>7 технологий</h1>
          <p className='techs__discription'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className='techs__stack'>
            <li className='techs__one-tech'>HTML</li>
            <li className='techs__one-tech'>CSS</li>
            <li className='techs__one-tech'>JS</li>
            <li className='techs__one-tech'>React</li>
            <li className='techs__one-tech'>Git</li>
            <li className='techs__one-tech'>Express.js</li>
            <li className='techs__one-tech'>mongoDB</li>
          </ul>
        </div>
    </div>
  );
}