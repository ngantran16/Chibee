import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { NotificationTypes } from './actions';
export const INITIAL_STATE = Immutable({
  dataNotification: null,
  errorNotification: null,
  loadingNotification: false,
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

const reducer = makeReducerCreator(INITIAL_STATE, {
  [NotificationTypes.GET_NOTIFICATION]: getNotification,
  [NotificationTypes.GET_NOTIFICATION_SUCCESS]: getNotificationSuccess,
  [NotificationTypes.GET_NOTIFICATION_FAILURE]: getNotificationFailure,
});
export default reducer;
