import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({data: {}, user: {}});

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<Provider store={store}><BrowserRouter><App/>
  </BrowserRouter></Provider>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
