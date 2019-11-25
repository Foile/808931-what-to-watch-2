import ActionCreator from "./action-creator";
import {ActionType, convertMoviesData} from "./action-creator";

describe(`ActionCreator works correctly`, () => {

  it(`ActionCreator for change genre`, () => expect(ActionCreator.changeGenre(`Comedy`
  )).toEqual({type: ActionType.CHANGE_GENRE, payload: `Comedy`}));

  it(`ActionCreator for get movies`, () => expect(ActionCreator.getMovies()).toEqual({type: ActionType.GET_MOVIES}));

  it(`ActionCreator for get genres`, () => expect(ActionCreator.getGenres([{genre: `Comedy`}, {genre: `Comedy`}, {genre: `Drama`}]
  )).toEqual({type: ActionType.GET_GENRES, payload: [`All genres`, `Comedy`, `Drama`]}));

  it(`ActionCreator for get required auth`, () => expect(ActionCreator.requireAuthorization()).toEqual({type: ActionType.REQUIRE_AUTH, payload: true}));


  it(`Movies converts correctly`, () => expect(convertMoviesData(
      [{"name": `Once Upon a Time in America`,
        "poster_image": `https://htmlacademy-react-2.appspot.com/wtw/static/film/poster/Once_Upon_a_Time_in_America.jpg`,
        "preview_image": `https://htmlacademy-react-2.appspot.com/wtw/static/film/preview/Once_Upon_a_Time_in_America.jpg`,
        "background_image": `https://htmlacademy-react-2.appspot.com/wtw/static/film/background/ones_upon_a_time_in_america.jpg`,
        "background_color": `#CBAC79`,
        "description": `A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.`,
        "rating": 9.9,
        "scores_count": 276395,
        "director": `Sergio Leone`,
        "starring": [`Robert De Niro`, `James Woods`, `Elizabeth McGovern`],
        "run_time": 229,
        "genre": `Crime`,
        "released": 1984,
        "id": 1, "is_favorite": false,
        "video_link": `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
        "preview_video_link": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`},
      {"name": `Bohemian Rhapsody`, "poster_image": `https://htmlacademy-react-2.appspot.com/wtw/static/film/poster/Bohemian_Rhapsody.jpg`,
        "preview_image": `https://htmlacademy-react-2.appspot.com/wtw/static/film/preview/bohemian_rhapsody.jpg`,
        "background_image": `https://htmlacademy-react-2.appspot.com/wtw/static/film/background/Bohemian_Rhapsody.jpg`,
        "background_color": `#929FA5`,
        "description": `Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet. The film traces the meteoric rise of the band through their iconic songs and revolutionary sound. They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences, shuns Queen in pursuit of his solo career. Having suffered greatly without the collaboration of Queen, Freddie manages to reunite with his bandmates just in time for Live Aid. While bravely facing a recent AIDS diagnosis, Freddie leads the band in one of the greatest performances in the history of rock music. Queen cements a legacy that continues to inspire outsiders, dreamers and music lovers to this day.`,
        "rating": 6.1, "scores_count": 338903, "director": `Bryan Singer`,
        "starring": [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`], "run_time": 134,
        "genre": `Drama`, "released": 2018, "id": 2, "is_favorite": false,
        "video_link": `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
        "preview_video_link": `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`}])).toEqual({}));

});
