import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/authedUser';


class Login extends Component {
    state = {
        selectedUser: '',
        redirect: false,
    }

    handleSelect = e => {
        const selectedUser = e.target.value;

        this.setState({ selectedUser });
    }

    handleSubmit = e => {
        e.preventDefault();

        const { dispatch } = this.props;
        const { selectedUser } = this.state;

        dispatch(login(selectedUser));

        this.setState({
            selectedUser,
            redirect: true
        });
    }

    render() {
        const { users } = this.props;
        const { selectedUser, redirect } = this.state;

        if (redirect) {
            return (<Redirect to="/" />);
        }

        return (
            <form className="panel" onSubmit={this.handleSubmit}>
                <div className="title">
                    <h3>Welcom to the Would You Rather App!</h3>
                    <p>Please sign in to continue</p>
                </div>

                <div className="body">

                    <h3 className="sub-title">Login</h3>

                    <select onChange={this.handleSelect}>
                        <option value="" disabled selected>Select your option</option>
                        {Object.keys(users).map(k => <option key={k} value={users[k].id}>{users[k].name}</option>)}
                    </select>

                    <button type="submit" className="alternate" disabled={selectedUser === ''}>Login</button>
                </div>

            </form>
        )
    }
}

export default connect(({ users }) => ({ users }))(Login);