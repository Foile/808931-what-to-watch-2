import React, {PureComponent} from "react";
import {arrayOf, shape, string, func, bool} from "prop-types";
import MoviesList from "../movies-list/movies-list";
import GenresList from "../genres-list/genres-list";
import MovieCardInfo from "../movie-card-info/movie-card-info";
import PageFooter from "../page-footer/page-footer";
import ShowMore from "../show-more/show-more";
import {connect} from "react-redux";
import getLimitFilteredFilms from "../../selectors/selector";
import Constants from "../../const";
import ActionCreator from "../../reducers/action-creator/action-creator";


class MainScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films, onChangeGenre, genres, auth, loadMore, limit, promo, isAuthorizationRequired} = this.props;
    const isLoadMoreVisible = limit <= films.length;
    console.log(this.props)
    return (
      <React.Fragment>
        <section className="movie-card">
          <MovieCardInfo movie={promo} auth={auth} isAuthorizationRequired={isAuthorizationRequired}></MovieCardInfo>
        </section>
        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>
            <GenresList genres = {genres} onGenreClick={onChangeGenre}/>
            <MoviesList movies = {films} onHeaderClick={()=>({})}/>
            {isLoadMoreVisible ? <ShowMore onClick = {loadMore}></ShowMore> : <div></div>}
          </section>
          <PageFooter/>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const res = Object.assign({}, ownProps, {
    films: getLimitFilteredFilms(state),
    genres: state.data.genres || [Constants.DEFAULT_GENRE],
    isAuthorizationRequired: state.user.isAuthorizationRequired,
    auth: state.user.auth,
    limit: state.user.limit,
    promo: state.data.promo
  });
  return res;
};

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre: (genre) => {
    dispatch(ActionCreator.changeGenre(genre));
  },
  onGetMovies: (movies) => dispatch(ActionCreator.getMovies(movies)),
  submitHandler: (email, password) => dispatch(apiDispatcher.login(email, password)),
  addComment: (movieId, rating, text) => dispatch(apiDispatcher.addComment(movieId, rating, text)),
  loadMore: () => dispatch(ActionCreator.loadMore(Constants.FILMS_LIMIT_RATE)),
});


MainScreen.propTypes = {
  isAuthorizationRequired: bool,
  promo: shape({
    name: string
  }),
  films: arrayOf(shape({
    name: string
  })).isRequired,
  onChangeGenre: func.isRequired,
  auth: shape({}),
  genres: arrayOf(string),
  isLoadMoreVisible: bool,
  onLoadMore: func
};


  export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);