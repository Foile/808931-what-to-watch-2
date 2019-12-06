import React from "react";
import PropTypes from "prop-types";

const MovieCardDesc = (props)=> {
  const {movie} = props;
  return <div className="movie-card__desc">
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        <li className="movie-nav__item">
          <a href="#" className="movie-nav__link">Overview</a>
        </li>
        <li className="movie-nav__item movie-nav__item--active">
          <a href="#" className="movie-nav__link">Details</a>
        </li>
        <li className="movie-nav__item">
          <a href="#" className="movie-nav__link">Reviews</a>
        </li>
      </ul>
    </nav>

    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{movie.director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {movie.starring.map((actor)=>`${actor}\n`)}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">1h 39m</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{props.movie.genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{props.movie.year}</span>
        </p>
      </div>
    </div>
  </div>
  ;
};


MovieCardDesc.propTypes = {review: PropTypes.bool,
  movie: PropTypes.shape({
    name: PropTypes.string,
    genre: PropTypes.string,
    released: PropTypes.number,
    posterImage: PropTypes.string,
    backgroundImage: PropTypes.string
  })};

export default MovieCardDesc;
