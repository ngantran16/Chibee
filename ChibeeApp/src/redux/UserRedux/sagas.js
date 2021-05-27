import { put, call, takeLatest } from 'redux-saga/effects';
import ProfileAction, { ProfileTypes } from './actions';
import { getMeApi } from '../../api/auth';
export function* getMe({ token }) {
  try {
    const response = yield call(getMeApi, token);
    const data = response?.data;
    yield put(ProfileAction.userProfileSuccess(data));
  } catch (error) {
    console.log(error);
  }
}
const GetMeSagas = () => [takeLatest(ProfileTypes.USER_PROFILE, getMe)];

export default GetMeSagas();
