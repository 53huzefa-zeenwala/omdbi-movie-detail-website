import "../styles/Home.css";
import { Header, UpperNav, MovieCards ,TvshowsCards } from "../components/index";
import BackgroundImage from "../images/home-heading-background.webp";
import { useEffect, useState } from "react";
import { FetchTrandingMoviesOfDay,FetchTrandingMoviesOfWeek,FetchTrandingTvshowsOfDay,FetchTrandingTvshowsOfWeek } from "../assets/FetchApiForHome";


function Home({ theme }) {
  const [movieDay, setMovieDay] = useState([])
  const [movieWeek, setMovieWeek] = useState([])
  const [tvshowsDay, setTvshowsDay] = useState([])
  const [tvshowsWeek, setTvshowsWeek] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      const fetchApi = async () => {
         setMovieDay(await FetchTrandingMoviesOfDay())
         setMovieWeek(await FetchTrandingMoviesOfWeek())
         setTvshowsDay(await FetchTrandingTvshowsOfDay())
         setTvshowsWeek(await FetchTrandingTvshowsOfWeek())
         setLoading(false)
      }

      fetchApi()
  },[])

  const renderMovieCards = (data,heading) => {
    return (
      <MovieCards loading={loading} heading={heading} theme={theme} trendingData={data}/>
    )
  }
  const renderTvshowsCards = (data,heading) => {
    return (
      <TvshowsCards loading={loading} heading={heading} theme={theme} trendingData={data}/>
    )
  }

  return (
    <div className="main-container" data-theme={theme}>
      <UpperNav />

      <Header
        backgroundImage={BackgroundImage}
        title="Welcome."
        content="Millions of movies, TV shows and people to discover. Explore now."
      />
      {movieDay ? renderMovieCards(movieDay,'Trending Movie Of Day') : null}
      {movieWeek ? renderMovieCards(movieWeek,'Trending Movie Of Week') : null}
      {tvshowsDay ? renderTvshowsCards(tvshowsDay,'Trending Tvshows Of Day') : null}
      {tvshowsWeek ? renderTvshowsCards(tvshowsWeek,'Trending Tvshows Of Week') : null}

    </div>
  );
}

export default Home;
