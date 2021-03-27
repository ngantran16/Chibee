import { takeLatest, put, call } from 'redux-saga/effects';
import {
  HomeTypes,
  getStoryHomeFailure,
  getStoryHomeSuccess,
  getTypesSuccess,
  getTypesFailure,
} from './actions';
import { getStoriesApi } from '../../api/stories';
import { getTypesApi } from '../../api/stories';
export function* getStoryHomeSaga() {
  try {
    const response = yield call(getStoriesApi);
    const newResponse = {
      data: response.data,
    };
    yield put(getStoryHomeSuccess(newResponse));
  } catch (error) {
    console.log(error);
    yield put(getStoryHomeFailure(error));
  }
}

export function* getTypesSaga() {
  try {
    const response = yield call(getTypesApi);
    const newResponse = {
      data: response.data,
    };
    yield put(getTypesSuccess(newResponse));
  } catch (error) {
    console.log(error);
    yield put(getTypesFailure(error));
  }
}

const homeSagas = () => [
  takeLatest(HomeTypes.GET_STORY_HOME, getStoryHomeSaga),
  takeLatest(HomeTypes.GET_TYPES, getTypesSaga),
];

export default homeSagas();
