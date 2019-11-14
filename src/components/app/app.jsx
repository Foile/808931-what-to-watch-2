import React from "react";
import PropTypes from 'prop-types';
import MainScreen from '../main-screen/main-screen';


class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      genre: `All genres`,
      films: this.props.films
    };
  }

  render() {
    return <MainScreen movies = {this.state.films} />;
  }
}
App.propTypes = {films: PropTypes.arrayOf(
    PropTypes.shape({
    })
)};

export default App;
