import React, {PureComponent} from "react";
import {shape, func, string, number} from 'prop-types';
import VideoPlayer from '../video-player/video-player';

export default class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };

    this.timerId = null;
    this.HOVER_DELAY = 1000;

    this._handleMovieClick = this._handleMovieClick.bind(this);
    this._handleMovieEnter = this._handleMovieEnter.bind(this);
    this._handleMovieLeave = this._handleMovieLeave.bind(this);
  }

  _handleMovieClick() {
    const {movie} = this.props;

    location.href = `/film-overview-${movie.id}`;
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
    const {movie} = this.props;
    const {previewImage, name, videoLink} = movie;
    return <article
      className="small-movie-card catalog__movies-card"
      onClick={() => this._handleMovieClick()}
      onMouseEnter={() => this._handleMovieEnter()}
      onMouseLeave={() => this._handleMovieLeave()}
    >
      <div className="small-movie-card__image">
        <VideoPlayer
          src={videoLink}
          poster={previewImage}
          muted={true}
          width={280}
          height={175}
          playerState={this.state}
        />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">
          {name}
        </a>
      </h3>
    </article>;
  }
}

MovieCard.propTypes = {movie: shape({
  id: number,
  name: string,
  previewImage: string
}).isRequired, onHeaderClick: func, onMouseEnter: func};


