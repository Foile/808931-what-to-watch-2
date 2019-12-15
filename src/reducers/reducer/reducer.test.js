import reducer from './reducer';

describe(`Reducer works correctly`, () => {

  it(`Reducer return default`, () => expect(
      reducer(undefined, {})).toEqual({data: {allFilms: []}, user: {"genre": `All genres`, "isAuthorizationRequired": false, "limit": 8}}));

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
          {
            user: {genre: `All genres`},
            data: {}},
          {type: `CHANGE_GENRE`, payload: `Comedy`})
  ).toEqual({user: {genre: `Comedy`}, data: {}}));

  it(`Reducer REQUIRE_AUTH`, () => expect(
      reducer(
          {
            user: {},
            data: {}},
          {type: `REQUIRE_AUTH`, payload: true})
  ).toEqual({data: {}, user: {isAuthorizationRequired: true}}));

  it(`Reducer Login`, () => expect(
      reducer({data: {}, user: {}}, {type: `LOGIN`, payload: {email: ``, password: ``}})
  ).toEqual({
    data: {},
    user: {login: {email: ``, password: ``}}
  }));

  it(`Reducer Auth`, () => expect(
      reducer({data: {}, user: {}}, {type: `AUTH`, payload: {email: ``, password: ``}})
  ).toEqual({
    data: {},
    user: {auth: {email: ``, password: ``}}
  }));

  it(`Reducer Load More`, () => expect(
      reducer({data: {}, user: {limit: 1}}, {type: `LOAD_MORE`, payload: 3})
  ).toEqual({
    data: {}, user: {limit: 4}
  }));


  it(`Reducer LOAD FAVORITES`, () => expect(
      reducer({data: {}, user: {}}, {type: `LOAD_FAVORITES`, payload: []})
  ).toEqual({
    data: {}, user: {favoriteMovies: []}
  }));

  it(`Reducer get genres`, () => expect(
      reducer({data: {}, user: {}}, {type: `GET_GENRES`, payload: []})
  ).toEqual({
    data: {genres: []},
    user: {}
  }));

  it(`Reducer update comments`, () => expect(
      reducer({data: {}, user: {}}, {type: `UPDATE_COMMENTS`, payload: []})
  ).toEqual({
    data: {comments: []},
    user: {}
  }));


  it(`Reducer load promo`, () => expect(
      reducer({data: {}, user: {}}, {type: `LOAD_PROMO`, payload: {}})
  ).toEqual({
    data: {promo: {}},
    user: {}
  }));

  it(`Reducer update movie`, () => expect(
      reducer({data: {allFilms: [{id: 1, name: `one`}]}, user: {}}, {type: `UPDATE_MOVIE`, payload: {id: 1, name: `other`}})
  ).toEqual({
    data: {allFilms: [{id: 1, name: `other`}]},
    user: {}
  }));


});
