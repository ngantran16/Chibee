import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { getStoryDetailTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loadingGetStoryDetails: false,
  errorGetStoryDetails: null,
  getStoryDetailsResponse: null,
  loadingRating: false,
  errorRating: null,
  type: '',
});

export const getStoryDetails = (state) =>
  state.merge({
    loadingGetStoryDetails: true,
    errorGetStoryDetails: null,
    type: 'GET DETAIL',
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

export const userRating = (state) =>
  state.merge({
    loadingRating: true,
    errorRating: null,
  });

export const userRatingSuccess = (state, { response }) => {
  state.merge({
    loadingRating: false,
    errorRating: null,
  });
};

export const userRatingFailure = (state, { error }) =>
  state.merge({
    loadingRating: false,
    errorRating: error,
  });

//Reducer
const reducer = makeReducerCreator(INITIAL_STATE, {
  [getStoryDetailTypes.GET_STORY_DETAILS]: getStoryDetails,
  [getStoryDetailTypes.GET_STORY_DETAILS_SUCCESS]: getStoryDetailsSuccess,
  [getStoryDetailTypes.GET_STORY_DETAILS_FAILURE]: getStoryDetailsFailure,
  [getStoryDetailTypes.USER_RATING]: userRating,
  [getStoryDetailTypes.USER_RATING_SUCCESS]: userRatingSuccess,
  [getStoryDetailTypes.USER_RATING_FAILURE]: userRatingFailure,
});

export default reducer;
