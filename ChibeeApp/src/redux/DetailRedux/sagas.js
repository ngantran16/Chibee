import { put, call, takeLatest, select, take } from 'redux-saga/effects';
import getStoryDetailActions, { getStoryDetailTypes } from './actions';
import { getDetailStories, rating } from '../../api/stories';
import { userRating } from './reducer';

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
export function* getStoryDetailsSaga({ id }) {
  try {
    const response = yield call(getDetailStories, id);
    const data = response?.data?.[0];
    yield put(getStoryDetailActions.getStoryDetailsSuccess(data));
    yield call(waitFor, (state) => state.storyDetails.getStoryDetailsResponse != null);
  } catch (error) {
    console.log('Error: ' + error);
    yield put(getStoryDetailActions.getStoryDetailsFailure(error));
  }
}

export function* userRatingSaga({ data }) {
  try {
    const response = yield call(rating, data);
    yield put(getStoryDetailActions.userRatingSuccess(response));
  } catch (error) {
    console.log('Error: ' + error);
    yield put(getStoryDetailActions.userRatingFailure(error));
  }
}

const storyDetailSagas = () => [
  takeLatest(getStoryDetailTypes.GET_STORY_DETAILS, getStoryDetailsSaga),
  takeLatest(getStoryDetailTypes.USER_RATING, userRatingSaga),
];
export default storyDetailSagas();
