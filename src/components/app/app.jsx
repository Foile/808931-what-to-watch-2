import React from "react";
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen';
import {connect} from 'react-redux';
import ActionCreator from "../../reducers/action-creator/action-creator";
import getFilteredMovies from "../../selectors/selector";
import ErrorBoundary from "./../error";


class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films, onChangeGenre, onGetMovies, genres} = this.props;
    return <ErrorBoundary><MainScreen movies = {films} onChangeGenre={onChangeGenre} onGetMovies={onGetMovies} genres={genres} /></ErrorBoundary>;
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
genres: PropTypes.arrayOf(PropTypes.string)};

const mapStateToProps = (state, ownProps) => {
  const res = Object.assign({}, ownProps, {
    genre: state.activeItem,
    films: getFilteredMovies(state),
    genres: state.data.genres || [`All genres`],

  });
  return res;
};

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre: (genre) => {
    dispatch(ActionCreator.changeGenre(genre));
  },
  onGetMovies: (movies) => dispatch(ActionCreator.getMovies(movies))
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
