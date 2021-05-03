import { takeLatest, select, put, call, take } from 'redux-saga/effects';
import { AppTypes } from './actions';
import http from '../../api/http';
import { NavigationUtils } from '../../navigation';
import AsyncStorage from '@react-native-community/async-storage';
import HomeActions from '../../redux/HomeRedux/actions';
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
    const token = yield AsyncStorage.getItem('token');
    const isSkip = yield select((state) => state.app.isSkip);
    http.setAuthorizationHeader(token);
    //
    if (!isSkip) {
      NavigationUtils.startIntroContent();
    } else {
      console.log('111', token);
      if (token) {
        console.log('====================================');
        console.log('run');
        console.log('====================================');
        //yield put(getStoryHome());
        //yield put(getTypes());
        // yield call(
        //   waitFor,
        //   (state) => state.home.dataStory != null && state.home.dataTypes != null,
        // );
        yield put(HomeActions.getStoryHome());
        yield put(HomeActions.getTypes());
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
