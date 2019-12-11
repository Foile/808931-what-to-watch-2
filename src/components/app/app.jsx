import React from "react";
import {string, bool, func, shape, arrayOf, number} from 'prop-types';
import MainScreen from '../main-screen/main-screen';
import UserPage from "../user-page/user-page";
import {connect} from 'react-redux';
import ActionCreator from "../../reducers/action-creator/action-creator";
import getLimitFilteredFilms from "../../selectors/selector";
import ErrorBoundary from "./../error";
import {Switch, Route} from "react-router-dom";
import apiDispatcher from "../../reducers/api-dispatcher/api-dispatcher";
import MovieCardFull from "../movie-card-full/movie-card-full";
import NotFound from "../not-found/not-found";
import AddReview from "../add-review/add-review";
import Constants from "../../const";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films, onChangeGenre, onGetMovies, genres, submitHandler, isAuthorizationRequired, auth, addComment, loadMore, isLoadMoreVisible} = this.props;
    return <Switch>
      <Route path="/" exact render={() =>
        <ErrorBoundary>
          <MainScreen movies = {films} onChangeGenre={onChangeGenre} onGetMovies={onGetMovies} onLoadMore={loadMore} genres={genres} auth={auth} isLoadMoreVisible = {isLoadMoreVisible}/>
        </ErrorBoundary>}/>
      <Route path="/login" exact render={() =>
        <ErrorBoundary>
          <UserPage submitHandler={submitHandler} isAuthorizationRequired={isAuthorizationRequired}/>
        </ErrorBoundary>}/>
      <Route path="/films/:id" exact render={(props) =>
        <ErrorBoundary>
          <MovieCardFull {...props} films={films} auth={auth} />
        </ErrorBoundary>}/>
      <Route path="/films/:id/review" exact render={(props) =>
        <ErrorBoundary>
          <AddReview {...props} films={films} auth={auth} submitHandler={addComment} />
        </ErrorBoundary>}/>
      <Route path="/films/:id/:nav" exact render={(props) =>
        <ErrorBoundary>
          <MovieCardFull {...props} films={films} auth={auth} />
        </ErrorBoundary>}/>
      <Route component = {NotFound}/>
    </Switch>;
  }
}

App.propTypes = {films: arrayOf(
    shape({
      genre: string,
      name: string,
      previewImage: string,
      videoLink: string
    })
).isRequired,
onChangeGenre: func.isRequired,
onGetMovies: func.isRequired,
genres: arrayOf(string),
submitHandler: func,
isAuthorizationRequired: bool,
auth: shape({}),
addComment: func,
loadMore: func,
limit: number,
isLoadMoreVisible: bool
};

const mapStateToProps = (state, ownProps) => {
  console.log(state.data.allFilms, state.user.limit, ownProps.isLoadMoreVisible);
  const res = Object.assign({}, ownProps, {
    films: getLimitFilteredFilms(state),
    genres: state.data.genres || [Constants.DEFAULT_GENRE],
    isAuthorizationRequired: state.user.isAuthorizationRequired,
    auth: state.user.auth,
    limit: state.user.limit,
    isLoadMoreVisible: state.data.allFilms ? state.user.limit < state.data.allFilms.length : true
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

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
