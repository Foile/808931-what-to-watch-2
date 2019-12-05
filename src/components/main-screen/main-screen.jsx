import React, {PureComponent} from "react";
import {arrayOf, shape, string, func} from "prop-types";
import MoviesList from "../movies-list/movies-list";
import GenresList from "../genres-list/genres-list";
import MovieCardInfo from "../movie-card-info/movie-card-info";
import PageFooter from "../page-footer/page-footer";

export default class MainScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movies, onChangeGenre, genres, auth} = this.props;
    return (
      <React.Fragment>
        <section className="movie-card">
          <MovieCardInfo movie={movies[0]} auth={auth}></MovieCardInfo>
        </section>
        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>
            <GenresList genres = {genres} onGenreClick={onChangeGenre}/>
            <MoviesList movies = {movies} onHeaderClick={()=>({})}/>
            <div className="catalog__more">
              <button className="catalog__button" type="button">
              Show more
              </button>
            </div>
          </section>
          <PageFooter/>
        </div>
      </React.Fragment>
    );
  }
}

MainScreen.propTypes = {movies: arrayOf(shape({name: string})).isRequired,
  onChangeGenre: func.isRequired,
  auth: shape({}),
  genres: arrayOf(string)};
