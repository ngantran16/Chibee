import { put, call, takeLatest } from 'redux-saga/effects';
import ProfileAction, { ProfileTypes } from './actions';
import {
  getMeApi,
  updateProfile,
  changePassword,
  forgotPassword,
  checkOTP,
  setPassword,
} from '../../api/auth';
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

export function* forgotPasswordSaga({ data, onSuccess, onFail }) {
  try {
    const response = yield call(forgotPassword, data);
    yield put(ProfileAction.forgotPasswordSuccess(response));
    onSuccess && onSuccess();
  } catch (error) {
    yield put(ProfileAction.forgotPasswordFailure(error));
    onFail && onFail();
  }
}

export function* checkOTPSaga({ data, onSuccess, onFail }) {
  try {
    const response = yield call(checkOTP, data);
    yield put(ProfileAction.checkOTPSuccess(response));
    onSuccess && onSuccess();
  } catch (error) {
    yield put(ProfileAction.checkOTPFailure(error));
    onFail && onFail();
  }
}

export function* setPasswordSaga({ data, onSuccess, onFail }) {
  try {
    const response = yield call(setPassword, data);
    yield put(ProfileAction.setPasswordSuccess(response));
    onSuccess && onSuccess();
  } catch (error) {
    yield put(ProfileAction.setPasswordFailure(error));
    onFail && onFail();
  }
}

const GetMeSagas = () => [
  takeLatest(ProfileTypes.USER_PROFILE, getMe),
  takeLatest(ProfileTypes.UPDATE_PROFILE, updateProfileSaga),
  takeLatest(ProfileTypes.CHANGE_PASSWORD, changePasswordSaga),
  takeLatest(ProfileTypes.FORGOT_PASSWORD, forgotPasswordSaga),
  takeLatest(ProfileTypes.CHECK_OTP, checkOTPSaga),
  takeLatest(ProfileTypes.SET_PASSWORD, setPasswordSaga),
];

export default GetMeSagas();
