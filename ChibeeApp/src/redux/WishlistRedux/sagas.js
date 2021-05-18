import { put, call, takeLatest, select, take } from 'redux-saga/effects';
import WishlistActions, { WishlistTypes } from './actions';
import { wishlistApi, addToWishlist } from '../../api/wishlist';
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
export function* getWishlistSaga({ token }) {
  try {
    const response = yield call(wishlistApi, token);
    yield put(WishlistActions.getWishlistSuccess(response));
    yield call(waitFor, (state) => state.wishlist.dataWishlist != null);
  } catch (error) {
    yield put(WishlistActions.getWishlistFailure(error));
  }
}

export function* addToWishlistSaga({ data }) {
  try {
    const response = yield call(addToWishlist, data);
    yield put(WishlistActions.addToWishlistSuccess(response));
  } catch (error) {
    yield put(WishlistActions.addToWishlistFailure(error));
  }
}

const wishlistSagas = () => [
  takeLatest(WishlistTypes.GET_WISHLIST, getWishlistSaga),
  takeLatest(WishlistTypes.ADD_TO_WISHLIST, addToWishlistSaga),
];
export default wishlistSagas();
