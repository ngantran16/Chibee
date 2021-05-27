import { all } from 'redux-saga/effects';
import appSagas from './AppRedux/sagas';
import loginSagas from './LoginRedux/sagas';
import homeSagas from './HomeRedux/sagas';
import signUpSagas from './SignUpRedux/sagas';
import storyDetailSagas from './DetailRedux/sagas';
import userSaga from './UserRedux/sagas';
import wishlistSagas from './WishlistRedux/sagas';
import commentSagas from './CommentRedux/sagas';
import notificationSagas from './NotificationRedux/sagas';
import discoverySagas from './Discovery/sagas';

export default function* root() {
  yield all([
    ...appSagas,
    ...loginSagas,
    ...homeSagas,
    ...signUpSagas,
    ...storyDetailSagas,
    ...userSaga,
    ...wishlistSagas,
    ...commentSagas,
    ...notificationSagas,
    ...discoverySagas,
  ]);
}
