import React from "react";
import {PropTypes} from "prop-types";
import {Redirect} from "react-router-dom";
import MovieHeader from "../movie-page-header/movie-page-header";
import {API_URL} from "../../api";
import MovieCardInfo from "../movie-card-info/movie-card-info";

const MovieCardFull = (props) => {
  const {auth, films, match} = props;
  const movie = films.find((film) => film.id === 2);
  console.log(movie);
  const {name, posterImage, genre, year} = movie;
  return movie ? <React.Fragment>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <MovieCardInfo {... props} movie={movie} review={true} ></MovieCardInfo>
      </div>
    </section>
  </React.Fragment> : <Redirect to={`/`}></Redirect>;
};

MovieCardFull.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({name: PropTypes.string})),
  auth: PropTypes.shape({})};

export default MovieCardFull;
