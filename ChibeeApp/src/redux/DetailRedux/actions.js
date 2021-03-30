import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';

export const getStoryDetailTypes = makeConstantCreator(
  'GET_STORY_DETAILS',
  'GET_STORY_DETAILS_SUCCESS',
  'GET_STORY_DETAILS_FAILURE',
);

const getStoryDetails = (id) => makeActionCreator(getStoryDetailTypes.GET_STORY_DETAILS, { id });
const getStoryDetailsSuccess = (response) =>
  makeActionCreator(getStoryDetailTypes.GET_STORY_DETAILS_SUCCESS, { response });
const getStoryDetailsFailure = (error) =>
  makeActionCreator(getStoryDetailTypes.GET_STORY_DETAILS_FAILURE, { error });

export default {
  getStoryDetails,
  getStoryDetailsSuccess,
  getStoryDetailsFailure,
};
