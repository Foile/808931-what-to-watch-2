import React from "react";
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen';
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      genre: `All genres`,
      films: props.films
    };
  }

  render() {
    const {films, onChangeGenre, onGetMovies} = this.props;
    return <MainScreen movies = {films} onChangeGenre={onChangeGenre} onGetMovies={onGetMovies} />;
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
onGetMovies: PropTypes.func.isRequired};

const mapStateToProps = (state, ownProps) => {
  const res = Object.assign({}, ownProps, {
    genre: state.genre,
    films: state.films
  });

  return res;
};

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre: (genre) => {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.getMovies());
  },
  onGetMovies: () => dispatch(ActionCreator.getMovies())
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
