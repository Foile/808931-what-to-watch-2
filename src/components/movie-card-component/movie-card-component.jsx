import React from "react";
import {shape, func, string, number} from 'prop-types';

const MovieCard = (props) => {
  const {movie, onHeaderClick, onMouseEnter} = props;
  return <article
    className="small-movie-card catalog__movies-card"
    onClick={() => onHeaderClick(movie)}
    onMouseEnter={()=> onMouseEnter(movie)}>
    <div className="small-movie-card__image">
      <img
        src={movie.previewImage}
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

MovieCard.propTypes = {movie: shape({
  id: number,
  name: string,
  previewImage: string
}).isRequired, onHeaderClick: func, onMouseEnter: func};

export default MovieCard;
