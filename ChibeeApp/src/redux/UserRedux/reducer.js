import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { ProfileTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loading: false,
  user: null,
  type: '',
});
//LOGIN
export const userProfile = (state) =>
  state.merge({
    loading: true,
    user: null,
    type: 'Get me',
  });

export const userProfileSuccess = (state, { response }) => {
  let newState = {
    loading: false,
    user: response,
    type: 'get me success',
  };
  return state.merge(newState);
};

const reducer = makeReducerCreator(INITIAL_STATE, {
  [ProfileTypes.USER_PROFILE]: userProfile,
  [ProfileTypes.USER_PROFILE_SUCCESS]: userProfileSuccess,
});

export default reducer;
