import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import Home from './Home';
import Login from './Login';
import PrivateRoute from './PrivateRoute';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { authedUser } = this.props;
    
    return (
      <Router>
        <PrivateRoute path="/" authedUser={authedUser} exact>
          <Home />
        </PrivateRoute>
        <Route path="/login" component={Login} />
      </Router>
    )
  }
}

export default connect(({ authedUser }) => ({ authedUser }))(App);
