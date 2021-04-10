import { startup } from './redux/AppRedux/actions';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './navigation/RegisterScreens';
import store from './redux/store';
// import AsyncStorage from '@react-native-community/async-storage';
const App = () => {
  Navigation.events().registerAppLaunchedListener(async () => {
    try {
      await registerScreens();
      await store.dispatch(startup());
    } catch (error) {
      console.log('Init unsuccessful', error.message);
    }
  });
};

export default App;
