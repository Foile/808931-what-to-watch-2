import React from "react";
import PropTypes from "prop-types";
import history from "@history";

const withPlayer = (Component) => {
  class WithPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this._video = React.createRef();
      this._handleClosePlayer = this._handleClosePlayer.bind(this);
      this._handlePlayPause = this._handlePlayPause.bind(this);
      this._handleFullScreen = this._handleFullScreen.bind(this);

      this.state = {
        isPlaying: false,
      };
    }

    _handlePlayPause() {
      const {isPlaying} = this.state;
      if (!isPlaying) {
        this._video.current.play();
      } else {
        this._video.current.pause();
      }
      this.setState({isPlaying: !isPlaying});
    }

    _handleFullScreen() {
      const video = this._video.current;

      if (!video.requestFullscreen) {
        if (video.mozRequestFullScreen) {
          video.mozRequestFullScreen();
        } else if (video.webkitRequestFullScreen) {
          video.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (video.msRequestFullscreen) {
          video.msRequestFullscreen();
        }
      } else {
        video.requestFullscreen();
      }
    }

    _handleClosePlayer() {
      const {location} = this.props;
      if (location.key) {
        history.goBack();
      } else {
        history.push(`/`);
      }
    }

    render() {
      const {isPlaying} = this.state;

      return (
        <Component
          {...this.props}
          videoRef={this._video}
          isPlaying={isPlaying}
          onPlayPause={this._handlePlayPause}
          onFullScreen={this._handleFullScreen}
          onClosePlayer={this._handleClosePlayer}
        />
      );
    }
  }

  WithPlayer.defaultProps = {
    location: {},
  };

  WithPlayer.propTypes = {
    location: PropTypes.shape({
      key: PropTypes.string,
    }),
  };

  return WithPlayer;
};

export default withPlayer;
