import React from "react";
import PropTypes from "prop-types";
import MovieHeader from "../movie-page-header/movie-page-header";
import MovieCardDescSmall from "../movie-card-desc-small/movie-card-desc-small";


const MovieCardInfo = (props) =>
  props.movie ?
    <React.Fragment>
      <div className="movie-card__bg" style={{backgroundColor: props.movie.backgroundColor}}>
        <img
          src={props.movie.backgroundImage}
          alt={`Background ${props.movie.name}`}
        />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <MovieHeader auth={props.auth} ></MovieHeader>
      <div className={`movie-card__wrap`}>
        <div className="movie-card__info">
          {props.review ? <MovieCardDescSmall {...props}/> : <React.Fragment/>}
          {!props.review ? <div className={`movie-card__poster`}>
            <img
              src={props.movie.posterImage}
              alt={`${props.movie.name} poster`}
              width="218"
              height="327"
            />
          </div> : <React.Fragment/>}
          {!props.review ? <MovieCardDescSmall {...props}/> : <React.Fragment/>}
        </div>
      </div>
    </React.Fragment>
    : <React.Fragment/>;

MovieCardInfo.propTypes = {
  auth: PropTypes.shape({}),
  review: PropTypes.bool,
  movie: PropTypes.shape({
    name: PropTypes.string,
    genre: PropTypes.string,
    released: PropTypes.number,
    posterImage: PropTypes.string,
    backgroundImage: PropTypes.string
  })};

export default MovieCardInfo;
