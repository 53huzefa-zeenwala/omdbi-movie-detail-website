import { Routes, Route, BrowserRouter } from "react-router-dom";
import { BottomNavbar , DarkLightButton } from "./components";

import Home from "./pages/Home";
import MovieDetails from './pages/MovieDetails'
import TvshowDetails from './pages/TvshowDetails'
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import About from "./pages/About";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  
  return (
    <div>
      <div className="darklightbutton-div">
        <DarkLightButton changeTheme={changeTheme} theme={theme} />
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BottomNavbar />}>
            <Route index element={<Home theme={theme}/>} />
            <Route path="movies" element={<Movies theme={theme}/>} />
            <Route path="tvshows" element={<TvShows theme={theme}/>} />
            <Route path="about" element={<About theme={theme}/>} />
            <Route path="moviedetails/:id" element={<MovieDetails theme={theme}/>} />
            <Route path="tvshowdetails/:id" element={<TvshowDetails theme={theme}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
