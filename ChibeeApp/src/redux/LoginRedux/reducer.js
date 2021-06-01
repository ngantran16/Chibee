import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { LoginTypes } from '../LoginRedux/actions';

export const INITIAL_STATE = Immutable({
  loadingLogin: null,
  loginResponse: null,
  token: null,
  errorLogin: null,
  status: null,
});
//LOGIN
export const userLogin = (state, { response }) =>
  state.merge({
    loadingLogin: true,
    errorLogin: null,
    token: null,
    loginResponse: null,
  });

export const userLoginSuccess = (state, { response }) =>
  state.merge({
    loadingLogin: false,
    // loginResponse: response,
    token: response,
    errorLogin: null,
  });
export const userLoginFailure = (state, { error }) =>
  state.merge({ loadingLogin: false, errorLogin: error, token: null });
export const userLogout = (state) => state.merge({ token: null, loadingLogin: false });
const reducer = makeReducerCreator(INITIAL_STATE, {
  [LoginTypes.USER_LOGIN]: userLogin,
  [LoginTypes.USER_LOGIN_SUCCESS]: userLoginSuccess,
  [LoginTypes.USER_LOGIN_FAILURE]: userLoginFailure,
  [LoginTypes.USER_LOGOUT]: userLogout,
});

export default reducer;
