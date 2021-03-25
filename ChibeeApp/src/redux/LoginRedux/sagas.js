import { put, call, takeLatest, select } from 'redux-saga/effects';
import LoginActions, { LoginTypes } from './actions';
import { startup } from '../AppRedux/actions';
import { userLoginApi } from '../../api/auth';

export function* userLoginSaga({ data }) {
  try {
    console.log('Data Saga' + data.email);
    const response = yield call(userLoginApi, data);
    console.log('Response:    ', response.data.access_token);
    const newResponse = {
      data: response.data,
      token: response.data.access_token,
    };
    yield put(LoginActions.userLoginSuccess(newResponse));
    yield put(startup());
  } catch (error) {
    console.log(error);
    yield put(LoginActions.userLoginFailure(error));
  }
}
export function* userLogoutSaga() {
  yield put(startup());
}
const loginSagas = () => [
  takeLatest(LoginTypes.USER_LOGIN, userLoginSaga),
  takeLatest(LoginTypes.USER_LOGOUT, userLogoutSaga),
];

export default loginSagas();
