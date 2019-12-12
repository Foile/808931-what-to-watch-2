import React, {PureComponent} from "react";
import {shape, func, string, number} from "prop-types";
import VideoPlayer from "../video-player/video-player";
import {Link} from "react-router-dom";

export default class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };

    this.timerId = null;
    this.HOVER_DELAY = 1000;

    this._handleMovieEnter = this._handleMovieEnter.bind(this);
    this._handleMovieLeave = this._handleMovieLeave.bind(this);
  }

  _handleMovieEnter() {
    this.timerId = setTimeout(() => {
      this.setState({isPlaying: true});
    }, this.HOVER_DELAY);
  }

  _handleMovieLeave() {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.setState({isPlaying: false});
    }
  }

  render() {
    const {movie, onMouseEnter, onMouseLeave} = this.props;
    const {previewImage, name, previewVideoLink, id} = movie;
    return <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        onMouseEnter(); this._handleMovieEnter();
      }}
      onMouseLeave={() => {
        onMouseLeave();
        this._handleMovieLeave();
      }}>
        <Link to ={`/films/${id}`} className="small-movie-card__link">
        <div className="small-movie-card__image">
          <VideoPlayer
            src={previewVideoLink}
            poster={previewImage}
            muted={true}
            width={280}
            height={175}
            playerState={this.state}
          />
        </div>
        <h3 className="small-movie-card__title">
          {name}
        </h3>
      </Link>
    </article>;
  }
}

MovieCard.propTypes = {movie: shape({
  id: number,
  name: string,
  previewImage: string
}).isRequired,
onMouseEnter: func,
onMouseLeave: func};


