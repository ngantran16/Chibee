import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';

export const ProfileTypes = makeConstantCreator(
  'USER_PROFILE',
  'USER_PROFILE_SUCCESS',

  'UPDATE_PROFILE',
  'UPDATE_PROFILE_SUCCESS',
  'UPDATE_PROFILE_FAILURE',

  'CHANGE_PASSWORD',
  'CHANGE_PASSWORD_SUCCESS',
  'CHANGE_PASSWORD_FAILURE',

  'FORGOT_PASSWORD',
  'FORGOT_PASSWORD_SUCCESS',
  'FORGOT_PASSWORD_FAILURE',

  'CHECK_OTP',
  'CHECK_OTP_SUCCESS',
  'CHECK_OTP_FAILURE',

  'SET_PASSWORD',
  'SET_PASSWORD_SUCCESS',
  'SET_PASSWORD_FAILURE',
);

const userProfile = (token) => makeActionCreator(ProfileTypes.USER_PROFILE, { token });
const userProfileSuccess = (response) =>
  makeActionCreator(ProfileTypes.USER_PROFILE_SUCCESS, { response });

const updateProfile = (data, onSuccess, onFail) =>
  makeActionCreator(ProfileTypes.UPDATE_PROFILE, { data, onSuccess, onFail });
const updateProfileSuccess = (response) =>
  makeActionCreator(ProfileTypes.UPDATE_PROFILE_SUCCESS, { response });
const updateProfileFailure = (error) =>
  makeActionCreator(ProfileTypes.UPDATE_PROFILE_FAILURE, { error });

const changePassword = (data, onSuccess, onFail) =>
  makeActionCreator(ProfileTypes.CHANGE_PASSWORD, { data, onSuccess, onFail });
const changePasswordSuccess = (response) =>
  makeActionCreator(ProfileTypes.CHANGE_PASSWORD_SUCCESS, { response });
const changePasswordFailure = (error) =>
  makeActionCreator(ProfileTypes.CHANGE_PASSWORD_FAILURE, { error });

const forgotPassword = (data, onSuccess, onFail) =>
  makeActionCreator(ProfileTypes.FORGOT_PASSWORD, { data, onSuccess, onFail });
const forgotPasswordSuccess = (response) =>
  makeActionCreator(ProfileTypes.FORGOT_PASSWORD_SUCCESS, { response });
const forgotPasswordFailure = (error) =>
  makeActionCreator(ProfileTypes.FORGOT_PASSWORD_FAILURE, { error });

const checkOTP = (data, onSuccess, onFail) =>
  makeActionCreator(ProfileTypes.CHECK_OTP, { data, onSuccess, onFail });
const checkOTPSuccess = (response) =>
  makeActionCreator(ProfileTypes.CHECK_OTP_SUCCESS, { response });
const checkOTPFailure = (error) => makeActionCreator(ProfileTypes.CHECK_OTP_FAILURE, { error });

const setPassword = (data, onSuccess, onFail) =>
  makeActionCreator(ProfileTypes.SET_PASSWORD, { data, onSuccess, onFail });
const setPasswordSuccess = (response) =>
  makeActionCreator(ProfileTypes.SET_PASSWORD_SUCCESS, { response });
const setPasswordFailure = (error) =>
  makeActionCreator(ProfileTypes.SET_PASSWORD_FAILURE, { error });

export default {
  userProfile,
  userProfileSuccess,

  updateProfile,
  updateProfileSuccess,
  updateProfileFailure,

  changePassword,
  changePasswordSuccess,
  changePasswordFailure,

  forgotPassword,
  forgotPasswordSuccess,
  forgotPasswordFailure,

  checkOTP,
  checkOTPSuccess,
  checkOTPFailure,

  setPassword,
  setPasswordSuccess,
  setPasswordFailure,
};
