import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';

export const ProfileTypes = makeConstantCreator('USER_PROFILE', 'USER_PROFILE_SUCCESS');

const userProfile = (token) => makeActionCreator(ProfileTypes.USER_PROFILE, { token });
const userProfileSuccess = (response) =>
  makeActionCreator(ProfileTypes.USER_PROFILE_SUCCESS, { response });

export default {
  userProfile,
  userProfileSuccess,
};
