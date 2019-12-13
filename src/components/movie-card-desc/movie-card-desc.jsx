import React from "react";
import {string, shape, number, arrayOf, bool} from "prop-types";
import {Link} from "react-router-dom";
import Constant from "../../const";

const formatTime = (minutes) => `${Math.floor(minutes / 60) > 0 ? `${Math.floor(minutes / 60)} h ` : ``}${minutes % 60} m`;
const ratingDesc = (rating = 0) => Constant.USER_RATINGS.filter(({min}) => min <= rating).pop().title;

const formatDate = (date) => date.format(`yyyy-mm-dd`);

const tabSwitch = (nav = `overview`, movie, comments) => {
  const {id, director, runTime, genre, released, rating, scoresCount, starring, description} = movie || {};
  switch (nav) {
    case `details`:
      return <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {starring||[].map((actor)=>`${actor}\n`)}
            </span>
          </p>
        </div>
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{formatTime(runTime)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{released}</span>
          </p>
        </div>
      </div>;
    case `reviews`: return <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {comments||[].map((comment) =>
          <div className="review" key={`movie-${id}-comment-${comment.id}`}>
            <blockquote className="review__quote">
              <p className="review__text">{comment.text}</p>
              <footer className="review__details">
                <cite className="review__author">comment.author</cite>
                <time className="review__date" dateTime={`${comment.date}`}>{formatDate(comment.date)}</time>
              </footer>
            </blockquote>
            <div className="review__rating">comment.rating</div>
          </div>
        ) }
      </div>
    </div>;
    default: return <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingDesc(rating)}</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>
      <div className="movie-card__text">
        {description}
        <p className="movie-card__director"><strong>Director: {director}</strong></p>
        <p className="movie-card__starring"><strong>Starring: {starring||[].join(`, `)} and other</strong></p>
      </div>
    </React.Fragment>;
  }
};

const MovieCardDesc = (props)=> {
  const {movie, match, comments} = props;
  const {id} = movie || {};
  const path = !match.params.nav ? `overview` : match.params.nav;
  return <div className="movie-card__desc">
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {[`Overview`, `Details`, `Reviews`].map((nav) => <li
          key={`nav-list-item--${nav}`}
          className={`movie-nav__item ${path === nav.toLowerCase() ? `movie-nav__item--active` : ``}`}>
          <Link to={`/films/${id}/${nav.toLowerCase()}`} className="movie-nav__link">{nav}</Link>
        </li>
        )}
      </ul>
    </nav>
    {
      tabSwitch(match.params.nav, movie, comments)
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
