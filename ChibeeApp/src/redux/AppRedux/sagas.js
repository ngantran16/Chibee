import { takeLatest, select, put, call, take } from 'redux-saga/effects';
import { AppTypes } from './actions';
import http from '../../api/http';
import { NavigationUtils } from '../../navigation';
import AsyncStorage from '@react-native-community/async-storage';
import HomeActions from '../../redux/HomeRedux/actions';
import LoginActions from '../LoginRedux/actions';
function* waitFor(selector) {
  if (yield select(selector)) {
    return;
  } // (1)

  while (true) {
    yield take('*'); // (1a)
    if (yield select(selector)) {
      return;
    } // (1b)
  }
}

export function* startupSaga() {
  try {
    const storeToken = yield AsyncStorage.getItem('token');
    let token = null;
    if (storeToken) {
      token = storeToken;
    } else {
      token = yield select((state) => state.login.token);
    }

    http.setAuthorizationHeader(token);
    if (token) {
      yield put(HomeActions.getStoryHome());
      yield put(HomeActions.getTypes());
      yield put(LoginActions.userLoginSuccess(token));
      NavigationUtils.startMainContent();
    } else {
      NavigationUtils.startLoginContent();
    }
  } catch (error) {
    NavigationUtils.startLoginContent();
  }
}
export function* makeSkipIntroSagas() {
  yield AsyncStorage.setItem('skip', JSON.stringify(true));
  yield startupSaga();
}

const appSagas = () => {
  return [
    takeLatest(AppTypes.STARTUP, startupSaga),
    takeLatest(AppTypes.MARK_SKIP_INTRO, makeSkipIntroSagas),
  ];
};

export default appSagas();
