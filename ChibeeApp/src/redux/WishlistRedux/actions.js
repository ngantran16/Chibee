import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';
export const WishlistTypes = makeConstantCreator(
  'GET_WISHLIST',
  'GET_WISHLIST_SUCCESS',
  'GET_WISHLIST_FAILURE',
  'ADD_TO_WISHLIST',
  'ADD_TO_WISHLIST_SUCCESS',
  'ADD_TO_WISHLIST_FAILURE',
  'DELETE_STORY_WISHLIST',
  'DELETE_STORY_WISHLIST_SUCCESS',
  'DELETE_STORY_WISHLIST_FAILURE',
);
const getWishlist = (token) => makeActionCreator(WishlistTypes.GET_WISHLIST, { token });
const getWishlistSuccess = (response) =>
  makeActionCreator(WishlistTypes.GET_WISHLIST_SUCCESS, { response });
const getWishlistFailure = (error) =>
  makeActionCreator(WishlistTypes.GET_WISHLIST_FAILURE, { error });

const addToWishlist = (data, onSuccess, onFail) =>
  makeActionCreator(WishlistTypes.ADD_TO_WISHLIST, { data, onSuccess, onFail });
const addToWishlistSuccess = (response) =>
  makeActionCreator(WishlistTypes.ADD_TO_WISHLIST_SUCCESS, { response });
const addToWishlistFailure = (error) =>
  makeActionCreator(WishlistTypes.ADD_TO_WISHLIST_FAILURE, { error });

const deleteStoryWishlist = (data, onSuccess, onFail) =>
  makeActionCreator(WishlistTypes.DELETE_STORY_WISHLIST, { data, onSuccess, onFail });
const deleteStoryWishlistSuccess = (response) =>
  makeActionCreator(WishlistTypes.DELETE_STORY_WISHLIST_SUCCESS, { response });
const deleteStoryWishlistFailure = (error) =>
  makeActionCreator(WishlistTypes.DELETE_STORY_WISHLIST_FAILURE, { error });

export default {
  getWishlist,
  getWishlistSuccess,
  getWishlistFailure,
  addToWishlist,
  addToWishlistSuccess,
  addToWishlistFailure,
  deleteStoryWishlist,
  deleteStoryWishlistSuccess,
  deleteStoryWishlistFailure,
};
