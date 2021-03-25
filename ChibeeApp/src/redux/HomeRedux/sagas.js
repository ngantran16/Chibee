import { takeLatest, put, call } from 'redux-saga/effects';
import { HomeTypes, getStoryHomeFailure, getStoryHomeSuccess } from './actions';
import { getStoriesApi } from '../../api/stories';
export function* getStoryHomeSaga() {
  try {
    const response = yield call(getStoriesApi);
    const newResponse = {
      data: response.data,
    };
    // item.authors[0].name
    // item.medias[0]
    // item.title
    // item.totalReview
    // item.overallStarRating
    //item.price
    //item.quantity
    yield put(getStoryHomeSuccess(newResponse));
  } catch (error) {
    console.log(error);
    yield put(getStoryHomeFailure(error));
  }
}

const homeSagas = () => {
  return [takeLatest(HomeTypes.GET_STORY_HOME, getStoryHomeSaga)];
};

export default homeSagas();
