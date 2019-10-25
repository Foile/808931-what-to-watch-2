import React from "react";
import {shape, func, string} from 'prop-types';

const MovieCard = (props) => {
  const {movie, onHeaderClick, onMouseEnter} = props;
  return <article
    className="small-movie-card catalog__movies-card"
    onClick={onHeaderClick}
    onMouseEnter={(evt)=>{
      evt.preventDefault();
      onMouseEnter(evt.target.value);
    }}>
    <div className="small-movie-card__image">
      <img
        src={`img/${movie.name}.jpg`}
        alt={movie.name}
        width="280"
        height="175"
      />
    </div>
    <h3 className="small-movie-card__title">
      <a className="small-movie-card__link" href="movie-page.html">
        {movie.name}
      </a>
    </h3>
  </article>;
};

MovieCard.propTypes = {movie: shape({name: string}), onHeaderClick: func, onMouseEnter: func};

export default MovieCard;
