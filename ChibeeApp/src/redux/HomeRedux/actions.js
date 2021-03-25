import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';

export const HomeTypes = makeConstantCreator(
  'GET_STORY_HOME',
  'GET_STORY_HOME_SUCCESS',
  'GET_STORY_HOME_FAILURE',
);

export const getStoryHome = () => makeActionCreator(HomeTypes.GET_STORY_HOME);
export const getStoryHomeSuccess = (response) =>
  makeActionCreator(HomeTypes.GET_STORY_HOME_SUCCESS, { response });
export const getStoryHomeFailure = (error) =>
  makeActionCreator(HomeTypes.GET_STORY_HOME_FAILURE, { error });
