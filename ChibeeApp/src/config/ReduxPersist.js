import AsyncStorage from '@react-native-community/async-storage';
import {
  seamlessImmutableReconciler,
  seamlessImmutableTransformCreator,
} from 'redux-persist-seamless-immutable';

const transformerConfig = {
  whitelistPerReducer: {
    app: ['isSkip'],
  },
};

const reduxPersist = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  whitelist: ['app', 'login', 'signup'],
  blacklist: [],
  stateReconciler: seamlessImmutableReconciler,
  transforms: [seamlessImmutableTransformCreator(transformerConfig)],
};

export default reduxPersist;
