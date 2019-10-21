import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import PollSubmit from './PollSubmit';
import PollStats from './PollStats';

class PollView extends Component {
    render() {
        const { authedUser, question, author } = this.props;

        if (!question) {
            return (<Redirect to="/notfound" />); // will be captured by catch all route
        }

        const answer = authedUser.answers[question.id];

        return (answer ? <PollStats author={author} question={question} selectedOption={answer} /> : <PollSubmit author={author} question={question} />);
    }
}

export default connect(({ authedUser, questions, users }, { match }) => {
    const question = questions[match.params.id];
    const author = question && users[question.author];

    return {
        authedUser: users[authedUser],
        question,
        author
    }
})(PollView);