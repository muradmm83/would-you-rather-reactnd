import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ component: Component, ...rest }) => {
    const { authedUser, users } = rest;

    return (
        <Route
            {...rest}
            render={(props) => authedUser ? <Component {...props} users={users} /> : <Redirect to="/login" />}
        />
    )
}