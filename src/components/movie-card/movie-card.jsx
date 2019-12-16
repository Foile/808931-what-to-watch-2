import React, {PureComponent} from "react";
import {shape, func, string, number, instanceOf} from "prop-types";
import {Link} from "react-router-dom";
import VideoPlayer from "@components/video-player/video-player";
import withPlayOnHover from "@hocs/with-play-on-hover/with-play-on-hover";
import {MovieCardConstants} from "@constants";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movie, onEnter, onLeave, videoRef} = this.props;
    const {previewImage, name, previewVideoLink, id} = movie;
    return (<article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}>
      <Link to ={`/films/${id}`} className="small-movie-card__link">
        <div className="small-movie-card__image">
          <VideoPlayer
            videoRef={videoRef}
            link={previewVideoLink}
            poster={previewImage}
            muted
            width={MovieCardConstants.WIGTH}
            height={MovieCardConstants.HEIGHT}
          />
        </div>
        <h3 className="small-movie-card__title">
          {name}
        </h3>
      </Link>
    </article>);
  }
}

MovieCard.propTypes = {movie: shape({
  id: number,
  name: string,
  previewImage: string
}).isRequired,
onEnter: func,
onLeave: func,
videoRef: shape({
  current: instanceOf(Element)
}).isRequired};

MovieCard.defaultProps = {
  movie: {},
  videoRef: {},
  onEnter: () => {},
  onLeave: () => {},
};

export {MovieCard};
export default withPlayOnHover(MovieCard);


