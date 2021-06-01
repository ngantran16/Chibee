import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';
export const NotificationTypes = makeConstantCreator(
  'GET_NOTIFICATION',
  'GET_NOTIFICATION_SUCCESS',
  'GET_NOTIFICATION_FAILURE',

  'GET_USERS',
  'GET_USERS_SUCCESS',
  'GET_USERS_FAILURE',

  'INVITE_USER',
  'INVITE_USER_SUCCESS',
  'INVITE_USER_FAILURE',
);
const getNotification = (token) => makeActionCreator(NotificationTypes.GET_NOTIFICATION, { token });
const getNotificationSuccess = (response) =>
  makeActionCreator(NotificationTypes.GET_NOTIFICATION_SUCCESS, { response });
const getNotificationFailure = (error) =>
  makeActionCreator(NotificationTypes.GET_NOTIFICATION_FAILURE, { error });

const getUsers = (data) => makeActionCreator(NotificationTypes.GET_USERS, { data });
const getUsersSuccess = (response) =>
  makeActionCreator(NotificationTypes.GET_USERS_SUCCESS, { response });
const getUsersFailure = (error) =>
  makeActionCreator(NotificationTypes.GET_USERS_FAILURE, { error });

const inviteUser = (data, onSuccess, onFail) =>
  makeActionCreator(NotificationTypes.INVITE_USER, { data, onSuccess, onFail });
const inviteUserSuccess = (response) =>
  makeActionCreator(NotificationTypes.INVITE_USER_SUCCESS, { response });
const inviteUserFailure = (error) =>
  makeActionCreator(NotificationTypes.INVITE_USER_FAILURE, { error });

export default {
  getNotification,
  getNotificationSuccess,
  getNotificationFailure,

  getUsers,
  getUsersSuccess,
  getUsersFailure,

  inviteUser,
  inviteUserSuccess,
  inviteUserFailure,
};
