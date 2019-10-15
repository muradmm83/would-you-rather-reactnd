import React, { Fragment } from 'react';
import { calculateUserScore } from '../api/utils';

export default props => {
    const users = calculateUserScore(props.users);
    console.log(users);
    return (
        <Fragment>
            {users.map(u => (
                <div className="card center" key={u.id}>

                    <div class="body">

                        <img src={u.avatarURL} className="avatar" alt={u.name} />

                        <div class="content border-left border-right">
                            <h3>{u.name}</h3>

                            <div className="flex">
                                <span class="flex-grow">Answered question</span>
                                <span>{u.answers}</span>
                            </div>

                            <hr />

                            <div className="flex">
                                <span class="flex-grow">Created question</span>
                                <span>{u.questions}</span>
                            </div>
                        </div>

                        <div className="card">
                            <span className="title">Score</span>

                            <span class="score">{u.answers + u.questions}</span>
                        </div>

                    </div>

                </div>
            ))}
        </Fragment>
    )
}