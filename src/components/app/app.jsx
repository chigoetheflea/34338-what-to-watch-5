import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import MainScreen from "../main-screen/main-screen.jsx";
import AddReview from "../add-review/add-review.jsx";
import Film from "../film/film.jsx";
import MyList from "../my-list/my-list.jsx";
import Player from "../player/player.jsx";
import SignIn from "../sign-in/sign-in.jsx";

import filmsPropTypes from "../../prop-types/films-prop-types.js";
import reviewsPropTypes from "../../prop-types/reviews-prop-types.js";

const App = (props) => {
  const {promoMovie, films, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen
            promoMovie = {promoMovie}
            films = {films}
          />
        </Route>

        <Route exact path="/login">
          <SignIn />
        </Route>

        <Route exact path="/mylist">
          <MyList
            films = {films}
          />
        </Route>

        <Route exact path="/films/:id">
          <Film
            films = {films}
            reviews = {reviews}
          />
        </Route>

        <Route exact path="/films/:id/review">
          <AddReview
            film = {films[0]}
          />
        </Route>

        <Route exact path="/player/:id">
          <Player
            film = {films[0]}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  promoMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired
  }),
  films: filmsPropTypes,
  reviews: reviewsPropTypes
};

export default App;
