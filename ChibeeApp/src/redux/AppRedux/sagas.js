import { takeLatest, select, put, call, take } from 'redux-saga/effects';
import { AppTypes } from './actions';
import http from '../../api/http';
import { NavigationUtils } from '../../navigation';
import { getStoryHome, getTypes } from '../HomeRedux/actions';
import { getTypesApi } from '../../api/stories';

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
    // call api
    // set data to reducer
    const { token } = yield select((state) => state.login);
    const { isSkip } = yield select((state) => state.app);
    http.setAuthorizationHeader(token);
    //
    if (!isSkip) {
      NavigationUtils.startIntroContent();
    } else {
      if (token) {
        yield put(getStoryHome());
        yield put(getTypes());
        yield call(
          waitFor,
          (state) => state.home.dataStory != null && state.home.dataTypes != null,
        );
        NavigationUtils.startMainContent();
      } else {
        NavigationUtils.startLoginContent();
      }
    }
  } catch (error) {
    console.log('error startup: ' + error);
    NavigationUtils.startLoginContent();
  }
}

const appSagas = () => {
  return [takeLatest(AppTypes.STARTUP, startupSaga)];
};

export default appSagas();
