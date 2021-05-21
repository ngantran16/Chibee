import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { HomeTypes } from './actions';

export const INITIAL_STATE = Immutable({
  dataStory: null,
  errorHome: false,
  loadingHome: true,
  dataTypes: null,
  errorTypes: false,
  dataStoryByType: null,
  loadingStoryByType: false,
  errorStoryByType: null,
});

export const getStoryHomeSuccess = (state, { response }) =>
  state.merge({
    dataStory: response.data,
    errorHome: false,
    loadingHome: false,
  });
export const getStoryHomeFailure = (state, { error }) =>
  state.merge({ errorHome: error, loadingHome: false });

export const getStoryByTypeSuccess = (state, { response }) =>
  state.merge({
    dataStoryByType: response.data,
    errorStoryByType: false,
    loadingStoryByType: false,
  });
export const getStoryByTypeFailure = (state, { error }) =>
  state.merge({ errorStoryByType: error, loadingStoryByType: false });

export const getTypesSuccess = (state, { response }) =>
  state.merge({
    dataTypes: response.data,
    errorTypes: false,
  });
export const getTypesFailure = (state, { error }) =>
  state.merge({
    errorTypes: error,
  });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [HomeTypes.GET_STORY_HOME_SUCCESS]: getStoryHomeSuccess,
  [HomeTypes.GET_STORY_HOME_FAILURE]: getStoryHomeFailure,
  [HomeTypes.GET_TYPES_SUCCESS]: getTypesSuccess,
  [HomeTypes.GET_TYPES_FAILURE]: getTypesFailure,
  [HomeTypes.GET_STORY_BY_TYPE_SUCCESS]: getStoryByTypeSuccess,
  [HomeTypes.GET_STORY_BY_TYPE_FAILURE]: getStoryByTypeFailure,
});

export default reducer;
