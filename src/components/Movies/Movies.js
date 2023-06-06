import { Searchbar } from '../Searchbar/Searchbar';
import { MoviesList } from '../MoviesList/MoviesList';

import { moviesTest } from '../../constants/MovieTest';

export function Movies (props){
    return (
        <main className='main'>
            <Searchbar />
            <MoviesList 
              movies={moviesTest}
            />
        </main>
    )
}