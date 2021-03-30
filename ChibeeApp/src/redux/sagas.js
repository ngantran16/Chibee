import { all } from 'redux-saga/effects';
import appSagas from './AppRedux/sagas';
import loginSagas from './LoginRedux/sagas';
import homeSagas from './HomeRedux/sagas';
import signUpSagas from './SignUpRedux/sagas';
import storyDetailSagas from './DetailRedux/sagas';
export default function* root() {
  yield all([...appSagas, ...loginSagas, ...homeSagas, ...signUpSagas, ...storyDetailSagas]);
}
