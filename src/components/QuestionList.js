import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Poll from './Poll';

class QuestionList extends Component {
    render() {
        const { questions } = this.props;

        return (
            <Fragment>
                {questions.map(q => <Poll key={q.id} question={q} />)}
            </Fragment>
        );
    }
}

export default connect(({ authedUser, users, questions }, { filter }) => {
    let keys = Object.keys(questions);
    const answers = Object.keys(users[authedUser].answers);

    if (filter === 'answered') {
        keys = keys.filter(k => answers.includes(k));
    }
    else {
        keys = keys.filter(k => !answers.includes(k));
    }

    questions = keys.map(k => questions[k]).sort((a, b) => b.timestamp - a.timestamp);

    return {
        questions
    };
})(QuestionList);
