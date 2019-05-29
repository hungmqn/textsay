import { createAction } from 'redux-actions';

export const types = {
  LOGIN: 'LOGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  SIGNIN: 'SIGNIN',
  SIGNIN_SUCCESS: 'SIGNIN_SUCCESS',
  SIGNIN_ERROR: 'SIGNIN_ERROR',
  REGISTER: 'REGISTER',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_ERROR: 'REGISTER_ERROR',
  CHANGE_PASSWORD: 'CHANGE_PASSWORD',
  CHANGE_PASSWORD_SUCESS: 'CHANGE_PASSWORD_SUCESS',
  CHANGE_PASSWORD_ERROR: 'CHANGE_PASSWORD_ERROR',
  LOGOUT: 'LOGOUT',
}

export const actions = {
  login: createAction(types.LOGIN),
  loginSuccess: createAction(types.LOGIN_SUCCESS),
  loginError: createAction(types.LOGIN_ERROR),
  signin: createAction(types.SIGNIN),
  signinSuccess: createAction(types.SIGNIN_SUCCESS),
  signinError: createAction(types.SIGNIN_ERROR),
  register: createAction(types.REGISTER),
  registerSuccess: createAction(types.REGISTER_SUCCESS),
  registerError: createAction(types.REGISTER_ERROR),
  changePassword: createAction(types.CHANGE_PASSWORD),
  changePasswordSuccess: createAction(types.CHANGE_PASSWORD_SUCESS),
  changePasswordError: createAction(types.CHANGE_PASSWORD_ERROR),
  logout: createAction(types.LOGOUT),
}

export default {
  types: types,
  actions: actions
}