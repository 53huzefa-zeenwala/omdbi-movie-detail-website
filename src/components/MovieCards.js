import React from "react";
import "../styles/Cards.css";
import MovieCard from "./MovieCard";

const MovieCards = ({ loading, theme, trendingData, heading }) => {
  return (
    <>
      {heading && <div data-theme={theme} className="Collection">
        {heading}
      </div>}
      {loading ? (
        <div className="cards">
          <div className="animated-bg">&nbsp;</div>
          <div className="animated-bg">&nbsp;</div>
          <div className="animated-bg">&nbsp;</div>
          <div className="animated-bg">&nbsp;</div>
        </div>
      ) : (
        <div className="cards">
          {trendingData.map((movie, i) => (
            <MovieCard key={movie.id} theme={theme} data={trendingData[i]} />
          ))}
        </div>
      )}
    </>
  );
};

export default MovieCards;
