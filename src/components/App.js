import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Login from './Login';
import PollView from './PollView';
import Nav from './Nav';
import LeaderBoard from './LeaderBoard';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser, users } = this.props;

    return (
      <Router>
        <Nav />

        <PrivateRoute path="/" authedUser={authedUser} exact component={Home} />
        <PrivateRoute path="/poll/:id" authedUser={authedUser} component={PollView} />
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/board">
          <LeaderBoard users={users} />
        </Route>
        
      </Router>
    )
  }
}

export default connect(({ authedUser, users }) => ({ authedUser, users }))(App);
