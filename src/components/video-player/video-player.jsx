import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = React.createRef();
    this.state = {isPlaying: props.playerState.isPlaying};
  }

  componentDidMount() {
    const {src, muted} = this.props;
    const video = this._videoRef.current;
    if (video === null) {
      return;
    }
    video.src = src;
    video.muted = muted;
  }

  componentDidUpdate() {
    const {playerState} = this.props;
    this.setState({isPlaying: playerState.isPlaying});
    const video = this._videoRef.current;
    if (video === null) {
      return;
    }
    if (playerState.isPlaying) {
      video.play();
    } else {
      video.pause();
      video.currentTime = 0;
      video.load();
    }
  }

  render() {
    const {src, poster, width, height} = this.props;

    return <video
      src={src}
      poster={poster}
      width={width}
      height={height}
      ref={this._videoRef}
    />;
  }
}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  muted: PropTypes.bool.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  playerState: PropTypes.exact({
    isPlaying: PropTypes.bool
  }).isRequired
};
