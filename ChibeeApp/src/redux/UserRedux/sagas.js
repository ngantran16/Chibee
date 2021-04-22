import { put, call, takeLatest } from 'redux-saga/effects';
import ProfileAction, { ProfileTypes } from './actions';
import { getMeApi } from '../../api/auth';
export function* getMe({ id }) {
  try {
    const response = yield call(getMeApi, id);
    yield put(ProfileAction.userProfileSuccess(response.data));
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
  }
}
const GetMeSagas = () => [takeLatest(ProfileTypes.USER_PROFILE, getMe)];

export default GetMeSagas();
