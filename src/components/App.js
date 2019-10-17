import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import Login from './Login';
import PollView from './PollView';
import Nav from './Nav';
import LeaderBoard from './LeaderBoard';
import AddQuestion from './AddQuestion';
import NotFound from './NotFound';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser, users } = this.props;

    return (
      <Router>
        <Nav />

        <LoadingBar />

        <Switch>
          <PrivateRoute path="/" authedUser={authedUser} exact component={Home} />
          <PrivateRoute path="/poll/:id" authedUser={authedUser} component={PollView} />
          <PrivateRoute path="/add" authedUser={authedUser} component={AddQuestion} />
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/board">
            <LeaderBoard users={users} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>

      </Router>
    )
  }
}

export default connect(({ authedUser, users }) => ({ authedUser, users }))(App);
