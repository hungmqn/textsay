import { createAction } from 'redux-actions';

export const types = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  REGISTER: 'REGISTER',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_ERROR: 'REGISTER_ERROR',
  LOGOUT: 'LOGOUT',
}

export const actions = {
  login: createAction(types.LOGIN),
  loginSuccess: createAction(types.LOGIN_SUCCESS),
  loginError: createAction(types.LOGIN_ERROR),
  register: createAction(types.REGISTER),
  registerSuccess: createAction(types.REGISTER_SUCCESS),
  registerError: createAction(types.REGISTER_ERROR),
  logout: createAction(types.LOGOUT),
}

export default {
  types: types,
  actions: actions
}