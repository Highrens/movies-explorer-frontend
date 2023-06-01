import './App.css';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Header } from '../Header/Header.js';
import { Promo } from '../Promo/Promo.js';
import { About } from '../About/About';
import { AboutMe } from '../AboutMe/AboutMe';
import { Techs } from '../Techs/Techs';
import { Footer } from '../Footer/Footer.js';
import { Notfound } from '../NotFound/NotFound';
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { Profile } from '../Profile/Profile';
import { Searchbar } from '../Searchbar/Searchbar';
import { Movies } from '../Movies/Movies';


import { moviesTest } from '../../constants/MovieTest';

function App() {


  function EditProfile(){}
  function Logout(){}
  return (
    <div className="App">
     
      <Routes>
        <Route
          path="/"
          element={<>
            <Header />
            <Promo />
            <About />
            <Techs />
            <AboutMe />
            <Footer />
          </>}
        />
         <Route
          path="/movies"
          element={<>
            <Header />
            <Searchbar />
            <Movies 
              movies={moviesTest}
            />
            <Footer />
          </>
          }
        />
         <Route
          path="/saved-movies"
          movies={moviesTest}
          element={<>
            <Header />
            <Searchbar />
            <Movies 
              movies={moviesTest.filter(movie => movie.saved === true)}
            />
            <Footer />
          </>
          }
        />
        <Route
          path="/profile"
          element={<>
           <Header />
           <Profile
           handleProfileEdit={EditProfile}
           handleLogout={Logout}
            name='Сергей'/>
          </>
          }
        />
        <Route
          path="/sign-up"
          element={<>
           <Register />
          </>
          }
        />
        <Route
          path="/sign-in"
          element={<>
           <Login />
          </>
          }
        />
         <Route
          path="/404"
          element={<Notfound />}
        />
        <Route path="*" element={<Navigate to="/404" replace/>} />
      </Routes>     
    </div>
  );
}

export default App;
