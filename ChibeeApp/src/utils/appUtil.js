import { NativeModules, Platform, Linking } from 'react-native';
import * as RNLocalize from 'react-native-localize';
export function openAppSetting() {
  Platform.select({
    ios: () => {
      Linking.openURL('app-settings://');
    },
    android: () => {
      const { RNUtil } = NativeModules;
      RNUtil.openAppSetting();
    },
  })();
}

export const getDeviceLanguage = () => {
  const languageDevices = RNLocalize.getLocales();
  return languageDevices;
};

export const findBestLanguageForApp = () => {
  const deviceLanguages = getDeviceLanguage();

  const availableLanguage = deviceLanguages.map(item => item.languageCode);
  const bestLanguage = RNLocalize.findBestAvailableLanguage(availableLanguage);
  return bestLanguage;
};
