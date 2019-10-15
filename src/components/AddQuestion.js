import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';

class AddQuestion extends Component {
    render() {
        const { authedUser } = this.props;

        return (
            <div className="card center">
                <span className="title">Create New Question</span>

                <div className="body">
                    <form className="content">
                        <h3>Would you rather ...</h3>
                        <input type="text" placeholder="Enter option one text here" name="optionOne" />
                        <div className="line-label">
                            <span>OR</span>
                            <hr />
                        </div>
                        <input type="text" placeholder="Enter option two text here" name="optionTwo" />
                        <input type="hidden" name="author" value={authedUser} />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(({ authedUser }) => ({ authedUser }))(AddQuestion);