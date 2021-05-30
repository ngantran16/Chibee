import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';
export const NotificationTypes = makeConstantCreator(
  'GET_NOTIFICATION',
  'GET_NOTIFICATION_SUCCESS',
  'GET_NOTIFICATION_FAILURE',

  'GET_USERS',
  'GET_USERS_SUCCESS',
  'GET_USERS_FAILURE',
);
const getNotification = (token) => makeActionCreator(NotificationTypes.GET_NOTIFICATION, { token });
const getNotificationSuccess = (response) =>
  makeActionCreator(NotificationTypes.GET_NOTIFICATION_SUCCESS, { response });
const getNotificationFailure = (error) =>
  makeActionCreator(NotificationTypes.GET_NOTIFICATION_FAILURE, { error });

const getUsers = () => makeActionCreator(NotificationTypes.GET_USERS);
const getUsersSuccess = (response) =>
  makeActionCreator(NotificationTypes.GET_USERS_SUCCESS, { response });
const getUsersFailure = (error) =>
  makeActionCreator(NotificationTypes.GET_USERS_FAILURE, { error });

export default {
  getNotification,
  getNotificationSuccess,
  getNotificationFailure,

  getUsers,
  getUsersSuccess,
  getUsersFailure,
};
