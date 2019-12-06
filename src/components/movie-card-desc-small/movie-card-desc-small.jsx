import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const MovieCardDescSmall = (props) => <div className="movie-card__desc">
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

MovieCardDescSmall.propTypes = {review: PropTypes.bool,
  movie: PropTypes.shape({
    name: PropTypes.string,
    genre: PropTypes.string,
    released: PropTypes.number,
    posterImage: PropTypes.string,
    backgroundImage: PropTypes.string
  })};


export default MovieCardDescSmall;
