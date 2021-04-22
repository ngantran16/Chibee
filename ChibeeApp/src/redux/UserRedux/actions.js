import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';

export const ProfileTypes = makeConstantCreator('USER_PROFILE', 'USER_PROFILE_SUCCESS');
//PROFILE
const userProfile = (id) => makeActionCreator(ProfileTypes.USER_PROFILE, { id });
const userProfileSuccess = (response) =>
  makeActionCreator(ProfileTypes.USER_PROFILE_SUCCESS, { response });

export default {
  userProfile,
  userProfileSuccess,
};
