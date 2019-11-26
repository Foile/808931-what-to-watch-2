import apiDispatcher from "./api-dispatcher";
import {ActionType} from "../action-creator/action-creator";
import MockAdapter from "axios-mock-adapter";
import {api} from "../../api";

describe(`apiDispatcher works correctly`, () => {
  it(`apiDispatcher return mock`, () => {
    const dispatch = jest.fn();
    const apiMock = new MockAdapter(api);
    const filmsLoader = apiDispatcher.loadFilms();
    apiMock.onGet(`/films`).reply(200, [{fake: true}]);

    return filmsLoader(dispatch)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {type: ActionType.GET_MOVIES, payload: [{fake: true}]});
    });
  });

});
