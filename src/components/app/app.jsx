import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import MainScreen from "../main-screen/main-screen.jsx";
import AddReview from "../add-review/add-review.jsx";
import Film from "../film/film.jsx";
import MyList from "../my-list/my-list.jsx";
import Player from "../player/player.jsx";
import SignIn from "../sign-in/sign-in.jsx";

const App = (props) => {
  const {movieTitle, movieGenre, movieReleaseDate} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen
            movieTitle = {movieTitle}
            movieGenre = {movieGenre}
            movieReleaseDate = {movieReleaseDate}
          />
        </Route>

        <Route exact path="/login">
          <SignIn />
        </Route>

        <Route exact path="/mylist">
          <MyList />
        </Route>

        <Route exact path="/films/:id">
          <Film />
        </Route>

        <Route exact path="/films/:id/review">
          <AddReview />
        </Route>

        <Route exact path="/player/:id">
          <Player />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  movieReleaseDate: PropTypes.number.isRequired
};

export default App;
