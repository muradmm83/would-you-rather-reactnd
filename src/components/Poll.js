import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Poll extends Component {
    viewPool = id => {
        const { history } = this.props;
        history.push(`/poll/${id}`);
    }

    render() {
        const { question, author } = this.props;

        return (
            <div className="card" key={question.id}>
                <div className="title">{author.name} asks</div>

                <div className="body">

                    <img className="avatar"
                        src={author.avatarURL} />


                    <div className="content border-left">
                        <h3>Would you rather ...</h3>

                        <p>
                            {`... ${question.optionOne.text.slice(0, 10)} ...`}
                        </p>

                        <button type="button" onClick={() => this.viewPool(question.id)}>View Poll</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default withRouter(connect(({ users }, { question, history }) => ({ question, author: users[question.author], history }))(Poll));