import React from "react";
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ loggedIn, path, ...rest }) => {
  return (
    loggedIn
    ?
    <Route
      path={path}
      {...rest}
    />
    :
    <Redirect to ='/'/>
  );
};

export default ProtectedRoute;