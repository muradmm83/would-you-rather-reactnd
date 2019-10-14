import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Nav from './Nav';
import QuestionList from './QuestionList';

class Home extends Component {


    state = {
        selection: 'unanswered'
    }

    setTabSelection = (selection) => this.setState({ selection });

    render() {
        const { selection } = this.state;

        return (
            <Fragment>

                <div className="panel">
                    <div className="tab">
                        <span className={classNames({ 'tab-item': true, 'active': selection === 'unanswered' })} onClick={() => this.setTabSelection('unanswered')}>Unasnwered Questions</span>
                        <span className={classNames({ 'tab-item': true, 'active': selection === 'answered' })} onClick={() => this.setTabSelection('answered')}>Answered Questions</span>
                    </div>

                    <QuestionList filter={selection} />

                </div>

            </Fragment>
        )
    }
}

export default connect()(Home);

