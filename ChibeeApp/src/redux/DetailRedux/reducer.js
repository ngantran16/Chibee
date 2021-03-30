import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { getStoryDetailTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loadingGetStoryDetails: false,
  errorGetStoryDetails: null,
  getStoryDetailsResponse: null,
});

export const getStoryDetails = (state, { response }) =>
  state.merge({ loadingGetStoryDetails: true, errorGetStoryDetails: null });

export const getStoryDetailsSuccess = (state, { response }) =>
  state.merge({
    loadingGetStoryDetails: false,
    getStoryDetailsResponse: response.data,
  });

export const getStoryDetailsFailure = (state, { error }) =>
  state.merge({
    loadingGetStoryDetails: false,
    errorGetStoryDetails: error,
  });

//Reducer
const reducer = makeReducerCreator(INITIAL_STATE, {
  [getStoryDetailTypes.GET_BOOK_DETAILS]: getStoryDetails,
  [getStoryDetailTypes.GET_BOOK_DETAILS_SUCCESS]: getStoryDetailsSuccess,
  [getStoryDetailTypes.GET_BOOK_DETAILS_FAILURE]: getStoryDetailsFailure,
});

export default reducer;
