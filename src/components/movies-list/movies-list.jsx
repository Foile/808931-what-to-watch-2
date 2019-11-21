import React from "react";
import {arrayOf, func, shape, string, number} from 'prop-types';
import MovieCard from '../movie-card/movie-card';

const MoviesList = ({movies, onHeaderClick, activeItem = -1, onChangeActiveItem = ()=>{}}) => (
  <div className="catalog__movies-list">{movies.map((movie, i) =>
    <MovieCard key = {`movie-${movie.id}`}
      movie = {movie}
      onHeaderClick = {onHeaderClick}
      onMouseEnter={onChangeActiveItem(i)}
      isPlaying={i === activeItem}>
    </MovieCard>
  )}</div>
);

MoviesList.propTypes = {
  movies: arrayOf(shape({
    id: number,
    name: string,
    previewImage: string
  })).isRequired,
  onHeaderClick: func,
  activeItem: number,
  onChangeActiveItem: func,
};

export default MoviesList;
