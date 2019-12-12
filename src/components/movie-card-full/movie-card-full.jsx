import React from "react";
import {string, shape, arrayOf} from "prop-types";
import {Redirect} from "react-router-dom";
import MovieCardInfo from "../movie-card-info/movie-card-info";
import MoviesList from "../movies-list/movies-list";
import PageFooter from "../page-footer/page-footer";
import MovieCardDesc from "../movie-card-desc/movie-card-desc";
import {connect} from 'react-redux';
import Constants from "../../const"

const MovieCardFull = (props) => {
  const {films, movie} = props;
  return <React.Fragment>
    <section className="movie-card movie-card--full" style={{background: movie.backgroundColor}}>
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
  </React.Fragment>;
};

MovieCardFull.propTypes = {
  films: arrayOf(shape({
    name: string.isRequired,
    genre: string.isRequired,
    posterImage: string
  })),
  match: shape({
    params: shape({
      id: string.isRequired
    })
  })};

  MovieCardFull.defaultProps = {
    films: []
  };

  const mapStateToProps = (state, ownProps) => {
    const res = Object.assign({}, ownProps, {
      films: state.data.allFilms,
      movie: state.data.allFilms && state.data.allFilms.find(({id}) => id === Number(ownProps.match.params.id)),
    });
    return res;
  };
  
  const mapDispatchToProps = (dispatch) => ({
    onGetMovies: (movies) => dispatch(ActionCreator.getMovies(movies)),
  });
  

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardFull);
