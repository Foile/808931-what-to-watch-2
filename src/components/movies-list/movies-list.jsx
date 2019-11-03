import React from "react";
import {arrayOf, func, shape, string, number} from 'prop-types';
import MovieCard from '../movie-card/movie-card';

const MoviesList = (props) => {

  const onHeaderClick = () => {};

  const onMouseEnter = () => {};

  const {movies} = props;
  const listMovies = movies.map((movie) =>
    <MovieCard key = {`movie-${movie.id}`}
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
    id: number,
    name: string,
    previewImage: string
  })).isRequired,
  onHeaderClick: func,
  onMouseEnter: func};

export default MoviesList;
