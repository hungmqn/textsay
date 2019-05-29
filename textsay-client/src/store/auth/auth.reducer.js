import { types } from './auth.meta';

const reducer = (state = { isLoading: false }, action = {}) => {
  switch (action.type) {
    case types.LOGIN:
      return { ...state, isLoading: true };
    case types.LOGIN_SUCCESS:
      return { ...state, ...action.payload.data, message: '', isLoading: false };
    case types.LOGIN_ERROR:
      return { ...state, message: action.payload.response.data, isLoading: false};
    case types.REGISTER:
      return { ...state, isLoading: true };
    case types.REGISTER_SUCCESS:
      return { ...state, ...action.payload.data, isLoading: false };
    case types.REGISTER_ERROR:
      return { ...state, message: action.payload.response.data, isLoading: false };
    case types.CHANGE_PASSWORD:
      return { ...state, isLoading: true };
    case types.CHANGE_PASSWORD_SUCESS:
      return { ...state, message: 'Success', isLoading: false };
    case types.CHANGE_PASSWORD_ERROR:
      return { ...state, message: action.payload.response.data.message, isLoading: false };
    case types.LOGOUT:
      return {};
    default:
      return state;
  }
}


export default reducer;