import { put, call, takeLatest } from 'redux-saga/effects';
import SignUpActions, { SignUpTypes } from './actions';
import { userSignUpApi } from '../../api/auth';
import { NavigationUtils } from '../../navigation';
export function* userSignUpSaga({ data }) {
  try {
    const response = yield call(userSignUpApi, data);
    console.log(response);
    const newResponse = {
      data: response.data,
      token: response.data.token,
    };
    console.log('Regis', newResponse);
    yield put(SignUpActions.userSignUpSuccess(newResponse));
    NavigationUtils.startLoginContent();
  } catch (error) {
    console.log(error);
    yield put(SignUpActions.userSignUpFailure(error.data.message));
  }
}

const signUpSagas = () => [takeLatest(SignUpTypes.USER_SIGNUP, userSignUpSaga)];

export default signUpSagas();
