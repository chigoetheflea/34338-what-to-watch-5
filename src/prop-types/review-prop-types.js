import PropTypes from "prop-types";

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  filmId: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  review: PropTypes.string.isRequired
});
