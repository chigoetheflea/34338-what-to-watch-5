import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

const VIDEO_PLAY_TIMEOUT = 1000;

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isLoading: true,
      isPlaying: false
    };
  }

  _play() {
    this._playTimeOut = setTimeout(() => {
      if (!this.state.isLoading) {
        this.setState({
          isPlaying: true
        });
      }
    }, VIDEO_PLAY_TIMEOUT);
  }

  componentDidMount() {
    const {src, isAutoplay, isLooped, isMuted, poster} = this.props;

    const video = this._videoRef.current;

    video.src = src;
    video.poster = poster;
    video.muted = isMuted;
    video.autoplay = isAutoplay;
    video.loop = isLooped;

    video.oncanplaythrough = () => this.setState({
      isLoading: false
    });

    this._play();
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;

    clearTimeout(this._playTimeOut);
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.state.isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }

  render() {
    return (
      <div className="small-movie-card__video">
        <video
          ref = {this._videoRef}
        />
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  isAutoplay: PropTypes.bool.isRequired,
  isLooped: PropTypes.bool.isRequired,
  isMuted: PropTypes.bool.isRequired,
  poster: PropTypes.string.isRequired
};

export default VideoPlayer;
