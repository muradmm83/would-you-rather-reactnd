import { LOG_IN, LOG_OUT } from '../actions/authedUser';

export default (state = {}, action) => {
    switch (action.type) {
        case LOG_IN:
            return { ...state, ...action.user };

        case LOG_OUT:
            return {}

        default:
            return state;
    }
}