import "../styles/Home.css";
import { Header, UpperNav, SearchArea, MovieCards } from "../components/index";
import BackgroundImage from "../images/dune-poster.webp";
import { useEffect, useState } from "react";
import { FetchDiscoverMoviesPageOne ,FetchDiscoverMoviesPageTwo ,FetchDiscoverMoviesPageThree ,FetchDiscoverMoviesPageFour,FetchDiscoverMoviesPageFive, FetchApiForMovieSearch} from "../assets/FetchApiForMoviePage";

function Movies({ theme }) {
  const [moviePageOne, setMoviePageOne] = useState([])
  const [moviePageTwo, setMoviePageTwo] = useState([])
  const [moviePageThree, setMoviePageThree] = useState([])
  const [moviePageFour, setMoviePageFour] = useState([])
  const [moviePageFive, setMoviePageFive] = useState([])
  const [query, setQuery] = useState()
  const [loading, setLoading] = useState(true)
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const fetchApi = async() => {
      setMoviePageOne(await FetchDiscoverMoviesPageOne())
      setMoviePageTwo(await FetchDiscoverMoviesPageTwo())
      setMoviePageThree(await FetchDiscoverMoviesPageThree())
      setMoviePageFour(await FetchDiscoverMoviesPageFour())
      setMoviePageFive(await FetchDiscoverMoviesPageFive())
      setLoading(false)
    }

    fetchApi()
  }, [])

  useEffect(() => {
    const fetchApiSearch = async () => {
     setSearchResults(await FetchApiForMovieSearch(query))
    }
    if (query){
       fetchApiSearch()
      }
    console.log(query)
  }, [query])
  console.log(searchResults)
  
    
  
  const renderMovieCards = (data) => {
    return (
      <MovieCards loading={loading} theme={theme} trendingData={data}/>
    )
  }

  const renderSearchResults = (data,heading) => {
    return (
      <MovieCards heading={heading} loading={loading} theme={theme} trendingData={data}/>
    )
  }

  return (
    <div className="main-container" data-theme={theme}>
      <UpperNav />
      <div className="search-area-div">
        <SearchArea searchText={(text) => setQuery(text)}/>
      </div>
      <Header
        backgroundImage={BackgroundImage}
        title="lets Watch Together."
        content="Find your favorite movie to watch today. Tons of movie with trailer and teasers"
      />
      {searchResults.length !== 0 ? renderSearchResults(searchResults,'Search Results'):  renderMovieCards(moviePageOne)}
      {moviePageTwo ? renderMovieCards(moviePageTwo) : null}
      {moviePageThree ? renderMovieCards(moviePageThree) : null}
      {moviePageFour ? renderMovieCards(moviePageFour) : null}
      {moviePageFive ? renderMovieCards(moviePageFive) : null}
    </div>
  );
}

export default Movies;
