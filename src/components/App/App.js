import './App.css';
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Header } from '../Header/Header.js';
import { Footer } from '../Footer/Footer.js';
import { Landing } from '../Landing/Landing';
import { Notfound } from '../NotFound/NotFound';
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { Profile } from '../Profile/Profile';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';


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
            <Landing />
            <Footer />
          </>}
        />
         <Route
          path="/movies"
          element={<>
            <Header />
            <Movies />
            <Footer />
          </>
          }
        />
         <Route
          path="/saved-movies"
          element={<>
            <Header />
            <SavedMovies />
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
