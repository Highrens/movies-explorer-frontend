import { Promo } from '../Promo/Promo.js';
import { About } from '../About/About';
import { AboutMe } from '../AboutMe/AboutMe';
import { Techs } from '../Techs/Techs';

export function Landing (props){
    return (
        <main className='main'>
            <Promo />
            <About />
            <Techs />
            <AboutMe />
        </main>
    )
}