import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { HomeTypes } from './actions';

export const INITIAL_STATE = Immutable({
  dataStory: null,
  errorHome: false,
});

export const getStoryHomeSuccess = (state, { response }) =>
  state.merge({
    dataStory: response.data,
    errorHome: false,
  });

export const getStoryHomeFailure = (state, { error }) => state.merge({ errorHome: error });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [HomeTypes.GET_STORY_HOME_SUCCESS]: getStoryHomeSuccess,
  [HomeTypes.GET_STORY_HOME_FAILURE]: getStoryHomeFailure,
});

export default reducer;
