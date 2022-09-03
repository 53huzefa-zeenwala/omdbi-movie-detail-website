import React from "react";
import "../styles/Cards.css";
import TvshowsCard from "./TvshowsCard";

const TvshowsCards = ({ theme, trendingData, heading ,loading}) => {
  return (
    <>
      <div data-theme={theme} className="Collection">
        {heading}
      </div>
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
            <TvshowsCard key={movie.id} theme={theme} data={trendingData[i]} />
          ))}
        </div>
      )}
    </>
  );
};

export default TvshowsCards;
