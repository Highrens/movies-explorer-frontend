import { Searchbar } from '../Searchbar/Searchbar';
import { MoviesList } from '../MoviesList/MoviesList';

import { moviesTest } from '../../constants/MovieTest';

export function SavedMovies (props){
    return (
        <main className='main'>
            <Searchbar />
            <MoviesList 
              movies={moviesTest.filter(movie => movie.saved === true)}
            />
        </main>
    )
}