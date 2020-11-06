import React from "react";
import reviewPropTypes from "../../prop-types/review-prop-types.js";
import {getFormatedDate} from "../../utils/utils.js";

const Review = (props) => {
  const {review, author, date, rating} = props.review;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review}</p>

        <footer className="review__details">
          <cite className="review__author">{author}</cite>
          <time className="review__date" dateTime = {getFormatedDate(date, `in-attr`)}>{getFormatedDate(date, `in-front`)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

export default Review;

Review.propTypes = {
  review: reviewPropTypes
};
