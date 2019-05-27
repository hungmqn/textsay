import { createAction } from 'redux-actions';

export const types = {
  IS_LOADING: 'IS_LOADING',
  LOADING_SUCCESS: 'LOADED_SUCCESS',
  LOADING_ERROR: 'LOADED_ERROR',
}

export const actions = {
  loading: createAction(types.IS_LOADING),
  loadingSuccess: createAction(types.LOADING_SUCCESS),
  loadingError: createAction(types.LOADING_ERROR),
}

export default {
  types: types,
  actions: actions
}