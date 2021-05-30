import { put, call, takeLatest } from 'redux-saga/effects';
import ProfileAction, { ProfileTypes } from './actions';
import { getMeApi, updateProfile, changePassword } from '../../api/auth';
export function* getMe({ token }) {
  try {
    const response = yield call(getMeApi, token);
    const data = response?.data;
    yield put(ProfileAction.userProfileSuccess(data));
  } catch (error) {
    console.log(error);
  }
}

export function* updateProfileSaga({ data, onSuccess, onFail }) {
  try {
    const response = yield call(updateProfile, data);
    yield put(ProfileAction.updateProfileSuccess(response));
    onSuccess && onSuccess();
  } catch (error) {
    yield put(ProfileAction.updateProfileFailure(error));
    onFail && onFail();
  }
}

export function* changePasswordSaga({ data, onSuccess, onFail }) {
  try {
    const response = yield call(changePassword, data);
    yield put(ProfileAction.changePasswordSuccess(response));
    onSuccess && onSuccess();
  } catch (error) {
    yield put(ProfileAction.changePasswordFailure(error));
    onFail && onFail();
  }
}

const GetMeSagas = () => [
  takeLatest(ProfileTypes.USER_PROFILE, getMe),
  takeLatest(ProfileTypes.UPDATE_PROFILE, updateProfileSaga),
  takeLatest(ProfileTypes.CHANGE_PASSWORD, changePasswordSaga),
];

export default GetMeSagas();
