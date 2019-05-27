import { types } from './loading.meta';

const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case types.IS_LOADING:
      return { ...state, isLoading: true };
    case types.LOADING_SUCCESS:
      return { ...state, isLoading: false };
    case types.LOADING_ERROR:
      return { ...state, isLoading: false, errorMessage: action.payload };
    default:
      return state;
  }
}


export default reducer;