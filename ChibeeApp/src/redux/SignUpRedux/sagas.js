import { put, call, takeLatest } from 'redux-saga/effects';
import SignUpActions, { SignUpTypes } from './actions';
import { startup } from '../AppRedux/actions';
import { userSignUpApi } from '../../api/auth';

export function* userSignUpSaga({ data }) {
  try {
    const response = yield call(userSignUpApi, data);
    console.log(response);
    const newResponse = {
      data: response.data,
    };
    yield put(SignUpActions.userSignUpSuccess(newResponse));
    yield put(startup());
  } catch (error) {
    console.log(error);
    yield put(SignUpActions.userSignUpFailure(error.data.message));
  }
}

const signUpSagas = () => [takeLatest(SignUpTypes.USER_SIGNUP, userSignUpSaga)];

export default signUpSagas();
