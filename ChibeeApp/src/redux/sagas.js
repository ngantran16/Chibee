import { all } from 'redux-saga/effects';
import appSagas from './AppRedux/sagas';
export default function* root() {
  yield all([...appSagas]);
}
