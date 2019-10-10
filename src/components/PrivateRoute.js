import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ children, ...rest }) => {
    const { authedUser } = rest;

    return (
        <Route
            {...rest}
            render={() => authedUser ? children : <Redirect to="/login" />}
        />
    )
}