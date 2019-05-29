import { call, put, takeEvery } from 'redux-saga/effects';
import { actions } from './auth.meta';
// import { types, actions } from './auth.meta';
import Api from '../../utils/Api';

const login = async (payload) => {
   return await Api.post(`auth/login`, payload);
};

const handleLogin = function* (action) {
   try {
      const { payload } = action;
      const result = yield call(login, payload);
      Api.defaults.headers = {
         Authorization: `Bearer ${result.data.token}`
      }
      yield put(actions.signinSuccess(result));
      // yield put(types.LOGIN_SUCCESS, result);
   } catch (error) {
      yield put(actions.signinError(error));
      // yield put(types.LOGIN_ERROR, error);
   }
}

const signin = async (payload) => { // Use JWT Token for authentication
   return await Api.post(`auth/signin`, payload);
};

const handleSignin = function* (action) {
   try {
      const { payload } = action;
      const result = yield call(signin, payload);
      Api.defaults.headers = {
         Authorization: `Bearer ${result.data.token}`
      }
      console.log(result)
      yield put(actions.loginSuccess(result));
      // yield put(types.LOGIN_SUCCESS, result);
   } catch (error) {
     console.log(actions)
      yield put(actions.loginError(error));
      // yield put(types.LOGIN_ERROR, error);
   }
}

const register = async (payload) => {
   return await Api.post(`auth/register`, payload)
}

const handleRegister = function* (action) {
   try {
      const { payload } = action;
      const result = yield call(register, payload);
      yield put(actions.registerSuccess(result));
   } catch (error) {
      yield put(actions.registerError(error));
   }
}

const changePassword = async (payload) => {
   return await Api.post(`api/1/user/update/${payload.id}`, payload)
}

const handleChangePassword = function* (action) {
   try {
      const { payload } = action;
      const result = yield call(changePassword, payload);
      yield put(actions.changePasswordSuccess(result));
   } catch (error) {
      yield put(actions.changePasswordError(error));
   }
}

export default function* saga() {
   yield takeEvery('LOGIN', handleLogin); // for multiple concurrent request
   yield takeEvery('SIGNIN', handleSignin);
   // yield takeLatest('LOGIN', handleLogin); // take only latest request at any moment
   yield takeEvery('REGISTER', handleRegister);
   yield takeEvery('CHANGE_PASSWORD', handleChangePassword);
}

export { handleLogin };
export { handleRegister };

export { login };
export { register };