import React from "react";
import {string, shape, number, arrayOf, bool} from "prop-types";
import {Link} from "react-router-dom";

const formatTime = (minutes) => `${Math.floor(minutes / 60) > 0 ? `${Math.floor(minutes / 60)} h ` : ``}${minutes % 60} m`;
const ratingDesc = (rating) => {
  if (rating === 10) {
    return `Awesome`;
  }
  if (rating > 8) {
    return `Very good`;
  }
  if (rating > 5) {
    return `Good`;
  }
  if (rating > 3) {
    return `Normal`;
  }
  return `Bad`;
};
const formatDate = (date) => date.format(`yyyy-mm-dd`);

const tabSwitch = (nav = `overview`, movie) => {
  switch (nav) {
    case `details`:
      return <div className="movie-card__text movie-card__row">
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
      </div>;
    case `reviews`: return <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {movie.comments ? movie.comments.map((comment) =>
          <div className="review" key={`movie-${movie.id}-comment-${comment.id}`}>
            <blockquote className="review__quote">
              <p className="review__text">{comment.text}</p>
              <footer className="review__details">
                <cite className="review__author">comment.author</cite>
                <time className="review__date" dateTime={`${comment.date}`}>{formatDate(comment.date)}</time>
              </footer>
            </blockquote>
            <div className="review__rating">comment.rating</div>
          </div>
        ) : <React.Fragment/>}
      </div>
    </div>;
    default: return <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{movie.rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingDesc(movie.rating)}</span>
          <span className="movie-rating__count">{movie.scoresCount} ratings</span>
        </p>
      </div>
      <div className="movie-card__text">
        {movie.description}
        <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {movie.starring.join(`, `)} and other</strong></p>
      </div>
    </React.Fragment>;
  }
};

const MovieCardDesc = (props)=> {
  const {movie, match} = props;
  return <div className="movie-card__desc">
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {[`Overview`, `Details`, `Reviews`].map((nav) => <li
          key={`nav-list-item--${nav}`}
          className={`movie-nav__item ${match.params.nav === nav.toLowerCase() ? `movie-nav__item--active` : ``}`}>
          <Link to={`/films/${movie.id}/${nav.toLowerCase()}`} className="movie-nav__link">{nav}</Link>
        </li>
        )}
      </ul>
    </nav>
    {
      tabSwitch(match.params.nav, movie)
    }
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
