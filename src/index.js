
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

import films from "./mocks/films.js";
import reviews from "./mocks/reviews.js";

const promoMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  date: 2014
};

ReactDOM.render(
    <App
      promoMovie = {promoMovie}
      films = {films}
      reviews = {reviews}
    />,
    document.querySelector(`#root`)
);
