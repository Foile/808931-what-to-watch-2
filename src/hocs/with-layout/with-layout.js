import React from "react";

const withLayout = (Component, props) => {
  const WithLayout = () => (
    <Component {...props} />
  );
  return WithLayout;
};

export default withLayout;
