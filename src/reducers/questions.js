import { RECEIVE_QUESTIONS, ANSWER_QUESTION, ADD_QUESTION } from '../actions/questions';

export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return { ...state, ...action.questions };

        case ANSWER_QUESTION:
            return {
                ...state,
                [action.question.id]: {
                    ...action.question
                }
            }

        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: {
                    ...action.question
                }
            }

        default:
            return state
    }
}