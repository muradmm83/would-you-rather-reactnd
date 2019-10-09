export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const login = user => ({ type: LOG_IN, user });
export const logout = () => ({ type: LOG_OUT });