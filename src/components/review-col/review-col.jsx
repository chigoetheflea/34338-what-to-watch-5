import React from "react";
import Review from "../review/review.jsx";
import PropTypes from "prop-types";
import reviewPropTypes from "../../prop-types/review-prop-types.js";

const ReviewCol = (props) => {
  return (
    <div className="movie-card__reviews-col">
      {props.reviews.map((review, index) => {
        return (
          <Review review = {review} key = {index} />
        );
      })}
    </div>
  );
};

export default ReviewCol;

ReviewCol.propTypes = {
  reviews: PropTypes.arrayOf(reviewPropTypes)
};
