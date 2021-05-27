import { put, call, takeLatest, select, take } from 'redux-saga/effects';
import DiscoveryActions, { DiscoveryTypes } from './actions';
import { getDiscovery, getDetailDiscovery } from '../../api/discovery';

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
export function* getDiscoverySaga() {
  try {
    const response = yield call(getDiscovery);
    yield put(DiscoveryActions.getDiscoverySuccess(response));
    yield call(waitFor, (state) => state.discovery.dataDiscovery != null);
  } catch (error) {
    yield put(DiscoveryActions.getDiscoveryFailure(error));
  }
}

export function* getDetailDiscoverySaga({ id, onSuccess, onFail }) {
  try {
    const response = yield call(getDetailDiscovery, id);
    yield put(DiscoveryActions.getDetailDiscoverySuccess(response));
    yield call(waitFor, (state) => state.discovery.detailDiscovery != null);
    onSuccess && onSuccess();
  } catch (error) {
    yield put(DiscoveryActions.getDetailDiscoveryFailure(error));
    onFail && onFail();
  }
}

const discoverySagas = () => [
  takeLatest(DiscoveryTypes.GET_DISCOVERY, getDiscoverySaga),
  takeLatest(DiscoveryTypes.GET_DETAIL_DISCOVERY, getDetailDiscoverySaga),
];

export default discoverySagas();
