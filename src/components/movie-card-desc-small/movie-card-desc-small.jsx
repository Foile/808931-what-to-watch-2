import React from "react";
import {string, shape, number, bool} from "prop-types";
import {Link} from "react-router-dom";

const MovieCardDescSmall = (props) => {
const {movie} = props;
const {id, name, genre, released} = movie || {};
return <div className="movie-card__desc">
  <h2 className="movie-card__title">{name}</h2>
  <p className="movie-card__meta">
    <span className="movie-card__genre">{genre}</span>
    <span className="movie-card__year">{released}</span>
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
    {props.review ? <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link> : ``}
  </div>
</div>};

MovieCardDescSmall.propTypes = {review: bool,
  movie: shape({
    id: number.isRequired,
    name: string.isRequired,
    genre: string.isRequired,
    released: number,
    posterImage: string,
    backgroundImage: string
  }).isRequired};


export default MovieCardDescSmall;
