import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';

export const SignUpTypes = makeConstantCreator(
  'USER_SIGNUP',
  'USER_SIGNUP_SUCCESS',
  'USER_SIGNUP_FAILURE',
);
//LOGIN
const userSignUp = (data, onSuccess, onFail) =>
  makeActionCreator(SignUpTypes.USER_SIGNUP, { data, onSuccess, onFail });
const userSignUpSuccess = (response) =>
  makeActionCreator(SignUpTypes.USER_SIGNUP_SUCCESS, { response });
const userSignUpFailure = (error) => makeActionCreator(SignUpTypes.USER_SIGNUP_FAILURE, { error });

export default {
  userSignUp,
  userSignUpSuccess,
  userSignUpFailure,
};
