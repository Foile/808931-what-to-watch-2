import React from "react";
import {string, shape, arrayOf, number} from "prop-types";
import {Redirect} from "react-router-dom";
import MovieCardInfo from "../movie-card-info/movie-card-info";
import MoviesList from "../movies-list/movies-list";
import PageFooter from "../page-footer/page-footer";
import MovieCardDesc from "../movie-card-desc/movie-card-desc";

const MovieCardFull = (props) => {
  const {films, match} = props;
  const movie = films.find(({id}) => id === Number(match.params.id));
  return movie ? <React.Fragment>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <MovieCardInfo {... props} movie={movie} review={true} ></MovieCardInfo>
      </div>
      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={movie.posterImage} alt={movie.name} width="218" height="327" />
          </div>
          <MovieCardDesc {... props} movie={movie} />
        </div>
      </div>
    </section>
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <MoviesList movies = {films.filter(({genre})=> genre === movie.genre)} onHeaderClick={()=>({})}/>
      </section>
      <PageFooter/>
    </div>
  </React.Fragment> : <Redirect to={`/`}></Redirect>;
};

MovieCardFull.propTypes = {
  films: arrayOf(shape({
    name: string.isRequired,
    genre: string.isRequired,
    posterImage: string
  })),
  match: shape({
    params: shape({
      id: number.isRequired
    })
  })};

export default MovieCardFull;
