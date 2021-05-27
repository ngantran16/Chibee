import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { DiscoveryTypes } from './actions';
export const INITIAL_STATE = Immutable({
  dataDiscovery: null,
  errorDiscovery: null,
  loadingDiscovery: false,

  detailDiscovery: null,
  errorDetailDiscovery: null,
  loadingDetailDiscovery: false,
});
export const getDiscovery = (state, { response }) =>
  state.merge({
    dataDiscovery: null,
    errorDiscovery: null,
    loadingDiscovery: true,
  });
export const getDiscoverySuccess = (state, { response }) =>
  state.merge({
    dataDiscovery: response.data,
    errorDiscovery: false,
    loadingDiscovery: false,
  });
export const getDiscoveryFailure = (state, { error }) =>
  state.merge({
    errorDiscovery: error,
    loadingDiscovery: false,
  });

export const getDetailDiscovery = (state, { response }) =>
  state.merge({
    detailDiscovery: null,
    errorDetailDiscovery: null,
    loadingDetailDiscovery: true,
  });
export const getDetailDiscoverySuccess = (state, { response }) =>
  state.merge({
    detailDiscovery: response.data,
    errorDetailDiscovery: null,
    loadingDetailDiscovery: false,
  });
export const getDetailDiscoveryFailure = (state, { error }) =>
  state.merge({
    errorDetailDiscovery: error,
    loadingDetailDiscovery: false,
  });

const reducer = makeReducerCreator(INITIAL_STATE, {
  [DiscoveryTypes.GET_DISCOVERY]: getDiscovery,
  [DiscoveryTypes.GET_DISCOVERY_SUCCESS]: getDiscoverySuccess,
  [DiscoveryTypes.GET_DISCOVERY_FAILURE]: getDiscoveryFailure,

  [DiscoveryTypes.GET_DETAIL_DISCOVERY]: getDetailDiscovery,
  [DiscoveryTypes.GET_DETAIL_DISCOVERY_SUCCESS]: getDetailDiscoverySuccess,
  [DiscoveryTypes.GET_DETAIL_DISCOVERY_FAILURE]: getDetailDiscoveryFailure,
});
export default reducer;
