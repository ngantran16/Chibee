/* eslint-disable new-cap */
import Icon from 'react-native-vector-icons/proxibox-pharma';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../themes';
import { Platform } from 'react-native';
import { hasNotch } from 'react-native-device-info';

const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
  'ic-maps-pin-24px': [Platform.OS === 'ios' && hasNotch() ? 22 : 20, '#000'],
  'ic-alarm-notification-24px': [Platform.OS === 'ios' && hasNotch() ? 24 : 22, '#000'],
  'ic-order-cart-24px': [Platform.OS === 'ios' && hasNotch() ? 24 : 22, '#000'],
  'ic-more-setting-24px': [Platform.OS === 'ios' && hasNotch() ? 24 : 22, '#000'],
  'ic-edit': [16, '#000'],
  'ic-delete': [16, '#000'],
  'ic-arrow-left-18px': [24, Colors.neutralGrey],
  'ic-add-line-18px': [24, Colors.neutralGrey],
  'ic-trash': [24, Colors.neutralGrey],
  'ic-bc-plus': [16, '#000'],
  'ic-filter': [16, '#000'],
  'ic-calendar': [16, '#000'],
  'ic-notice': [16, '#000'],
  'ic-client': [16, '#000'],
  'ic-setting': [16, '#000'],
  'ic-email': [16, '#000'],
  'ic-profile': [20, Colors.green],
  'ic-arrow-change': [46, '#000'],
  'ic-contact': [20, Colors.green],
  'ic-pdf-view': [16, '#000'],
  'ic-more-vertical': [20, '#000'],
  'ios-more': [30, '#000', 'ionIcons'],
  'ic-dashboard': [16, '#000'],
  'ic-home-house-1': [Platform.OS === 'ios' && hasNotch() ? 26 : 22, '#000'],
};

const iconsMap = {};
const iconsLoaded = new Promise(resolve => {
  new Promise.all(
    Object.keys(icons).map(iconName => {
      switch (icons[iconName][2]) {
        case 'ionIcons':
          return IonIcons.getImageSource(
            iconName.replace(replaceSuffixPattern, ''),
            icons[iconName][0],
            icons[iconName][1],
          );
        default:
          return Icon.getImageSource(
            iconName.replace(replaceSuffixPattern, ''),
            icons[iconName][0],
            icons[iconName][1],
          );
      }
    }),
  ).then(sources => {
    Object.keys(icons).forEach((iconName, idx) => {
      iconsMap[iconName] = sources[idx];
    });

    // Call resolve (and we are done)
    resolve(true);
  });
});

export { iconsMap, iconsLoaded };
