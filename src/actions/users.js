export const RECEIVE_USERS = 'RECEIVE_USERS';
export const USER_ANSWER = 'USER_ANSWER';
export const USER_ADD_QUESTION = 'USER_ADD_QUESTION';

export const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

export const userAnswer = user => ({ type: USER_ANSWER, user });

export const userAddQuestion = (userId, questionId) => ({
    type: USER_ADD_QUESTION,
    userId,
    questionId
});