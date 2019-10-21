import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({ component: Component, ...rest }) => {
    const { authedUser, users, location } = rest;

    return (
        <Route
            {...rest}
            render={(props) => authedUser ? <Component {...props} users={users} /> : <Redirect to={
                {
                    pathname: '/login',
                    state: { from: location.pathname }
                }
            } />}
        />
    )
}