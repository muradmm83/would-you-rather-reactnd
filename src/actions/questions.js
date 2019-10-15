import { _saveQuestionAnswer, _saveQuestion } from '../api/_DATA';
import { userAnswer, userAddQuestion } from './users';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';

export const receiveQuestions = questions => ({ type: RECEIVE_QUESTIONS, questions });

export const answerQuestion = question => ({
    type: ANSWER_QUESTION,
    question
});

export const handleAnswerQuestion = (authedUser, qid, answer) =>
    dispatch => _saveQuestionAnswer({ authedUser, qid, answer })
        .then(({ question, user }) => {
            dispatch(answerQuestion(question));
            dispatch(userAnswer(user));
        });

const addQuestion = question => ({
    type: ADD_QUESTION,
    question
});

export const handleAddQuestion =
    (optionOneText, optionTwoText, author) =>
        dispatch => _saveQuestion({ optionOneText, optionTwoText, author })
            .then(question => {
                dispatch(addQuestion(question));
                dispatch(userAddQuestion(author, question.id));
            });
