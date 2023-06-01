import './Movies.css';
import { Movie } from '../Movie/Movie';
import { Morebutton } from '../MoreButton/MoreButton';

import Preloader from  '../Preloader/Preloader'

export function Movies (props) {

    return (<>

    <div className="movies-container">
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
    </div>
      <Morebutton />
    </>
    );
  }
  