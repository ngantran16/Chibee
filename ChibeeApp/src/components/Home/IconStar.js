/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image } from 'react-native';
import Images from '../../themes/Images';
const IconStar = (props) => {
  return <Image source={Images.star} style={{ tintColor: props.color, width: 10, height: 10 }} />;
};
export default IconStar;
