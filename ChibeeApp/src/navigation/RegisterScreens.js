import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from '../redux/store';
// import Screen
import Introduction from '../screens/Intro';
import Login from '../screens/Authentication/Login';
import SignUp from '../screens/Authentication/SignUp';
import ForgotPassword1 from '../screens/Authentication/ForgotPassword1';
import ForgotPassword2 from '../screens/Authentication/ForgotPassword2';
import DetailStory from '../screens/Detail/DetailStory';
import Invite from '../screens/Detail/Invite';
import ListenStory from '../screens/Detail/ListenStory';
import ReadStory from '../screens/Detail/ReadStory';
import WatchVideo from '../screens/Detail/WatchVideo';
import DiscoverDetail from '../screens/Discover/DiscoverDetail';
import Discover from '../screens/Discover';
import HomePage from '../screens/Home';
import ViewAll from '../screens/Home/ViewAll';
import Profile from '../screens/Profile';
import Notifications from '../screens/Profile/Notifications';
import Search from '../screens/Search';
import ChangeInfo from '../screens/Setting/ChangeInfo';
import ChangePassword from '../screens/Setting/ChangePassword';
import PersonalInfo from '../screens/Setting/PersonalInfo';
import Policy from '../screens/Setting/Policy';
import Setting from '../screens/Setting/Profile';
import Support from '../screens/Setting/Support';
import Wishlist from '../screens/Wishlist';

function ReduxProvider(Component) {
  return (props) => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}

export function registerScreens() {
  Navigation.registerComponent(
    'Introduction',
    () => ReduxProvider(Introduction),
    () => Introduction,
  );
  Navigation.registerComponent(
    'Login',
    () => ReduxProvider(Login),
    () => Login,
  );
  Navigation.registerComponent(
    'SignUp',
    () => ReduxProvider(SignUp),
    () => SignUp,
  );
  Navigation.registerComponent(
    'ForgotPassword1',
    () => ReduxProvider(ForgotPassword1),
    () => ForgotPassword1,
  );
  Navigation.registerComponent(
    'ForgotPassword2',
    () => ReduxProvider(ForgotPassword2),
    () => ForgotPassword2,
  );
  Navigation.registerComponent(
    'DetailStory',
    () => ReduxProvider(DetailStory),
    () => DetailStory,
  );
  Navigation.registerComponent(
    'Invite',
    () => ReduxProvider(Invite),
    () => Invite,
  );
  Navigation.registerComponent(
    'ListenStory',
    () => ReduxProvider(ListenStory),
    () => ListenStory,
  );
  Navigation.registerComponent(
    'ReadStory',
    () => ReduxProvider(ReadStory),
    () => ReadStory,
  );
  Navigation.registerComponent(
    'WatchVideo',
    () => ReduxProvider(WatchVideo),
    () => WatchVideo,
  );
  Navigation.registerComponent(
    'ReadStory',
    () => ReduxProvider(ReadStory),
    () => ReadStory,
  );
  Navigation.registerComponent(
    'DiscoverDetail',
    () => ReduxProvider(DiscoverDetail),
    () => DiscoverDetail,
  );
  Navigation.registerComponent(
    'Discover',
    () => ReduxProvider(Discover),
    () => Discover,
  );
  Navigation.registerComponent(
    'HomePage',
    () => ReduxProvider(HomePage),
    () => HomePage,
  );
  Navigation.registerComponent(
    'ViewAll',
    () => ReduxProvider(ViewAll),
    () => ViewAll,
  );
  Navigation.registerComponent(
    'Profile',
    () => ReduxProvider(Profile),
    () => Profile,
  );
  Navigation.registerComponent(
    'Notifications',
    () => ReduxProvider(Notifications),
    () => Notifications,
  );
  Navigation.registerComponent(
    'Search',
    () => ReduxProvider(Search),
    () => Search,
  );
  Navigation.registerComponent(
    'ChangeInfo',
    () => ReduxProvider(ChangeInfo),
    () => ChangeInfo,
  );
  Navigation.registerComponent(
    'ChangePassword',
    () => ReduxProvider(ChangePassword),
    () => ChangePassword,
  );
  Navigation.registerComponent(
    'PersonalInfo',
    () => ReduxProvider(PersonalInfo),
    () => PersonalInfo,
  );
  Navigation.registerComponent(
    'Policy',
    () => ReduxProvider(Policy),
    () => Policy,
  );
  Navigation.registerComponent(
    'Setting',
    () => ReduxProvider(Setting),
    () => Setting,
  );
  Navigation.registerComponent(
    'Support',
    () => ReduxProvider(Support),
    () => Support,
  );
  Navigation.registerComponent(
    'Wishlist',
    () => ReduxProvider(Wishlist),
    () => Wishlist,
  );
}
