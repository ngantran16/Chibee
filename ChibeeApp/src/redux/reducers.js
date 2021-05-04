import { combineReducers } from 'redux';
import app from './AppRedux/reducer';
import login from './LoginRedux/reducer';
import home from './HomeRedux/reducer';
import signUp from './SignUpRedux/reducer';
import storyDetails from './DetailRedux/reducer';
import user from './UserRedux/reducer';
import wishlist from './WishlistRedux/reducer';
const rootReducer = combineReducers({
  app,
  login,
  home,
  signUp,
  storyDetails,
  user,
  wishlist,
});
export default rootReducer;
