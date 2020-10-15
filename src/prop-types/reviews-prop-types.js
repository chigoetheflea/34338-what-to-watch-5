import PropTypes from "prop-types";

export default PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      filmId: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      review: PropTypes.string.isRequired
    })
);
