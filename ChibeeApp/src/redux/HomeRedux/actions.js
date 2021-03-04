import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';

export const HomeTypes = makeConstantCreator(
  'GET_BOOK_HOME',
  'GET_BOOK_HOME_SUCCESS',
  'GET_BOOK_HOME_FAILURE',
);

export const getBookHome = () => makeActionCreator(HomeTypes.GET_BOOK_HOME);
export const getBookHomeSuccess = (response) =>
  makeActionCreator(HomeTypes.GET_BOOK_HOME_SUCCESS, { response });
export const getBookHomeFailure = (error) =>
  makeActionCreator(HomeTypes.GET_BOOK_HOME_FAILURE, { error });
