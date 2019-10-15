import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

const ProgressBar = styled.div`
    position: relative;
    background-color: #0DBA9F;
    height: 100%;
    width: ${({ perc }) => Math.floor(perc * 100)}%;
    ::after {
        content: "${({perc}) => Math.floor(perc * 100)}%";
        position: absolute;
        color: white;
        top: 6%;
        right: 0.2vh;
        font-size: 1.5vh;
    }
`;

const Progress = props => {
    const { perc } = props;
    return (
        <div className="progress">
            <ProgressBar perc={perc} />
        </div>
    )
}

export default props => {
    const { author, question, selectedOption } = props;
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;

    return (
        < div className="card center" >
            <div className="title">{`Asked By ${author.name}`}</div>

            <div className="body">

                <img className="avatar" src={author.avatarURL} />

                <div className="content border-left">
                    <h3>Results:</h3>

                    <div className={classnames({ 'answer': true, 'selected': selectedOption === 'optionOne' })}>
                        {`Would you rather ${question.optionOne.text}`}
                        <Progress perc={optionOneVotes / totalVotes} />
                        <p className="center-label">
                            {`${optionOneVotes} out of ${totalVotes} votes`}
                        </p>
                    </div>

                    <div className={classnames({ 'answer': true, 'selected': selectedOption === 'optionTwo' })}>
                        {`Would you rather ${question.optionTwo.text}`}
                        <Progress perc={optionTwoVotes / totalVotes} />
                        <p className="center-label">
                            {`${optionTwoVotes} out of ${totalVotes} votes`}
                        </p>
                    </div>

                </div>

            </div>
        </div >
    );
}