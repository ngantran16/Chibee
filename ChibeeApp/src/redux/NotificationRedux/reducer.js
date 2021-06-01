import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { NotificationTypes } from './actions';
export const INITIAL_STATE = Immutable({
  dataNotification: null,
  errorNotification: null,
  loadingNotification: false,

  loadingUsers: false,
  dataUsers: null,
  errorUsers: null,

  loadingInvite: false,
  errorInvite: null,
});
export const getNotification = (state, { response }) =>
  state.merge({
    dataNotification: null,
    errorNotification: null,
    loadingNotification: true,
  });
export const getNotificationSuccess = (state, { response }) =>
  state.merge({
    dataNotification: response.data,
    errorNotification: false,
    loadingNotification: false,
  });
export const getNotificationFailure = (state, { error }) =>
  state.merge({
    errorNotification: error,
    loadingNotification: false,
  });

export const getUsers = (state, { response }) =>
  state.merge({
    loadingUsers: true,
    dataUsers: null,
    errorUsers: null,
  });
export const getUsersSuccess = (state, { response }) =>
  state.merge({
    loadingUsers: false,
    dataUsers: response.data,
    errorUsers: null,
  });
export const getUsersFailure = (state, { error }) =>
  state.merge({
    loadingUsers: false,
    errorUsers: error,
  });

export const inviteUser = (state, { response }) =>
  state.merge({
    loadingInvite: true,
    errorInvite: null,
  });
export const inviteUserSuccess = (state, { response }) =>
  state.merge({
    loadingInvite: false,
    errorInvite: null,
  });
export const inviteUserFailure = (state, { error }) =>
  state.merge({
    loadingInvite: false,
    errorInvite: error,
  });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [NotificationTypes.GET_NOTIFICATION]: getNotification,
  [NotificationTypes.GET_NOTIFICATION_SUCCESS]: getNotificationSuccess,
  [NotificationTypes.GET_NOTIFICATION_FAILURE]: getNotificationFailure,

  [NotificationTypes.GET_USERS]: getUsers,
  [NotificationTypes.GET_USERS_SUCCESS]: getUsersSuccess,
  [NotificationTypes.GET_USERS_FAILURE]: getUsersFailure,

  [NotificationTypes.INVITE_USER]: inviteUser,
  [NotificationTypes.INVITE_USER_SUCCESS]: inviteUserSuccess,
  [NotificationTypes.INVITE_USER_FAILURE]: inviteUserFailure,
});
export default reducer;
