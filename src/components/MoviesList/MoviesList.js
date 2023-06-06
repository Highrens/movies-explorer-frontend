import './MoviesList.css';
import { Movie } from '../Movie/Movie';
import { Morebutton } from '../MoreButton/MoreButton';

import Preloader from  '../Preloader/Preloader'

export function MoviesList (props) {

    return (<>

    <section aria-label='movies-container' className="movies-container">
       <ul className='movies'>
       {props.movies.map((data, i) => (
            <Movie
            key={i}
            name={data.name}
            duration={data.duration}
            photo={data.photo}
            saved={data.saved}
            />
          ))}
       </ul>
        {/* <Preloader /> */}
    </section>
      <Morebutton />
    </>
    );
  }
  