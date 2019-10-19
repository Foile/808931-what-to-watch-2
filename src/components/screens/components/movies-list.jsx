import React from "react";
import {arrayOf, oneOf} from 'prop-types';

const MoviesList = (props) => {
  const movies = props.movies;
  const listMovies = movies.map((name) =>
    <article className="small-movie-card catalog__movies-card" key={name}>
      <div className="small-movie-card__image">
        <img
          src={`img/${name}.jpg`}
          alt={name}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">
          {name}
        </a>
      </h3>
    </article>
  );

  return (
    <div className="catalog__movies-list">{listMovies}</div>
  );
};

MoviesList.propTypes = {movies: arrayOf(oneOf([`Macbeth`, `Aviator`, `Revenant`, `Orlando`]))};

export default MoviesList;
