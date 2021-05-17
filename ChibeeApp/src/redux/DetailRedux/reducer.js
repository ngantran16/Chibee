import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { getStoryDetailTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loadingGetStoryDetails: false,
  errorGetStoryDetails: null,
  getStoryDetailsResponse: null,
  type: '',
});

export const getStoryDetails = (state) =>
  state.merge({ 
  loadingGetStoryDetails: true, 
  errorGetStoryDetails: null, 
  type: 'GET DETAIL' 
});

export const getStoryDetailsSuccess = (state, { response }) => {
  let newState = {
    loadingGetStoryDetails: false,
    getStoryDetailsResponse: response,
    type: 'GET DETAIL SUCCESS',
  };
  return state.merge(newState);
};

export const getStoryDetailsFailure = (state, { error }) =>
  state.merge({
    loadingGetStoryDetails: false,
    errorGetStoryDetails: error,
    type: 'GET DETAIL FAILURE',
  });

//Reducer
const reducer = makeReducerCreator(INITIAL_STATE, {
  [getStoryDetailTypes.GET_STORY_DETAILS]: getStoryDetails,
  [getStoryDetailTypes.GET_STORY_DETAILS_SUCCESS]: getStoryDetailsSuccess,
  [getStoryDetailTypes.GET_STORY_DETAILS_FAILURE]: getStoryDetailsFailure,
});

export default reducer;
