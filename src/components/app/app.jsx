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
import withAuth from "../../hocs/with-auth/with-auth";
import MyList from "../my-list/my-list";
import withLoaded from "../../hocs/with-loaded/with-loaded";
import {Router} from "react-router-dom";
import history from "../../history";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const {films, auth, addComment} = this.props;
    return <Router history={history}><Switch>
      <Route path="/" exact component={MainScreen}/>
      <Route path="/mylist" exact component={withAuth(MyList)} />
      <Route path="/login" exact component={UserPage}/>}/>
      <Route path="/films/:id" exact component={MovieCardFull}/>
      <Route path="/films/:id/review" exact component={withAuth(AddReview)}/>
      <Route path="/films/:id/:nav" exact render={(props) =>
        <ErrorBoundary>
          <MovieCardFull {...props} films={films} auth={auth} />
        </ErrorBoundary>}/>
      <Route component = {NotFound}/>
    </Switch>
    </Router>;
  }
}

App.propTypes = {
  promo: shape({
    genre: string,
    name: string,
    previewImage: string,
    videoLink: string
  }),
  films: arrayOf(
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
  const res = Object.assign({}, ownProps, {
    films: getLimitFilteredFilms(state),
    genres: state.data.genres || [Constants.DEFAULT_GENRE],
    isAuthorizationRequired: state.user.isAuthorizationRequired,
    auth: state.user.auth,
    limit: state.user.limit,
    isLoadMoreVisible: state.data.allFilms ? state.user.limit < state.data.allFilms.length : true,
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

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
