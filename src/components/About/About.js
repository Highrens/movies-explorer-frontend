import './About.css';

export function About(props) {
  return (
    <div className="about">
        <h2 className='about__header'>О проекте</h2>
        <div className='about__two-columns'>
            <div className='about__column'>
                <h3 className='about__column-header'>Дипломный проект включал 5 этапов</h3>
                <p className='about__column-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </div>
            <div className='about__column'>
                <h3 className='about__column-header'>На выполнение диплома ушло 5 недель</h3>
                <p className='about__column-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
        </div>
        <div className='about__weeks'>
            <div className='about__weeks-column'>
                <div className='about__weeks-one'>1 неделя</div>
                <p className='about__weeks-stage'>Back-end</p>
            </div>
            <div className='about__weeks-column'>
                <div className='about__weeks-four'>4 недели</div>
                <p className='about__weeks-stage'>Front-end</p>
            </div>
            
        </div>
    </div>
  );
}

