import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Nav />
                <h1>This is the Home!</h1>
            </Fragment>
        )
    }
}

export default connect(({ authedUser }) => ({ authedUser }))(Home);

