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

export default {
  userProfile,
  userProfileSuccess,

  updateProfile,
  updateProfileSuccess,
  updateProfileFailure,

  changePassword,
  changePasswordSuccess,
  changePasswordFailure,
};
