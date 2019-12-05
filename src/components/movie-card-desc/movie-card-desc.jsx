import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const MovieCardDesc = (props)=> <div className="movie-card__desc">
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
        <span className="movie-card__details-value">Wes Andreson</span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Starring</strong>
        <span className="movie-card__details-value">
    Bill Murray
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
</div>;

export const MovieCardDescSmall = (props) => <div className="movie-card__desc">
  <h2 className="movie-card__title">{props.movie.name}</h2>
  <p className="movie-card__meta">
    <span className="movie-card__genre">{props.movie.genre}</span>
    <span className="movie-card__year">{props.movie.released}</span>
  </p>

  <div className="movie-card__buttons">
    <button
      className="btn btn--play movie-card__button"
      type="button"
      onClick = {()=>{
      }}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
    <button
      className="btn btn--list movie-card__button"
      type="button"
      onClick = {()=>{
      }}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
    </button>
    {props.review ? <Link to={`/review`} href="add-review.html" className="btn movie-card__button">Add review</Link> : ``}
  </div>
</div>;

MovieCardDesc.propTypes = {review: PropTypes.bool,
  movie: PropTypes.shape({
    name: PropTypes.string,
    genre: PropTypes.string,
    released: PropTypes.number,
    posterImage: PropTypes.string,
    backgroundImage: PropTypes.string
  })};

MovieCardDescSmall.propTypes = MovieCardDesc.propTypes;

export default MovieCardDesc;
