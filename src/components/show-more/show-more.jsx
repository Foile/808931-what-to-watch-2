import React from 'react';
import PropTypes from "prop-types";

const ShowMore = (props) => {
  const {onClick} = props;
  return <button
    className="catalog__button"
    type="button"
    onClick={onClick}
  >Show more</button>;
};

ShowMore.defaultProps = {
  onClick: () => {}
};

ShowMore.propTypes = {
  onClick: PropTypes.func,
};

export default ShowMore;
