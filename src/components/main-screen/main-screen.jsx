import React, {PureComponent} from "react";
import {arrayOf, shape, string, func, bool} from "prop-types";
import MoviesList from "../movies-list/movies-list";
import GenresList from "../genres-list/genres-list";
import MovieCardInfo from "../movie-card-info/movie-card-info";
import PageFooter from "../page-footer/page-footer";
import ShowMore from "../show-more/show-more";

export default class MainScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movies, onChangeGenre, genres, auth, onLoadMore, isLoadMoreVisible, promo} = this.props;
    return (
      <React.Fragment>
        <section className="movie-card">
          <MovieCardInfo movie={promo} auth={auth}></MovieCardInfo>
        </section>
        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>
            <GenresList genres = {genres} onGenreClick={onChangeGenre}/>
            <MoviesList movies = {movies} onHeaderClick={()=>({})}/>
            {isLoadMoreVisible ? <ShowMore onClick = {onLoadMore}></ShowMore> : <div></div>}
          </section>
          <PageFooter/>
        </div>
      </React.Fragment>
    );
  }
}

MainScreen.propTypes = {
  promo: shape({
    name: string
  }),
  movies: arrayOf(shape({
    name: string
  })).isRequired,
  onChangeGenre: func.isRequired,
  auth: shape({}),
  genres: arrayOf(string),
  isLoadMoreVisible: bool,
  onLoadMore: func};
