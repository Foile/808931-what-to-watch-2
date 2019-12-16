const Constants = {
  MOVIE_PREVIEW_DELAY: 1000,
  FILMS_LIMIT_DEF: 8,
  FILMS_LIMIT_RATE: 20,
  MORE_LIKE_LIMIT: 4,
  DEFAULT_GENRE: `All genres`,
  USER_RATINGS: [
    {title: `Bad`, min: 0},
    {title: `Normal`, min: 3},
    {title: `Good`, min: 5},
    {title: `Very good`, min: 8},
    {title: `Awesome`, min: 10},
  ],
  STARS: [1, 2, 3, 4, 5],
  DEF_STAR: 3,
  TABS: [`Overview`, `Details`, `Reviews`],
  DEF_COLOR: `#888888`
};

export default Constants;

export const EMAIL_REGEX = RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
export const SNAKE_REGEX = RegExp(/([-_]\w)/g);

export const MovieCardConstants = {
  WIDTH: `280`,
  HEIGHT: `180`
};

export const UserBlockConstants = {
  WIDTH: `80`,
  HEIGHT: `80`
};
export const MovieCardInfoConstants = {
  WIDTH: `218`,
  HEIGHT: `327`
};

export const MoviePlayerConstants = {
  WIDTH: `100%`,
  HEIGHT: `100%`
};
