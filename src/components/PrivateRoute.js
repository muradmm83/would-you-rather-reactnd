import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ component: Component, ...rest }) => {
    const { authedUser } = rest;

    return (
        <Route
            {...rest}
            render={(props) => authedUser ? <Component {...props} /> : <Redirect to="/login" />}
        />
    )
}