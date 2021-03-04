import React from 'react';
import { Navigation } from 'react-native-navigation';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Login from '../screens/Authentication/Login';
import Introduction from '../screens/Intro';
import HomePage from '../screens/Home';

const SCREENS_WITH_REDUX = {
  Login,
  Introduction,
  HomePage,
};
const SCREENS = {};

function registerScreens(store, persistor) {
  const PersistProvider = (props) => {
    const { children } = props;
    // Navigation.registerComponent('Drawer', () => RNNDrawer.create(Drawer));
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
