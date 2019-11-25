import ActionCreator from "./action-creator";
import {ActionType} from "./action-creator";

describe(`ActionCreator works correctly`, () => {

  it(`ActionCreator for change genre`, () => expect(ActionCreator.changeGenre(`Comedy`
  )).toEqual({type: ActionType.CHANGE_GENRE, payload: `Comedy`}));

  it(`ActionCreator for get movies`, () => expect(ActionCreator.getMovies()).toEqual({type: ActionType.GET_MOVIES}));

  it(`ActionCreator for get genres`, () => expect(ActionCreator.getGenres([{genre: `Comedy`}, {genre: `Comedy`}, {genre: `Drama`}]
  )).toEqual({type: ActionType.GET_GENRES, payload: [`All genres`, `Comedy`, `Drama`]}));

  it(`ActionCreator for get required auth`, () => expect(ActionCreator.requireAuthorization()).toEqual({type: ActionType.REQUIRE_AUTH, payload: true}));


});
