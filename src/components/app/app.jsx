import React from "react";
import {number} from 'prop-types';
import MainScreen from '../screens/main-screen';

const App = (props) => {
  const {gameTime, errorCount} = props;

  return <MainScreen
    time={gameTime}
    errorCount={errorCount}
  />;
};

App.propTypes = {errorCount: number, gameTime: number};

export default App;
