import { RECEIVE_USERS, USER_ANSWER, USER_ADD_QUESTION } from '../actions/users';

export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            };

        case USER_ANSWER:
            return {
                ...state,
                [action.user.id]: {
                    ...action.user
                }
            }

        case USER_ADD_QUESTION:
            return {
                ...state,
                [action.userId]: {
                    ...state[action.userId],
                    questions: state[action.userId].questions.concat(action.questionId)
                }
            }

        default:
            return state;
    }
}