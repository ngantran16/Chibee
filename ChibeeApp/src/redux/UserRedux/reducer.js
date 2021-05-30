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
});
//LOGIN
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

const reducer = makeReducerCreator(INITIAL_STATE, {
  [ProfileTypes.USER_PROFILE]: userProfile,
  [ProfileTypes.USER_PROFILE_SUCCESS]: userProfileSuccess,

  [ProfileTypes.UPDATE_PROFILE]: updateProfile,
  [ProfileTypes.UPDATE_PROFILE_SUCCESS]: updateProfileSuccess,
  [ProfileTypes.UPDATE_PROFILE_FAILURE]: updateProfileFailure,

  [ProfileTypes.CHANGE_PASSWORD]: changePassword,
  [ProfileTypes.CHANGE_PASSWORD_SUCCESS]: changePasswordSuccess,
  [ProfileTypes.CHANGE_PASSWORD_FAILURE]: changePasswordFailure,
});

export default reducer;
