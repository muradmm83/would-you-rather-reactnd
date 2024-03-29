import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { getInitialData } from '../api/utils';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';

export const handleInitialData = () => dispatch => {
    dispatch(showLoading());

    getInitialData().then(({ users, questions }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(hideLoading());
    });
}