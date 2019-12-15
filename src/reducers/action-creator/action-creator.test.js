import ActionCreator from "./action-creator";
import {ActionType} from "./action-creator";

describe(`ActionCreator works correctly`, () => {

  it(`ActionCreator for change genre`, () => expect(ActionCreator.changeGenre(`Comedy`
  )).toEqual({type: ActionType.CHANGE_GENRE, payload: `Comedy`}));

  it(`ActionCreator for get movies`, () => expect(ActionCreator.getMovies([{genre: `Comedy`}, {genre: `Drama`}]
  )).toEqual({type: ActionType.GET_MOVIES, payload: [{genre: `Comedy`}, {genre: `Drama`}]}));

  it(`ActionCreator for get genres`, () => expect(ActionCreator.getGenres([{genre: `Comedy`}, {genre: `Comedy`}, {genre: `Drama`}]
  )).toEqual({type: ActionType.GET_GENRES, payload: [`All genres`, `Comedy`, `Drama`]}));

  it(`ActionCreator for get required auth`, () => expect(ActionCreator.requireAuthorization(true)).toEqual({type: ActionType.REQUIRE_AUTH, payload: true}));

  it(`ActionCreator for login`, () => expect(ActionCreator.login(`e`, `p`)).toEqual({type: ActionType.LOGIN, payload: {email: `e`, password: `p`}}));

  it(`ActionCreator for auth`, () => expect(ActionCreator.auth({})).toEqual({type: ActionType.AUTH, payload: {}}));

  it(`ActionCreator for updateComments`, () => expect(ActionCreator.updateComments([])).toEqual({type: ActionType.UPDATE_COMMENTS, payload: []}));

  it(`ActionCreator for loadMore`, () => expect(ActionCreator.loadMore(12)).toEqual({type: ActionType.LOAD_MORE, payload: 12}));

  it(`ActionCreator for loadPromo`, () => expect(ActionCreator.loadPromo({})).toEqual({type: ActionType.LOAD_PROMO, payload: {}}));

  it(`ActionCreator for loadFavorites`, () => expect(ActionCreator.loadFavorites([])).toEqual({type: ActionType.LOAD_FAVORITES, payload: []}));

  it(`ActionCreator for updateMovie`, () => expect(ActionCreator.updateMovie({})).toEqual({type: ActionType.UPDATE_MOVIE, payload: {}}));

  it(`ActionCreator for pushError`, () => expect(ActionCreator.pushError(`errorText`)).toEqual({type: ActionType.ERROR, payload: `errorText`}));


});
