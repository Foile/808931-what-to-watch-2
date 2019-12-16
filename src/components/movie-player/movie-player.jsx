import React from "react";
import {compose} from "recompose";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import VideoPlayer from "@components/video-player/video-player";
import VideoPlayerProgress from "@components/video-player/video-player-progress/video-player-progress";
import withPlayer from "@hocs/with-player/with-player";
import {MoviePlayerConstants} from "@constants";

const MoviePlayer = ({movie, videoRef, onPlayPause, onClosePlayer, onFullScreen, isPlaying}) => {
  const {name, videoLink, previewImage} = movie;
  return (
    <div className="player">
      <VideoPlayer
        videoRef={videoRef}
        classes="player__video"
        link={videoLink}
        poster={previewImage}
        width={MoviePlayerConstants.WIDTH}
        height={MoviePlayerConstants.HEIGHT}
      />

      <button
        type="button"
        className="player__exit"s
        onClick={onClosePlayer}
      >
        Exit</button>

      <div className="player__controls">
        <VideoPlayerProgress
          videoRef={videoRef}
        />

        <div className="player__controls-row">
          <button
            className="btn player__play"
            type="button"
            onClick = {onPlayPause}
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isPlaying ? `#pause` : `#play-s`}></use>
            </svg>
          </button>
          <div className="player__name">{name}</div>
          <button
            className="btn player__full-screen"
            type="button"
            onClick = {onFullScreen}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

MoviePlayer.defaultProps = {
  movie: {
    name: ``,
    videoLink: ``,
    previewImage: ``,
    runTime: 0,
  },
  videoRef: {},
  onPlayPause: () => {},
  onClosePlayer: () => {},
  onFullScreen: () => {},
  isPlaying: false,
};

MoviePlayer.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    videoLink: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    runTime: PropTypes.number.isRequired,
  }).isRequired,
  videoRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element)
  }).isRequired,
  onPlayPause: PropTypes.func.isRequired,
  onClosePlayer: PropTypes.func.isRequired,
  onFullScreen: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  movie: state.data.allFilms && state.data.allFilms.find(({id}) => id === Number(ownProps.match.params.id))
});

export {MoviePlayer};

export default compose(
    connect(mapStateToProps),
    withPlayer
)(MoviePlayer);
