import {reducer, ActionCreator} from './reducer';

describe(`Reducer works correctly`, () => {

  it(`Reducer return default`, () => expect(reducer(undefined, {})).toEqual({}));
  it(`Reducer filters movies`, () => expect(reducer({genre: `Comedy`, films: [{genre: `Comedy`}, {genre: `Drama`}]}, {type: `GET_MOVIES`})).toEqual({genre: `Comedy`}));
  it(`Reducer changes genre`, () => expect(reducer({genre: `All genres`, films: [{genre: `Comedy`}, {genre: `Drama`}]}, {type: `CHANGE_GENRE`, payload: `Comedy`})).toEqual([{genre: `Drama`}]));
  it(`Reducer changed to all genres`, () => expect(reducer({genre: `All genres`, films: [{genre: `Comedy`}, {genre: `Drama`}]}, {type: `CHANGE_GENRE`, payload: `All genres`})).toEqual([{genre: `Comedy`}, {genre: `Drama`}]));
});

describe(`ActionCreator works correctly`, () => {

  it(`ActionCreator for increment 0 mistakes`, () => expect(ActionCreator.incrementMistake(
      {artist: `correct`},
      {
        type: `artist`, song: {
          artist: `correct`,
          answers: [
            {
              artist: `correct`
            },
            {
              artist: `incorrect`
            },
          ]}
      }, 0, 5)).toEqual({type: `INCREMENT_MISTAKES`, payload: 0}));

  it(`ActionCreator for increment 1 mistakes`, () => expect(ActionCreator.incrementMistake(
         ({ genre: `correct`,
          films: [
            {
              genre: `Comedy`
            },
            {
              genre: `Drama`
            }]}).toEqual({type: `CHANGE_GENRE`, payload: `Comedy`}))
})
)};
