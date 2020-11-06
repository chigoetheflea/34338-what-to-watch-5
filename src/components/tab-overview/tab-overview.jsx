import React from "react";
import filmPropTypes from "../../prop-types/film-prop-types.js";

const TabOverview = (props) => {
  const {rating, likes, description, director, actors} = props.film;

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating.scores}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{rating.textValue}</span>
          <span className="movie-rating__count">{likes} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        {description}

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {actors.join(`, `)} and other</strong></p>
      </div>
    </>
  );
};

export default TabOverview;

TabOverview.propTypes = {
  film: filmPropTypes
};
