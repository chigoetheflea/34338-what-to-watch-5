import React from "react";
import PropTypes from "prop-types";
import MainScreen from "../main-screen/main-screen.jsx";

const App = (props) => {
  const {movieTitle, movieGenre, movieReleaseDate} = props;

  return (
    <MainScreen
      movieTitle = {movieTitle}
      movieGenre = {movieGenre}
      movieReleaseDate = {movieReleaseDate}
    />
  );
};

App.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieReleaseDate: PropTypes.number.isRequired
};

export default App;
