import { put, call, takeLatest, select, take } from 'redux-saga/effects';
import getStoryDetailActions, { getStoryDetailTypes } from './actions';
import { getStoryDetails } from '../../api/stories';

//Get book details
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
    const response = yield call(getStoryDetails, id);
    const newResponse = {
      data: response.data,
    };
    yield put(getStoryDetailActions.getBookDetailsSuccess(newResponse));
    yield call(waitFor, (state) => state.storyDetails.getStoryDetailsResponse != null);
  } catch (error) {
    console.log('Error: ' + error);
    yield put(getStoryDetailActions.getStoryDetailsFailure(error));
  }
}

const storyDetailSagas = () => {
  return [takeLatest(getStoryDetailTypes.GET_STORY_DETAILS, getStoryDetailsSaga)];
};
export default storyDetailSagas();
