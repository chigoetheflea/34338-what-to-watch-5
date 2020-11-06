import React from "react";
import reviewsPropTypes from "../../prop-types/reviews-prop-types.js";
import ReviewCol from "../review-col/review-col.jsx";

const COLS_COUNT = 2;

const splitReviewsByCols = (reviews) => {
  const reviewsPerCol = Math.ceil(reviews.length / COLS_COUNT);
  const splittedReviews = [];
  const clonedReviews = reviews.slice();

  do {
    splittedReviews.push(clonedReviews.splice(0, reviewsPerCol));
  } while (clonedReviews.length > 0);

  return splittedReviews;
};

const TabReviews = (props) => {
  const splittedReviews = splitReviewsByCols(props.reviews);

  return (
    <div className="movie-card__reviews movie-card__row">
      {splittedReviews.map((reviewsPart, index) => {
        return (
          <ReviewCol reviews = {reviewsPart} key = {index} />
        );
      })}
    </div>
  );
};

export default TabReviews;

TabReviews.propTypes = {
  reviews: reviewsPropTypes
};
