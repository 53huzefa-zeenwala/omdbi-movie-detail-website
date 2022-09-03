import React from "react";
import NotFoundImage from "../images/NotFound.png";
import { Link } from "react-router-dom";
import "../styles/MovieCard.css";
import ReactStars from "react-stars";

const MovieCard = ({ theme, data }) => {
  const background = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${data.poster_path})`,
  };
  const notFound = {
    backgroundImage:`url(${NotFoundImage})`
  }
  return (
    <div data-theme={theme} className="movie-card" style={data.poster_path ? background : notFound}>
      <div className="overlay">
        <div className="content">
          <p id="name">
            {data.original_title
              ? data.original_title
              : 'not found'}
          </p>
          <p className="text release-date">
            {data.release_date
              ? data.release_date
              : 'not found'}
          </p>
          <div className="rating">
            {data.vote_average != '0' && <ReactStars
              count={5}
              value={data.vote_average / 2}
              size={24}
            />}
            {data.vote_count != '0' && <span className="imdb-rating"> ({data.vote_count})</span>}
          </div>
          {data.id && <button>
            <Link style={{textDecoration:'none',color:'inherit'}} to={`/moviedetails/${data.id}`}>More Detail</Link>
          </button>}
        </div>
      </div>
    </div>

  );
};

export default MovieCard;
