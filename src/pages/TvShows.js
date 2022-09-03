import "../styles/Home.css";
import { Header, UpperNav, SearchArea, TvshowsCards } from "../components/index";
import BackgroundImage from "../images/home-heading-background.webp";

import { useEffect, useState } from "react";
import {
  FetchDiscoverTvshowPageOne,
  FetchDiscoverTvshowPageTwo,
  FetchDiscoverTvshowPageThree,
  FetchDiscoverTvshowPageFour,
  FetchDiscoverTvshowPageFive,
  FetchApiForTvshowSearch
} from "../assets/FetchApiForTvshowPage";

function TvShows({ theme }) {
  const [tvshowPageOne, setTvshowPageOne] = useState([]);
  const [tvshowPageTwo, setTvshowPageTwo] = useState([]);
  const [tvshowPageThree, setTvshowPageThree] = useState([]);
  const [tvshowPageFour, setTvshowPageFour] = useState([]);
  const [tvshowPageFive, setTvshowPageFive] = useState([]);
  const [searchResults, setSearchResults] = useState([])
  const [query, setQuery] = useState()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      setTvshowPageOne(await FetchDiscoverTvshowPageOne());
      setTvshowPageTwo(await FetchDiscoverTvshowPageTwo());
      setTvshowPageThree(await FetchDiscoverTvshowPageThree());
      setTvshowPageFour(await FetchDiscoverTvshowPageFour());
      setTvshowPageFive(await FetchDiscoverTvshowPageFive());
      setLoading(false);
    };

    fetchApi();
  }, []);
  useEffect(() => {
    const fetchApiSearch = async () => {
     setSearchResults(await FetchApiForTvshowSearch(query))
    }
    if (query){
       fetchApiSearch()
      }
    console.log(query)
  }, [query])

  const renderMovieCards = (data) => {
    return (
      <TvshowsCards loading={loading} theme={theme} trendingData={data}/>
    )
  }

  const renderSearchResults = (data,heading) => {
    return (
      <TvshowsCards heading={heading} loading={loading} theme={theme} trendingData={data}/>
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
        title="Site Back And Watch"
        content="Collection of tv shows all seasons and series available"
      />
      {searchResults.length !== 0 ? renderSearchResults(searchResults,'Search Results'):  renderMovieCards(tvshowPageOne)}
      {tvshowPageTwo ? renderMovieCards(tvshowPageTwo) : null}
      {tvshowPageThree ? renderMovieCards(tvshowPageThree) : null}
      {tvshowPageFour ? renderMovieCards(tvshowPageFour) : null}
      {tvshowPageFive ? renderMovieCards(tvshowPageFive) : null}
    </div>
  );
}

export default TvShows;
