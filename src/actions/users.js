export const RECEIVE_USERS = 'RECEIVE_USERS';
export const USER_ANSWER = 'USER_ANSWER';

export const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
});

export const userAnswer = user => ({ type: USER_ANSWER, user });