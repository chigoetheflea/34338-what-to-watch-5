import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const SmallMovieCard = (props) => {
  const {movieTitle, movieCover, movieId, movieHoverHandler} = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={movieHoverHandler.bind(null, movieId)}
      onMouseOut={movieHoverHandler.bind(null, null)}
    >
      <div className="small-movie-card__image">
        <img src={movieCover} alt={movieTitle} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <Link
          to = {`/films/${movieId}`}
          className = "small-movie-card__link"
        >
          {movieTitle}
        </Link>
      </h3>
    </article>
  );
};

SmallMovieCard.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieCover: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired,
  movieHoverHandler: PropTypes.func.isRequired
};

export default SmallMovieCard;
