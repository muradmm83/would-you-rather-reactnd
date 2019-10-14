import { LOG_IN, LOG_OUT } from '../actions/authedUser';

export default (state = null, action) => {
    switch (action.type) {
        case LOG_IN:
            return action.userID;

        case LOG_OUT:
            return null;

        default:
            return state;
    }
}