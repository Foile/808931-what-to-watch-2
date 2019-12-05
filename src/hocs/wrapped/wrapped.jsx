import React from "react";

const movieCardWrapped = (Component, props) => {
  const MovieCardWrapped = () => (
    <div className="movie-card__wrap">
      <Component {...props} />
    </div>
  );
  return MovieCardWrapped;
};

export default movieCardWrapped;
