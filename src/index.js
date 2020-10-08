
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const promoMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: 2014

};

ReactDOM.render(
    <App
      movieTitle = {promoMovie.title}
      movieGenre = {promoMovie.genre}
      movieReleaseDate = {promoMovie.date}
    />,
    document.querySelector(`#root`)
);
