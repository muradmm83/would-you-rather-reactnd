export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const login = userID => ({ type: LOG_IN, userID });
export const logout = () => ({ type: LOG_OUT });