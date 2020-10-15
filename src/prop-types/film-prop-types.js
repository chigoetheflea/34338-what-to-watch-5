import PropTypes from "prop-types";

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.shape({
    scores: PropTypes.number.isRequired,
    textValue: PropTypes.string.isRequired
  }),
  likes: PropTypes.number.isRequired,
  director: PropTypes.string.isRequired,
  actors: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ),
  duration: PropTypes.string.isRequired
});
