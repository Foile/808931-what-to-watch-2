import reducer from './reducer';

describe(`Reducer works correctly`, () => {

  it(`Reducer return default`, () => expect(
      reducer(undefined, {})).toEqual({data: {}, user: {}}));

  it(`Reducer get movies`, () => expect(
      reducer({
        user: {genre: `Comedy`},
        data: {allFilms: [{genre: `Comedy`}, {genre: `Drama`}]}},
      {type: `GET_MOVIES`, payload: [{genre: `Comedy`}, {genre: `Drama`}]})
  ).toEqual({
    user: {genre: `Comedy`},
    data: {allFilms: [{genre: `Comedy`}, {genre: `Drama`}]}
  }));

  it(`Reducer changes genre`, () => expect(
      reducer(
          {user: {genre: `All genres`},
            data: {}},
          {type: `CHANGE_GENRE`, payload: `Comedy`})
  ).toEqual({user: {genre: `Comedy`}, data: {}}));
});
