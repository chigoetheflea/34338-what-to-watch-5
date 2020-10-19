import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import VideoPlayer from "../videoplayer/videoplayer.jsx";

const SmallMovieCard = (props) => {
  const {movieTitle, movieId, movieHoverHandler, movieCover, moviePath, isActive} = props;

  const mouseEnterHandler = movieHoverHandler.bind(null, movieId);
  const mouseOutHandler = movieHoverHandler.bind(null, null);

  const moviePreview = isActive ? <VideoPlayer
    src = {moviePath}
    poster = {movieCover}
    isAutoplay = {false}
    isLooped = {true}
    isMuted = {true}
  /> : <div className="small-movie-card__image">
    <img src={movieCover} alt={movieTitle} width="280" height="175" />
  </div>;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={mouseEnterHandler}
      onMouseOut={mouseOutHandler}
    >
      {moviePreview}
      <h3 className="small-movie-card__title">
        <Link
          to={`/films/${movieId}`}
          className="small-movie-card__link"
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
  moviePath: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  movieId: PropTypes.number.isRequired,
  movieHoverHandler: PropTypes.func.isRequired
};

export default SmallMovieCard;
