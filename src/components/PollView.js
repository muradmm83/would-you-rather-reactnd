import React, { Component } from 'react';
import { connect } from 'react-redux';

import PollSubmit from './PollSubmit';
import PollStats from './PollStats';

class PollView extends Component {
    render() {
        const { authedUser, question, author } = this.props;
        const answer = authedUser.answers[question.id];

        return (answer ? <PollStats author={author} question={question} selectedOption={answer} /> : <PollSubmit author={author} question={question} />);
    }
}

export default connect(({ authedUser, questions, users }, { match }) => {
    const question = questions[match.params.id];
    const author = users[question.author];

    return {
        authedUser,
        question,
        author
    }
})(PollView);