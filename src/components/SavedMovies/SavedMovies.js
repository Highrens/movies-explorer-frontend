import { Searchbar } from '../Searchbar/Searchbar';
import { MoviesList } from '../MoviesList/MoviesList';
import { Header } from '../Header/Header.js';
import { Footer } from '../Footer/Footer.js';
import { useEffect } from 'react';

export function SavedMovies (props){

  useEffect(()=>{
    props.showAllSavedMovies();
  }, [])

    function handleSearchSumbit(SearchText, searchType){
        props.handleSearchSumbit(SearchText, searchType);
      }
    
      function HandleMoreButtonClick(){
        props.HandleMoreButtonClick();
      }
    
      return (
        <main className="main">
        <Header />
        <Searchbar
          onSearchSubmit={handleSearchSumbit}
          checkboxChange={props.checkboxChange}
        />
        <MoviesList 
          tip={props.tip}
  
          onMovieButtonCkick={props.onMovieButtonCkick}

          saved={true}  

          movies={props.movies} 
          savedMovies={props.savedMovies}
          showMoreButton={props.showMoreButton}
          MoreButtonClick={HandleMoreButtonClick}
          showPreloader={props.showPreloader}
          MoreToShow={props.MoreToShow}
          />
        <Footer />
      </main>
    )
}