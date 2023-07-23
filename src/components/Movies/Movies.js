import { Searchbar } from "../Searchbar/Searchbar";
import { MoviesList } from "../MoviesList/MoviesList";
import { Header } from "../Header/Header.js";
import { Footer } from "../Footer/Footer.js";



export function Movies(props) {


  function handleSearchSumbit(SearchText){
    props.handleSearchSumbit(SearchText);
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
        movies={props.movies} 
        savedMovies={props.savedMovies}
        showMoreButton={props.showMoreButton}
        MoreButtonClick={HandleMoreButtonClick}
        showPreloader={props.showPreloader}
        MoreToShow={props.MoreToShow}
        />
      <Footer />
    </main>
  );
}
