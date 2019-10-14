import { RECEIVE_USERS, USER_ANSWER } from '../actions/users';

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

        default:
            return state;
    }
}