 import { put, call, takeLatest, select, take } from 'redux-saga/effects';
 import WishlistActions, { WishlistTypes } from './actions';
 import { wishlistApi } from '../../api/wishlist';
 function* waitFor(selector) {
   if (yield select(selector)) {
     return;
   } 
   while (true) {
     yield take('*'); 
     if (yield select(selector)) {
       return;
     } 
   }
 }
 export function* getWishlistSaga({ token }) {
   try {
         const response = yield call(wishlistApi, token);
         yield put(WishlistActions.getWishlistSuccess(response));
         yield call(waitFor, (state) => state.wishlist.dataWishlist != null);
       } catch (error) {
             yield put(WishlistActions.getWishlistFailure(error));
           }
         }
 const wishlistSagas = () => {
       return [takeLatest(WishlistTypes.GET_WISHLIST, getWishlistSaga)];
     };
export default wishlistSagas();