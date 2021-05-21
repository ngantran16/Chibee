import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';

export const HomeTypes = makeConstantCreator(
  'GET_STORY_HOME',
  'GET_STORY_HOME_SUCCESS',
  'GET_STORY_HOME_FAILURE',

  'GET_TYPES',
  'GET_TYPES_SUCCESS',
  'GET_TYPES_FAILURE',

  'GET_STORY_BY_TYPE',
  'GET_STORY_BY_TYPE_SUCCESS',
  'GET_STORY_BY_TYPE_FAILURE',
);

const getStoryHome = () => makeActionCreator(HomeTypes.GET_STORY_HOME);
const getStoryHomeSuccess = (response) =>
  makeActionCreator(HomeTypes.GET_STORY_HOME_SUCCESS, { response });
const getStoryHomeFailure = (error) =>
  makeActionCreator(HomeTypes.GET_STORY_HOME_FAILURE, { error });

const getStoryByType = (id, onSuccess, onFail) =>
  makeActionCreator(HomeTypes.GET_STORY_BY_TYPE, { id, onSuccess, onFail });
const getStoryByTypeSuccess = (response) =>
  makeActionCreator(HomeTypes.GET_STORY_BY_TYPE_SUCCESS, { response });
const getStoryByTypeFailure = (error) =>
  makeActionCreator(HomeTypes.GET_STORY_BY_TYPE_FAILURE, { error });

const getTypes = () => makeActionCreator(HomeTypes.GET_TYPES);
const getTypesSuccess = (response) => makeActionCreator(HomeTypes.GET_TYPES_SUCCESS, { response });
const getTypesFailure = (error) => makeActionCreator(HomeTypes.GET_TYPES_FAILURE, { error });

export default {
  getStoryHome,
  getStoryHomeSuccess,
  getStoryHomeFailure,
  getTypes,
  getTypesSuccess,
  getTypesFailure,
  getStoryByType,
  getStoryByTypeSuccess,
  getStoryByTypeFailure,
};
