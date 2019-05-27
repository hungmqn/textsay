import { call, put, takeEvery } from 'redux-saga/effects';
import { actions } from './auth.meta';
// import { types, actions } from './auth.meta';
import Api from '../../utils/Api';

const login = async (payload) => {
   return await Api.post(`auth/login`, payload);
};

const register = async (payload) => {
   return await Api.post(`auth/register`, payload)
}

const handleLogin = function* (action) {
   try {
      const { payload } = action;
      const result = yield call(login, payload);
      yield put(actions.loginSuccess(result));
      // yield put(types.LOGIN_SUCCESS, result);
   } catch (error) {
     console.log(actions)
      yield put(actions.loginError(error));
      // yield put(types.LOGIN_ERROR, error);
   }
}

const handleRegister = function* (action) {
   try {
      const { payload } = action;
      payload['role'] = 2;
      const result = yield call(register, payload);
      yield put(actions.registerSuccess(result));
   } catch (error) {
      yield put(actions.registerError(error));
   }
}

export default function* saga() {
   yield takeEvery('LOGIN', handleLogin); // for multiple concurrent request
   // yield takeLatest('LOGIN', handleLogin); // take only latest request at any moment
   yield takeEvery('REGISTER', handleRegister);
}

export { handleLogin };
export { handleRegister };

export { login };
export { register };