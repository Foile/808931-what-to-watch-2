import React from "react";
import ReactDOM from "react-dom";
import Main from './components/main';

const init = () => {
  ReactDOM.render(
      <Main />,
      document.querySelector(`#root`)
  );
};

init();
