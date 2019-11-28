import React from "react";
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen';
import Login from "../../components/login/login";
import {connect} from 'react-redux';
import ActionCreator from "../../reducers/action-creator/action-creator";
import getFilteredMovies from "../../selectors/selector";
import ErrorBoundary from "./../error";
import {Switch, Route} from "react-router-dom";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films, onChangeGenre, onGetMovies, genres, submitHandler, requireAuthorization} = this.props;
    return <Switch>
      <Route path="/" exact render={() => <ErrorBoundary>
        <MainScreen movies = {films} onChangeGenre={onChangeGenre} onGetMovies={onGetMovies} genres={genres} />
      </ErrorBoundary>}/>
      <Route path="/login" exact render={() =>
        <ErrorBoundary>
          <Login submitHandler={submitHandler} requireAuthorization={requireAuthorization}/>
        </ErrorBoundary>}/>
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
requireAuthorization: PropTypes.bool};

const mapStateToProps = (state, ownProps) => {
  const res = Object.assign({}, ownProps, {
    genre: state.activeItem,
    films: getFilteredMovies(state),
    genres: state.data.genres || [`All genres`],
    requireAuthorization: state.user.requireAuthorization,
  });
  return res;
};

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre: (genre) => {
    dispatch(ActionCreator.changeGenre(genre));
  },
  onGetMovies: (movies) => dispatch(ActionCreator.getMovies(movies)),
  submitHandler: (email, password) => dispatch(ActionCreator.login(email, password))
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
