import React from "react";
import MainScreen from '../screens/main-screen';
import films from '../../mocks/films';

const App = () => {
  return <MainScreen movies = {films} />;
};

export default App;
