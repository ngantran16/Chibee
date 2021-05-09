 import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';
 export const WishlistTypes = makeConstantCreator(
       'GET_WISHLIST',
       'GET_WISHLIST_SUCCESS',
       'GET_WISHLIST_FAILURE',
     );
 const getWishlist = (token) => makeActionCreator(WishlistTypes.GET_WISHLIST, { token });
 const getWishlistSuccess = (response) =>
   makeActionCreator(WishlistTypes.GET_WISHLIST_SUCCESS, { response });
 const getWishlistFailure = (error) =>
   makeActionCreator(WishlistTypes.GET_WISHLIST_FAILURE, { error });
 export default {
         getWishlist,
         getWishlistSuccess,
         getWishlistFailure,
     };