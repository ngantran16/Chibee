// import { startup } from './redux/AppRedux/actions';
// import { Navigation } from 'react-native-navigation';
// import { registerScreens } from './navigation/RegisterScreens';
// import store from './redux/store';
// // import AsyncStorage from '@react-native-community/async-storage';
// const App = () => {
//   Navigation.events().registerAppLaunchedListener(async () => {
//     try {
//       await registerScreens();
//       await store.dispatch(startup());
//     } catch (error) {
//       console.log('Init unsuccessful', error.message);
//     }
//   });
// };

// export default App;

import { Navigation } from 'react-native-navigation';
import { registerScreens } from './navigation/RegisterScreens';
import NavigationUtils from './navigation/Utils';
import { startup } from './redux/AppRedux/actions';
import store from './redux/store';
import AsyncStorage from '@react-native-community/async-storage';
import TrackPlayer from 'react-native-track-player';
const App = () => {
  Navigation.events().registerAppLaunchedListener(async () => {
    try {
      await registerScreens();
      await TrackPlayer.registerPlaybackService(() => require('../service'));

      const skip = await AsyncStorage.getItem('skip');
      if (JSON.parse(skip)) {
        await store.dispatch(startup());
      } else {
        NavigationUtils.startIntroContent();
      }
    } catch (error) {
      console.log('Init unsuccessful', error.message);
    }
  });
};

export default App;
