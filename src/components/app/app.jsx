import React from "react";
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen';
import UserPage from "../user-page/user-page";
import {connect} from 'react-redux';
import ActionCreator from "../../reducers/action-creator/action-creator";
import getFilteredMovies from "../../selectors/selector";
import ErrorBoundary from "./../error";
import {Switch, Route} from "react-router-dom";
import apiDispatcher from "../../reducers/api-dispatcher/api-dispatcher";
import MovieCardFull from "../movie-card-full/movie-card-full";
import NotFound from "../not-found/not-found";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films, onChangeGenre, onGetMovies, genres, submitHandler, isAuthorizationRequired, auth} = this.props;
    return <Switch>
      <Route path="/" exact render={() => <ErrorBoundary>
        <MainScreen movies = {films} onChangeGenre={onChangeGenre} onGetMovies={onGetMovies} genres={genres} auth={auth} />
      </ErrorBoundary>}/>
      <Route path="/login" exact render={() =>
        <ErrorBoundary>
          <UserPage submitHandler={submitHandler} isAuthorizationRequired={isAuthorizationRequired}/>
        </ErrorBoundary>}/>
      <Route path="/films/:id" exact render={(props) =>
        <ErrorBoundary>
          <MovieCardFull {...props} films={films} auth={auth} />
        </ErrorBoundary>}/>
      <Route path="/films/:id/:nav" exact render={(props) =>
        <ErrorBoundary>
          <MovieCardFull {...props} films={films} auth={auth} />
        </ErrorBoundary>}/>
      <Route component = {NotFound}/>
    </Switch>;
  }
}

App.propTypes = {films: PropTypes.arrayOf(
    PropTypes.shape({
      genre: PropTypes.string,
      name: PropTypes.string,
      previewImage: PropTypes.string,
      videoLink: PropTypes.string
    })
).isRequired,
onChangeGenre: PropTypes.func.isRequired,
onGetMovies: PropTypes.func.isRequired,
genres: PropTypes.arrayOf(PropTypes.string),
submitHandler: PropTypes.func,
isAuthorizationRequired: PropTypes.bool,
auth: PropTypes.shape({})};

const mapStateToProps = (state, ownProps) => {
  const res = Object.assign({}, ownProps, {
    films: getFilteredMovies(state),
    genres: state.data.genres || [`All genres`],
    isAuthorizationRequired: state.user.isAuthorizationRequired,
    auth: state.user.auth
  });
  return res;
};

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre: (genre) => {
    dispatch(ActionCreator.changeGenre(genre));
  },
  onGetMovies: (movies) => dispatch(ActionCreator.getMovies(movies)),
  submitHandler: (email, password) => dispatch(apiDispatcher.login(email, password))
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
