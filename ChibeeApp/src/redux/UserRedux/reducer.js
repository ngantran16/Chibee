import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { ProfileTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loading: false,
  user: null,
  type: '',

  loadingUpdateProfile: false,
  errorUpdateProfile: null,

  loadingChangePassword: false,
  errorChangePassword: null,

  loadingForgotPassword: false,
  dataForgotPassword: null,
  errorForgotPassword: null,

  loadingCheckOTP: false,
  dataCheckOTP: null,
  errorCheckOTP: null,

  loadingSetPassword: false,
  errorSetPassword: null,
});

export const userProfile = (state) =>
  state.merge({
    loading: true,
    user: null,
    type: 'Get me',
  });

export const userProfileSuccess = (state, { response }) => {
  let newState = {
    loading: false,
    user: response,
    type: 'get me success',
  };
  return state.merge(newState);
};

export const updateProfile = (state, { response }) =>
  state.merge({
    loadingUpdateProfile: true,
    errorUpdateProfile: null,
  });
export const updateProfileSuccess = (state, { response }) =>
  state.merge({
    loadingUpdateProfile: false,
    errorUpdateProfile: null,
  });
export const updateProfileFailure = (state, { error }) =>
  state.merge({
    loadingUpdateProfile: false,
    errorUpdateProfile: error,
  });

export const changePassword = (state, { response }) =>
  state.merge({
    loadingChangePassword: true,
    errorChangePassword: null,
  });
export const changePasswordSuccess = (state, { response }) =>
  state.merge({
    loadingChangePassword: false,
    errorChangePassword: null,
  });
export const changePasswordFailure = (state, { error }) =>
  state.merge({
    loadingChangePassword: false,
    errorChangePassword: error,
  });

export const forgotPassword = (state, { response }) =>
  state.merge({
    loadingForgotPassword: true,
    dataForgotPassword: null,
    errorForgotPassword: null,
  });
export const forgotPasswordSuccess = (state, { response }) =>
  state.merge({
    loadingForgotPassword: false,
    dataForgotPassword: response.data,
    errorForgotPassword: null,
  });
export const forgotPasswordFailure = (state, { error }) =>
  state.merge({
    loadingForgotPassword: false,
    errorForgotPassword: error,
  });

export const checkOTP = (state, { response }) =>
  state.merge({
    loadingCheckOTP: true,
    dataCheckOTP: null,
    errorCheckOTP: null,
  });
export const checkOTPSuccess = (state, { response }) =>
  state.merge({
    loadingCheckOTP: false,
    dataCheckOTP: response.data,
    errorCheckOTP: null,
  });
export const checkOTPFailure = (state, { error }) =>
  state.merge({
    loadingCheckOTP: false,
    errorCheckOTP: error,
  });

export const setPassword = (state, { response }) =>
  state.merge({
    loadingSetPassword: true,
    errorSetPassword: null,
  });
export const setPasswordSuccess = (state, { response }) =>
  state.merge({
    loadingSetPassword: false,
    errorSetPassword: null,
  });
export const setPasswordFailure = (state, { error }) =>
  state.merge({
    loadingSetPassword: false,
    errorSetPassword: error,
  });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [ProfileTypes.USER_PROFILE]: userProfile,
  [ProfileTypes.USER_PROFILE_SUCCESS]: userProfileSuccess,

  [ProfileTypes.UPDATE_PROFILE]: updateProfile,
  [ProfileTypes.UPDATE_PROFILE_SUCCESS]: updateProfileSuccess,
  [ProfileTypes.UPDATE_PROFILE_FAILURE]: updateProfileFailure,

  [ProfileTypes.CHANGE_PASSWORD]: changePassword,
  [ProfileTypes.CHANGE_PASSWORD_SUCCESS]: changePasswordSuccess,
  [ProfileTypes.CHANGE_PASSWORD_FAILURE]: changePasswordFailure,

  [ProfileTypes.FORGOT_PASSWORD]: forgotPassword,
  [ProfileTypes.FORGOT_PASSWORD_SUCCESS]: forgotPasswordSuccess,
  [ProfileTypes.FORGOT_PASSWORD_FAILURE]: forgotPasswordFailure,

  [ProfileTypes.CHECK_OTP]: checkOTP,
  [ProfileTypes.CHECK_OTP_SUCCESS]: checkOTPSuccess,
  [ProfileTypes.CHECK_OTP_FAILURE]: checkOTPFailure,

  [ProfileTypes.SET_PASSWORD]: setPassword,
  [ProfileTypes.SET_PASSWORD_SUCCESS]: setPasswordSuccess,
  [ProfileTypes.SET_PASSWORD_FAILURE]: setPasswordFailure,
});

export default reducer;
