import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';

export const getStoryDetailTypes = makeConstantCreator(
  'GET_STORY_DETAILS',
  'GET_STORY_DETAILS_SUCCESS',
  'GET_STORY_DETAILS_FAILURE',
  'USER_RATING',
  'USER_RATING_SUCCESS',
  'USER_RATING_FAILURE',
);

const getStoryDetails = (id) => makeActionCreator(getStoryDetailTypes.GET_STORY_DETAILS, { id });
const getStoryDetailsSuccess = (response) =>
  makeActionCreator(getStoryDetailTypes.GET_STORY_DETAILS_SUCCESS, { response });
const getStoryDetailsFailure = (error) =>
  makeActionCreator(getStoryDetailTypes.GET_STORY_DETAILS_FAILURE, { error });

const userRating = (data) => makeActionCreator(getStoryDetailTypes.USER_RATING, { data });
const userRatingSuccess = (response) =>
  makeActionCreator(getStoryDetailTypes.USER_RATING_SUCCESS, { response });
const userRatingFailure = (error) =>
  makeActionCreator(getStoryDetailTypes.USER_RATING_FAILURE, { error });

export default {
  getStoryDetails,
  getStoryDetailsSuccess,
  getStoryDetailsFailure,
  userRating,
  userRatingSuccess,
  userRatingFailure,
};
