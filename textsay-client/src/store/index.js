import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { fork, all } from 'redux-saga/effects';
import authReducer from './auth/auth.reducer';
import authSaga from './auth/auth.saga';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();


const rootReducer = combineReducers({
  auth: authReducer
}); // add more in future

const rootSaga = function* () {
  yield all([
    fork(authSaga), // add more sagas in future
  ])
};


const store = createStore(
  rootReducer,
  applyMiddleware(logger, sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;