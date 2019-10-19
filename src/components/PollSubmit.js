import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { handleAnswerQuestion } from '../actions/questions';

/* ToDo -- handle submit and probably change functional to class component */

class PollSubmit extends Component {
    state = {
        submitComplete: false,
        selectedAnswer: null
    }

    onSubmit = e => {
        e.preventDefault();

        const { dispatch, authedUser, question } = this.props;
        const { selectedAnswer } = this.state;

        dispatch(handleAnswerQuestion(authedUser.id, question.id, selectedAnswer));

        this.setState({
            submitComplete: true,
            selectedAnswer: null
        });
    }

    onChange = e => {
        this.setState({
            submitComplete: false,
            selectedAnswer: e.target.value
        });
    }

    render() {
        const { author, question } = this.props;
        const { selectedAnswer, submitComplete } = this.state;

        if (submitComplete) {
            return (<Redirect to={`/questions/${question.id}`} />);
        }

        return (
            <div className="card center">
                <div className="title">{`${author.name} asks:`}</div>

                <div className="body">

                    <img className="avatar" src={author.avatarURL} />

                    <div className="content border-left">
                        <h3>Would you rather ...</h3>
                        <form onSubmit={this.onSubmit}>
                            <p>
                                <input type="radio" name="answer" value="optionOne" onChange={this.onChange} /> {question.optionOne.text}
                            </p>
                            <p>
                                <input type="radio" name="answer" value="optionTwo" onChange={this.onChange} /> {question.optionTwo.text}
                            </p>

                            <button type="submit" disabled={selectedAnswer === null}>Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

export default connect(({ authedUser, users }) => ({ authedUser: users[authedUser] }))(PollSubmit);