import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { HomeTypes } from './actions';

export const INITIAL_STATE = Immutable({
  dataStory: null,
  errorHome: false,
  loadingHome: true,
  dataTypes: null,
  errorTypes: false,
});

export const getStoryHomeSuccess = (state, { response }) =>
  state.merge({
    dataStory: response.data,
    errorHome: false,
    loadingHome: false,
  });
export const getStoryHomeFailure = (state, { error }) =>
  state.merge({ errorHome: error, loadingHome: false });

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
});

export default reducer;
