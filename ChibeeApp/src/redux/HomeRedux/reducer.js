import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { HomeTypes } from './actions';

export const INITIAL_STATE = Immutable({
  dataBook: null,
  errorHome: false,
});

export const getBookHomeSuccess = (state, { response }) =>
  state.merge({
    dataBook: response,
    errorHome: false,
  });

export const getBookHomeFailure = (state, { error }) => state.merge({ errorHome: error });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [HomeTypes.GET_BOOK_HOME_SUCCESS]: getBookHomeSuccess,
  [HomeTypes.GET_BOOK_HOME_FAILURE]: getBookHomeFailure,
});

export default reducer;
