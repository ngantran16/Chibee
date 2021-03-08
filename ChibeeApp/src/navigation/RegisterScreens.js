import React from 'react';
import { Navigation } from 'react-native-navigation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Login from '../screens/Authentication/Login';
import Introduction from '../screens/Intro';
import HomePage from '../screens/Home';
import SignUp from '../screens/Authentication/SignUp';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import Wishlist from '../screens/Wishlist';
import Discover from '../screens/Discover';
import DiscoverDetail from '../screens/Discover/DiscoverDetail';
import ViewAll from '../screens/Home/ViewAll';

const SCREENS_WITH_REDUX = {
  Login,
  Introduction,
  HomePage,
  SignUp,
  Search,
  Profile,
  Wishlist,
  Discover,
  DiscoverDetail,
  ViewAll,
};
const SCREENS = {};

function registerScreens(store, persistor) {
  const PersistProvider = (props) => {
    const { children } = props;
    return (
      <Provider {...props}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    );
  };

  Object.keys(SCREENS_WITH_REDUX).map((screenName) => {
    Navigation.registerComponentWithRedux(
      screenName,
      () => gestureHandlerRootHOC(SCREENS_WITH_REDUX[screenName]),
      PersistProvider,
      store,
    );
  });

  Object.keys(SCREENS).map((screenName) => {
    Navigation.registerComponent(screenName, () => SCREENS[screenName]);
  });
}

export default registerScreens;
