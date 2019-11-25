import {reducer} from './reducer';

describe(`Reducer works correctly`, () => {

  it(`Reducer return default`, () => expect(
      reducer(undefined, {})).toEqual({}));

  it(`Reducer get movies`, () => expect(
      reducer({
        genre: `Comedy`,
        allFilms: [{genre: `Comedy`}, {genre: `Drama`}]},
      {type: `GET_MOVIES`, payload: [{genre: `Comedy`}, {genre: `Drama`}]})
  ).toEqual({
    genre: `Comedy`,
    allFilms: [{genre: `Comedy`}, {genre: `Drama`}]
  }));

  it(`Reducer changes genre`, () => expect(
      reducer(
          {genre: `All genres`,
            films: [{genre: `Comedy`}, {genre: `Drama`}]},
          {type: `CHANGE_GENRE`, payload: `Comedy`})
  ).toEqual({genre: `Comedy`, films: [{genre: `Comedy`}, {genre: `Drama`}]}));
});
