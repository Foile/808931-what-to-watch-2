import React from "react";
import renderer from "react-test-renderer";
import UserPage from "./user-page";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({data: {}, user: {}});

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<Provider store={store}><BrowserRouter><UserPage/>
  </BrowserRouter></Provider>
  )
  .toJSON();
  expect(tree).toMatchSnapshot();
});
