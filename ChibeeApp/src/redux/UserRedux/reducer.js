import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { ProfileTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loading: null,
  type: null,
  user: null,
});
//LOGIN
export const userProfile = (state, { response }) =>
  state.merge({
    loading: true,
    user: null,
    type: 'Get me',
  });

export const userProfileSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    user: response,
    type: 'get me success',
  });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [ProfileTypes.USER_PROFILE]: userProfile,
  [ProfileTypes.USER_PROFILE_SUCCESS]: userProfileSuccess,
});

export default reducer;
