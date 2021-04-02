/** @format */

import React from "react";
import { Route } from "react-router-dom";

const MainLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => <Component {...rest} {...matchProps} />}
    />
  );
};

export default MainLayoutRoute;
