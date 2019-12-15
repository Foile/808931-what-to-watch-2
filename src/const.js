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
  TABS: [`Overview`, `Details`, `Reviews`]
};
export default Constants;
