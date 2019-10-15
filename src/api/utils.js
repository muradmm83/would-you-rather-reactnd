import {
    _getQuestions,
    _getUsers
} from './_DATA';

export const getInitialData = () => Promise.all([_getUsers(), _getQuestions()])
    .then(([users, questions]) => ({ users, questions }));

export const calculateUserScore = users =>
    Object.keys(users)
        .map(k => ({
            ...users[k],
            answers: Object.keys(users[k].answers).length,
            questions: users[k].questions.length
        }))
        .sort((a, b) => (b.answers + b.questions) - (a.answers + a.questions));
