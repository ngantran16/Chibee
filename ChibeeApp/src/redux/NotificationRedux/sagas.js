import { put, call, takeLatest, select, take } from 'redux-saga/effects';
import NotificationActions, { NotificationTypes } from './actions';
import { getNotification, getAllUser } from '../../api/notification';

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

export function* getUsersSaga() {
  try {
    const response = yield call(getAllUser);
    yield put(NotificationActions.getUsersSuccess(response));
  } catch (error) {
    yield put(NotificationActions.getUsersFailure(error));
  }
}

const notificationSagas = () => [
  takeLatest(NotificationTypes.GET_NOTIFICATION, getNotificationSaga),
  takeLatest(NotificationTypes.GET_USERS, getUsersSaga),
];

export default notificationSagas();
