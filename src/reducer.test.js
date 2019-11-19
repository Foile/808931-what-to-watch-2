import {reducer, ActionCreator} from './reducer';

describe(`Reducer works correctly`, () => {

  it(`Reducer return default`, () => expect(
      reducer(undefined, {})).toEqual({}));

  it(`Reducer filters movies`, () => expect(
      reducer(
          {genre: `Comedy`, allFilms: [{genre: `Comedy`}, {genre: `Drama`}], films: []},
          {type: `GET_MOVIES`})
  ).toEqual({genre: `Comedy`, allFilms: [{genre: `Comedy`}, {genre: `Drama`}], films: [{genre: `Comedy`}]}));

  it(`Reducer changes genre`, () => expect(
      reducer(
          {genre: `All genres`, films: [{genre: `Comedy`}, {genre: `Drama`}]},
          {type: `CHANGE_GENRE`, payload: `Comedy`})
  ).toEqual({genre: `Comedy`, films: [{genre: `Comedy`}, {genre: `Drama`}]}));
});

describe(`ActionCreator works correctly`, () => {

  it(`ActionCreator for change genre`, () => expect(ActionCreator.changeGenre(`Comedy`
  )).toEqual({type: `CHANGE_GENRE`, payload: `Comedy`}));

  it(`ActionCreator for get movies`, () => expect(ActionCreator.getMovies()).toEqual({type: `GET_MOVIES`}));
});
