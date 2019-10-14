import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../actions/authedUser';

class Nav extends Component {
    handleLogout = e => {
        e.preventDefault();

        const { dispatch } = this.props;
        dispatch(logout());
    }

    render() {
        const { authedUser } = this.props;

        return (
            <nav>
                <ul className="nav-links">
                    <li>
                        <NavLink to="/" activeClassName="active" exact>Home</NavLink>
                    </li>
                    <li><a href="#">Question</a></li>
                    <li><a href="#">Leader Board</a></li>
                    {authedUser &&
                        (
                            <Fragment>
                                <li className="push">{authedUser.name}</li>
                                <li><img src={authedUser.avatarURL} /></li>
                                <li><span onClick={this.handleLogout}>Logout</span></li>
                            </Fragment>
                        )
                    }

                </ul>
            </nav>
        );
    }
}

export default connect(({ users, authedUser }) => {
    return {
        authedUser: users[authedUser]
    };
})(Nav);