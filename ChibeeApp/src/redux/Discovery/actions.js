import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';
export const DiscoveryTypes = makeConstantCreator(
  'GET_DISCOVERY',
  'GET_DISCOVERY_SUCCESS',
  'GET_DISCOVERY_FAILURE',

  'GET_DETAIL_DISCOVERY',
  'GET_DETAIL_DISCOVERY_SUCCESS',
  'GET_DETAIL_DISCOVERY_FAILURE',
);
const getDiscovery = () => makeActionCreator(DiscoveryTypes.GET_DISCOVERY);
const getDiscoverySuccess = (response) =>
  makeActionCreator(DiscoveryTypes.GET_DISCOVERY_SUCCESS, { response });
const getDiscoveryFailure = (error) =>
  makeActionCreator(DiscoveryTypes.GET_DISCOVERY_FAILURE, { error });

const getDetailDiscovery = (id, onSuccess, onFail) =>
  makeActionCreator(DiscoveryTypes.GET_DETAIL_DISCOVERY, { id, onSuccess, onFail });
const getDetailDiscoverySuccess = (response) =>
  makeActionCreator(DiscoveryTypes.GET_DETAIL_DISCOVERY_SUCCESS, { response });
const getDetailDiscoveryFailure = (error) =>
  makeActionCreator(DiscoveryTypes.GET_DETAIL_DISCOVERY_FAILURE, { error });

export default {
  getDiscovery,
  getDiscoverySuccess,
  getDiscoveryFailure,

  getDetailDiscovery,
  getDetailDiscoverySuccess,
  getDetailDiscoveryFailure,
};
