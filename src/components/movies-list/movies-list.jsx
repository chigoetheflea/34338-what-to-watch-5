import React, {PureComponent} from "react";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

import filmsPropTypes from "../../prop-types/films-prop-types.js";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeMovie: null
    };

    this.movieHoverHandler = this.movieHoverHandler.bind(this);
  }

  movieHoverHandler(movieId) {
    this.setState({
      activeMovie: movieId
    });
  }

  render() {
    const {films} = this.props;

    return films.map((movie) => <SmallMovieCard
      movieTitle = {movie.title}
      movieCover = {movie.cover}
      movieId = {movie.id}
      movieHoverHandler = {this.movieHoverHandler}
      key = {`film-${movie.id}`}
    />);
  }
}

MoviesList.propTypes = {
  films: filmsPropTypes
};

export default MoviesList;
