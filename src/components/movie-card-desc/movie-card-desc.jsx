import React from "react";
import {string, shape, number, arrayOf, bool} from "prop-types";
import {Link} from "react-router-dom";

const formatTime = (minutes) => `${minutes} m`;

const MovieCardDesc = (props)=> {
  const {movie, match} = props;
  return <div className="movie-card__desc">
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {[`Overview`, `Details`, `Reviews`].map((nav) => <li key={`nav-list-item--${nav}`} className={`movie-nav__item ${match.params.nav === nav.toLowerCase() ? `movie-nav__item--active` : ``}`}>
          <Link to={`/films/${movie.id}/${nav.toLowerCase()}`} className="movie-nav__link">{nav}</Link>
        </li>
        )}
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
          <span className="movie-card__details-value">{formatTime(movie.runTime)}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{movie.genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{movie.released}</span>
        </p>
      </div>
    </div>
  </div>
  ;
};

MovieCardDesc.propTypes = {review: bool,
  movie: shape({
    name: string,
    genre: string,
    director: string,
    released: number,
    posterImage: string,
    backgroundImage: string,
    runTime: number,
    starring: arrayOf(string)
  }),
  match: shape({
    params: shape({
      nav: string
    })
  })
};

export default MovieCardDesc;
