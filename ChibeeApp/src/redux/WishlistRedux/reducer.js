 import Immutable from 'seamless-immutable';
 import { makeReducerCreator } from '../../utils/ReduxUtils';
 import {WishlistTypes} from './actions';
 export const INITIAL_STATE = Immutable({
       dataWishlist: null,
       errorWishlist: null,
       loadingWishlist: false,
     });
 export const getWishlist = (state, { response }) =>
   state.merge({
         dataWishlist: null,
         errorWishlist: null,
         loadingWishlist: true,
       });
 export const getWishlistSuccess = (state, { response }) =>
   state.merge({
         dataWishlist: response.data,
         errorWishlist: false,
         loadingWishlist: false,
       });
     export const getWishlistFailure = (state, { error }) =>
       state.merge({ 
             errorWishlist: error, 
             loadingWishlist: false 
         });
 const reducer = makeReducerCreator(INITIAL_STATE, {
         [WishlistTypes.GET_WISHLIST]: getWishlist,
         [WishlistTypes.GET_WISHLIST_SUCCESS]: getWishlistSuccess,
         [WishlistTypes.GET_WISHLIST_FAILURE]: getWishlistFailure,
     });
 export default reducer;