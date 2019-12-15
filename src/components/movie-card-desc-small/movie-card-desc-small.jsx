import React from "react";
import {string, shape, number, bool, func} from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import apiDispatcher from "../../reducers/api-dispatcher/api-dispatcher";
import history from "../../history";

const MovieCardDescSmall = (props) => {
  const {movie, onAddToFavorites, onRemoveFromFavorites, onPlay} = props;
  const {id, name, genre, released, isFavorite} = movie || {};
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
        onClick = {(evt) => {
          evt.preventDefault();
          onPlay(id);
        }}>
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button
        className="btn btn--list movie-card__button"
        type="button"
        onClick = {(evt) => {
          evt.preventDefault();
          if (isFavorite) {
            return onRemoveFromFavorites(id);
          }
          return onAddToFavorites(id);
        }}>
        <svg viewBox="0 0 19 20" width="19" height="20">
          {isFavorite ? <use xlinkHref="#in-list"/> : <use xlinkHref="#add"/>}
        </svg>
        <span>My list</span>
      </button>
      {props.review ? <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link> : ``}
    </div>
  </div>;
};

const mapDispatchToProps = (dispatch) => ({
  onPlay: (id) => {
    history.push(`/films/${id}/player`);
  },
  onAddToFavorites: (id) => dispatch(apiDispatcher.toggleFavorite(id, 1)),
  onRemoveFromFavorites: (id) => dispatch(apiDispatcher.toggleFavorite(id, 0)),
});

MovieCardDescSmall.propTypes = {
  onAddToFavorites: func,
  onRemoveFromFavorites: func,
  onPlay: func,
  review: bool,
  movie: shape({
    id: number.isRequired,
    name: string.isRequired,
    genre: string.isRequired,
    released: number,
    posterImage: string,
    backgroundImage: string
  }).isRequired};

MovieCardDescSmall.defaultProps = {
  onAddToFavorites: () => ({})
};

export {MovieCardDescSmall};
export default connect(()=>({}), mapDispatchToProps)(MovieCardDescSmall);
