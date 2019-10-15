import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAddQuestion } from '../actions/questions';

class AddQuestion extends Component {
    state = {
        formSubmitted: false,
        optionOneText: '',
        optionTwoText: ''
    }

    optionOneChange = e => {
        const value = e.target.value;
        this.setState(state => ({ ...state, optionOneText: value }));
    }

    optionTwoChange = e => {
        const value = e.target.value;
        this.setState(state => ({ ...state, optionTwoText: value }));
    }

    onSubmit = e => {
        e.preventDefault();

        const { authedUser, dispatch } = this.props;
        const { optionOneText, optionTwoText } = this.state;

        dispatch(handleAddQuestion(optionOneText, optionTwoText, authedUser));

        this.setState({
            optionOneText: '',
            optionTwoText: '',
            formSubmitted: true
        })
    }

    render() {
        const { optionOneText, optionTwoText, formSubmitted } = this.state;

        if (formSubmitted) {
            return (<Redirect to="/" />);
        }

        return (
            <div className="card center">
                <span className="title">Create New Question</span>

                <div className="body">
                    <form className="content" onSubmit={this.onSubmit}>
                        <h3>Would you rather ...</h3>
                        <input type="text" placeholder="Enter option one text here" name="optionOne" onChange={this.optionOneChange} />
                        <div className="line-label">
                            <span>OR</span>
                            <hr />
                        </div>
                        <input type="text" placeholder="Enter option two text here" name="optionTwo" onChange={this.optionTwoChange} />
                        <button type="submit" disabled={optionOneText.length === 0 || optionTwoText.length === 0}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(({ authedUser }) => ({ authedUser }))(AddQuestion);