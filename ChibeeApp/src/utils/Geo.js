import { Platform, Linking, ActionSheetIOS } from 'react-native';
import * as geolib from 'geolib';

import { isEmpty } from 'lodash';

export const getDistance = (original, destination) => {
  try {
    if (isEmpty(original) || isEmpty(destination)) {
      return 1;
    }
    return geolib.convertDistance(
      geolib.getDistance(
        {
          latitude: original.latitude || original.lat,
          longitude: original.longitude || original.lon,
        },
        {
          latitude: destination.latitude || destination.lat,
          longitude: destination.longitude || destination.lon,
        },
      ),
      'km',
    );
  } catch (e) {
    return 1;
  }
};

const BUTTONS = ['Open Apple Map', 'Open Google Map', 'Cancel'];
const CANCEL_INDEX = 2;

function directionsURL(address, index) {
  let url;
  if (Platform.OS === 'ios') {
    url =
      index === 0
        ? `http://maps.apple.com/?daddr=${address}&dirflg=d`
        : `http://maps.google.com/?daddr=${address}`;
  }
  if (Platform.OS === 'android') {
    url = `http://maps.google.com/?daddr=${address}`;
  }

  return url;
}

export function openDirectionUtil(address) {
  if (Platform.OS === 'ios') {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
      },
      (index) => {
        if (index < 2) {
          Linking.openURL(directionsURL(address, index));
        }
      },
    );
  }
  if (Platform.OS === 'android') {
    Linking.openURL(directionsURL(address));
  }
}
