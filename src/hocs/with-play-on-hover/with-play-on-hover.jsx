import React from "react";
import Constants from "@constants";

const withPlayOnHover = (Component) => {
  class WithPlayerOnHover extends React.PureComponent {
    constructor(props) {
      super(props);
      this._videoTimeout = null;
      this._videoRef = React.createRef();
      this._handleMouseLeave = this._handleMouseLeave.bind(this);
      this._handleMouseEnter = this._handleMouseEnter.bind(this);
    }

    componentWillUnmount() {
      this._handleMouseLeave();
    }

    _handleMouseEnter() {
      this._videoTimeout = setTimeout(() => {
        const video = this._videoRef.current;
        if (video === null) {
          return;
        }
        video.play();
      }, Constants.MOVIE_PREVIEW_DELAY);
    }

    _handleMouseLeave() {
      const video = this._videoRef.current;
      if (video === null) {
        return;
      }
      clearTimeout(this._videoTimeout);
      video.load();
    }

    render() {
      return (
        <Component
          {...this.props}
          videoRef={this._videoRef}
          onEnter={this._handleMouseEnter}
          onLeave={this._handleMouseLeave}
        />
      );
    }
  }

  return WithPlayerOnHover;
};

export default withPlayOnHover;
