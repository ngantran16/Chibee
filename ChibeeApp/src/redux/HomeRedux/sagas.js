import { takeLatest, put, call } from 'redux-saga/effects';
import HomeActions, { HomeTypes } from './actions';
import { NavigationUtils } from '../../navigation';
import { getStoriesApi, getTypesApi, getStoriesByType } from '../../api/stories';

export function* getStoryHomeSaga() {
  try {
    const response = yield call(getStoriesApi);
    yield put(HomeActions.getStoryHomeSuccess(response));
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

export function* getStoryByTypeSaga({ id, onSuccess, onFail }) {
  try {
    const response = yield call(getStoriesByType, id);
    const newResponse = {
      data: response.data,
    };
    yield put(HomeActions.getStoryByTypeSuccess(newResponse));
    onSuccess && onSuccess();
  } catch (error) {
    console.log(error);
    yield put(HomeActions.getStoryByTypeFailure(error));
    onFail && onFail();
  }
}

const homeSagas = () => [
  takeLatest(HomeTypes.GET_STORY_HOME, getStoryHomeSaga),
  takeLatest(HomeTypes.GET_TYPES, getTypesSaga),
  takeLatest(HomeTypes.GET_STORY_BY_TYPE, getStoryByTypeSaga),
];

export default homeSagas();
