import React from "react";
import {arrayOf, func, shape, string} from 'prop-types';
import MovieCard from '../movie-card-component/movie-card-component';

const MoviesList = (props) => {

  const onHeaderClick = () => {};

  const onMouseEnter = () => {};

  const {movies} = props;
  const listMovies = movies.map((movie) =>
    <MovieCard key = {`card-${movie.name}`}
      movie = {movie}
      onHeaderClick = {onHeaderClick}
      onMouseEnter={onMouseEnter}>
    </MovieCard>
  );
  return (
    <div className="catalog__movies-list">{listMovies}</div>
  );
};

MoviesList.propTypes = {
  movies: arrayOf(shape({
    name: string
  })).isRequired,
  onHeaderClick: func,
  onMouseEnter: func};

export default MoviesList;
