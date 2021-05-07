import { put, call, takeLatest } from 'redux-saga/effects';
import LoginActions, { LoginTypes } from './actions';
import { startup } from '../AppRedux/actions';
import { userLoginApi } from '../../api/auth';
import AsyncStorage from '@react-native-community/async-storage';
export function* userLoginSaga({ data }) {
  try {
    console.log('Data Saga' + data.email);
    const response = yield call(userLoginApi, data);
    console.log('Response:    ', response.data.access_token);
    const newResponse = {
      data: response.data,
      token: response.data.access_token,
    };
    yield AsyncStorage.setItem('token', response.data.access_token);
    yield put(startup());
    yield put(LoginActions.userLoginSuccess(newResponse));
  } catch (error) {
    console.log(error);
    yield put(LoginActions.userLoginFailure(error));
  }
}
export function* userLogout() {
  console.log('run');
  yield AsyncStorage.clear();
  yield AsyncStorage.setItem('skip', JSON.stringify(true));
  yield put(startup());
}

const loginSagas = () => [
  takeLatest(LoginTypes.USER_LOGIN, userLoginSaga),
  takeLatest(LoginTypes.USER_LOGOUT, userLogout),
];

export default loginSagas();
