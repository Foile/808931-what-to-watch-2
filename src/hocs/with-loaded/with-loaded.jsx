import React, {useMemo} from 'react';
import PropTypes from "prop-types";

import withLoading from "react-redux-hoc-loader";

const computeLoaders = (loaders) => {
  const statuses = Object.values(loaders).map((loader) => loader.status);
  return statuses.some((val) => val);
};

const withLoaded = (...loadersNames) => (Component) => {
  const WithLoaded = (props) => {
    const {loaders} = props;

    const isLoading = useMemo(() => computeLoaders(loaders), [loaders]);

    if (isLoading) {
      return <div> Loading... </div>;
    }

    return (
      <Component {...props}/>
    );
  };

  WithLoaded.propTypes = {
    loaders: PropTypes.objectOf(PropTypes.exact({
      start: PropTypes.func.isRequired,
      stop: PropTypes.func.isRequired,
      status: PropTypes.bool.isRequired,
    }))
  };


  return withLoading(...loadersNames)(WithLoaded);
};

export default withLoaded;
