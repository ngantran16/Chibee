import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';

export const getWishlistTypes = makeConstantCreator(
  'GET_WISHLIST',
  'GET_WISHLIST_SUCCESS',
  'GET_WISHLIST_FAILURE',
);

const getWishlist = (id) => makeActionCreator(getWishlistTypes.GET_WISHLIST, { id });
const getWishlistSuccess = (response) =>
  makeActionCreator(getWishlistTypes.GET_WISHLIST_SUCCESS, { response });
const getWishlistFailure = (error) =>
  makeActionCreator(getWishlistTypes.GET_WISHLIST_FAILURE, { error });

export default {
    getWishlist,
    getWishlistSuccess,
    getWishlistFailure,
};
