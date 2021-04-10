import { takeLatest, put, call } from 'redux-saga/effects';
import HomeActions, { HomeTypes } from './actions';
import { NavigationUtils } from '../../navigation';
import { getStoriesApi } from '../../api/stories';
import { getTypesApi } from '../../api/stories';
export function* getStoryHomeSaga() {
  try {
    const response = yield call(getStoriesApi);
    const newResponse = {
      data: response.data,
    };
    yield put(HomeActions.getStoryHomeSuccess(newResponse));
    yield NavigationUtils.startMainContent();
  } catch (error) {
    console.log(error);
    yield put(HomeActions.getStoryHomeFailure(error));
  }
}

export function* getTypesSaga() {
  try {
    const response = yield call(getTypesApi);
    const newResponse = {
      data: response.data,
    };
    yield put(HomeActions.getTypesSuccess(newResponse));
  } catch (error) {
    console.log(error);
    yield put(HomeActions.getTypesFailure(error));
  }
}

const homeSagas = () => [
  takeLatest(HomeTypes.GET_STORY_HOME, getStoryHomeSaga),
  takeLatest(HomeTypes.GET_TYPES, getTypesSaga),
];

export default homeSagas();
