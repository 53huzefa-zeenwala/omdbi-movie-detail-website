import React, { useEffect, useState } from "react";
import ReactStars from "react-stars";
import Youtube from "react-youtube";
import "../styles/MoreDetails.css";
import { FetchApiMoviePage } from "../assets/FetchApiForDynamicPage";
import millify from "millify";
import { useParams } from "react-router-dom";

const MovieDetails = ({ theme }) => {
  const [movieDetail, setMovieDetail] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const fetchApi = async () => {
      setMovieDetail(await FetchApiMoviePage(id));
    };

    fetchApi();
  }, [id]);

  const renderMillify = (budget, string) => {
    return (
      <div className="budget">
        <h3>{string}</h3>
        <span>
          {millify(budget, {
            precision: 3,
            lowercase: true,
          })}
        </span>
      </div>
    );
  };

  const renderImage = (path) => {
    const imagePath = `https://image.tmdb.org/t/p/w500${path}`;
    return imagePath;
  };

  const renderGenre = () => {
    return movieDetail.genres.map((genre) => (
      <span key={genre.id} className="genre">
        {genre.name}
      </span>
    ));
  }

  const renderYoutubeVideo = () => {
    const videoArry = movieDetail.videos.results.filter(function (el) {
      return (el.site = "YouTube");
    });
    return videoArry.map((vid) => (<Youtube videoId={vid.key} key={vid.id}/>));
  };
  return (
    <div className="moreDetail" data-theme={theme}>
      <div className="backdrop-image">
        <img
          src={
            movieDetail.backdrop_path
              ? renderImage(movieDetail.backdrop_path)
              : require("../images/thebatman-backdrop.jpg")
          }
        />
      </div>
      <div className="poster-image">
        <img
          src={
            movieDetail.poster_path
              ? renderImage(movieDetail.poster_path)
              : require("../images/thebatman-poster.jpg")
          }
        />
      </div>
      <div className="details">
        <div className="title-tagline">
          <h2 className="title">{movieDetail.original_title}</h2>
          <h3 className="tagline">{movieDetail.tagline}</h3>
        </div>
        <div className="rating">
          <ReactStars
            count={5}
            value={movieDetail.vote_average / 2}
            size={24}
          />
          <span>({movieDetail.vote_count}) Votes</span>
        </div>
        <div className="more-details">
          <div className="release-date">
            <h3>Release date</h3>
            <span>{movieDetail.release_date}</span>
          </div>
          <div className="run-time">
            <h3>Runtime</h3>
            <span>{movieDetail.runtime} min</span>
          </div>
          {movieDetail.budget
            ? renderMillify(movieDetail.budget, "Budget")
            : null}
          {movieDetail.revenue
            ? renderMillify(movieDetail.revenue, "Revenue")
            : null}
        </div>
        <div className="genres">{movieDetail.genres && renderGenre()}</div>

        <div className="overview">
          <h2 className="tag">Overview</h2>
          <p>{movieDetail.overview}</p>
        </div>
      </div>
      <div className="videos">
        <h2>Trailer and teasers</h2>
        <div className="video-trailer">
          {movieDetail.videos && renderYoutubeVideo()}
          
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
