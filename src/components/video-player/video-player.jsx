import React from "react";
import {string, shape, instanceOf, bool} from "prop-types";

const VideoPlayer = ({classes, poster, link, width, height, controls, muted, videoRef}) => {

  return (
    <video
      className={classes}
      ref={videoRef}
      poster={poster}
      controls={controls}
      width={width}
      height={height}
      muted={muted}
    >
      <source src={link} type="video/mp4"/>
    </video>
  );
};

VideoPlayer.defaultProps = {
  classes: ``,
  poster: ``,
  link: ``,
  width: ``,
  height: ``,
  controls: false,
  muted: false,
  videoRef: null,
};

VideoPlayer.propTypes = {
  classes: string,
  poster: string.isRequired,
  link: string.isRequired,
  width: string,
  height: string,
  controls: bool,
  muted: bool,
  videoRef: shape({
    current: instanceOf(Element)
  }).isRequired,
};

export {VideoPlayer};
export default VideoPlayer;
