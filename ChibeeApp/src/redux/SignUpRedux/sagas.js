import { put, call, takeLatest } from 'redux-saga/effects';
import SignUpActions, { SignUpTypes } from './actions';
import { userSignUpApi } from '../../api/auth';
import { NavigationUtils } from '../../navigation';
export function* userSignUpSaga({ data, onSuccess, onFail }) {
  try {
    const response = yield call(userSignUpApi, data);
    const newResponse = {
      data: response.data,
      token: response.data.token,
    };
    yield put(SignUpActions.userSignUpSuccess(newResponse));
    onSuccess && onSuccess();
    NavigationUtils.startLoginContent();
  } catch (error) {
    yield put(SignUpActions.userSignUpFailure(error.data.Error));
    onFail && onFail(error.data.Error);
  }
}

const signUpSagas = () => [takeLatest(SignUpTypes.USER_SIGNUP, userSignUpSaga)];

export default signUpSagas();
