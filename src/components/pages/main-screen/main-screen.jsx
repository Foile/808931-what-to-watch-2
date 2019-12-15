import React, {PureComponent} from "react";
import {arrayOf, shape, string, func, bool, number} from "prop-types";
import MoviesList from "../../movies-list/movies-list";
import GenresList from "../../genres-list/genres-list";
import MovieCardInfo from "../../movie-card-info/movie-card-info";
import PageFooter from "../../page-footer/page-footer";
import ShowMore from "../../show-more/show-more";
import {connect} from "react-redux";
import getLimitFilteredFilms from "../../../selectors/selectors";
import Constants from "../../../const";
import ActionCreator from "../../../reducers/action-creator/action-creator";


class MainScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films, onChangeGenre, genres, auth, loadMore, limit, promo, isAuthorizationRequired} = this.props;
    const isLoadMoreVisible = limit <= films.length;
    return (
      <React.Fragment>
        <section className="movie-card">
          <MovieCardInfo movie={promo} auth={auth} isAuthorizationRequired={isAuthorizationRequired}></MovieCardInfo>
        </section>
        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>
            <GenresList genres = {genres} onGenreClick={onChangeGenre}/>
            <MoviesList movies = {films}/>
            {isLoadMoreVisible ? <ShowMore onClick = {loadMore}></ShowMore> : <div></div>}
          </section>
          <PageFooter/>
        </div>
      </React.Fragment>
    );
  }
}

MainScreen.defaultProps = {
  films: [],
  genre: Constants.DEFAULT_GENRE,
  genres: [Constants.DEFAULT_GENRE]
};

const mapStateToProps = (state, ownProps) => {
  const res = Object.assign({}, ownProps, {
    films: getLimitFilteredFilms(state),
    genres: state.data.genres,
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
  loadMore: () => dispatch(ActionCreator.loadMore(Constants.FILMS_LIMIT_RATE)),
});


MainScreen.propTypes = {
  loadMore: func,
  limit: number,
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

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
