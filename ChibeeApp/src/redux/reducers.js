import { combineReducers } from 'redux';
import app from './AppRedux/reducer';
import login from './LoginRedux/reducer';
import home from './HomeRedux/reducer';
import signUp from './SignUpRedux/reducer';
import storyDetails from './DetailRedux/reducer';
import userDetail from './UserRedux/reducer';
const rootReducer = combineReducers({
  app,
  login,
  home,
  signUp,
  storyDetails,
  userDetail,
});
export default rootReducer;
