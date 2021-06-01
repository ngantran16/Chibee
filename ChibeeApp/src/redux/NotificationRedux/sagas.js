import { put, call, takeLatest, select, take } from 'redux-saga/effects';
import NotificationActions, { NotificationTypes } from './actions';
import { getNotification, getAllUser, inviteUser } from '../../api/notification';

function* waitFor(selector) {
  if (yield select(selector)) {
    return;
  }
  while (true) {
    yield take('*');
    if (yield select(selector)) {
      return;
    }
  }
}
export function* getNotificationSaga({ token }) {
  try {
    const response = yield call(getNotification, token);
    yield put(NotificationActions.getNotificationSuccess(response));
    yield call(waitFor, (state) => state.notification.dataNotification != null);
  } catch (error) {
    yield put(NotificationActions.getNotificationFailure(error));
  }
}

export function* getUsersSaga({ data }) {
  try {
    const response = yield call(getAllUser, data);
    yield put(NotificationActions.getUsersSuccess(response));
  } catch (error) {
    yield put(NotificationActions.getUsersFailure(error));
  }
}

export function* inviteUserSaga({ data, onSuccess, onFail }) {
  try {
    const response = yield call(inviteUser, data);
    yield put(NotificationActions.inviteUserSuccess(response));
    onSuccess && onSuccess();
  } catch (error) {
    yield put(NotificationActions.inviteUserFailure(error));
    onFail && onFail();
  }
}

const notificationSagas = () => [
  takeLatest(NotificationTypes.GET_NOTIFICATION, getNotificationSaga),
  takeLatest(NotificationTypes.GET_USERS, getUsersSaga),
  takeLatest(NotificationTypes.INVITE_USER, inviteUserSaga),
];

export default notificationSagas();
