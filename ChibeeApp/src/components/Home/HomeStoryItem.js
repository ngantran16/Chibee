/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Fonts from '../../themes/Fonts';
import Colors from '../../themes/Colors';
import IconStar from './IconStar';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeStoryItem = (props) => {
  var iconRatings = [];
  for (let i = 0; i < props.item.rating; i++) {
    iconRatings.push(<IconStar color={Colors.primary} />);
  }
  for (let i = 0; i < 5 - props.item.rating; i++) {
    iconRatings.push(<IconStar color={Colors.greyAuthor} />);
  }

  return (
    <TouchableOpacity>
      <View style={[styles.container, props.style && props.style]}>
        <View>
          <Image
            source={props.item.image}
            style={[styles.imgItem, props.style && { width: 130, height: 160 }]}
          />
        </View>
        <Text style={styles.txtNameStory} numberOfLines={2}>
          {props.item.name}
        </Text>
        <View style={styles.containerBottom}>
          <View style={styles.containerRating}>{iconRatings}</View>
          <Text style={styles.txtNumberBuyer}>{props.item.numberBuyer}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeStoryItem;

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
  },
  imgItem: {
    width: 180,
    height: 120,
    borderRadius: 1.5,
    shadowColor: 'rgba(0, 0, 0, 0.22)',
  },
  txtNameStory: {
    fontSize: 14,
    color: Colors.secondary,
    fontFamily: Fonts.type.primary,
    marginTop: 8,
    fontWeight: 'bold',
  },
  txtAuthor: {
    fontSize: 12,
    fontFamily: Fonts.type.primary,
    color: '#555555',
    marginTop: 2.2,
  },
  txtNumberBuyer: {
    fontSize: 9,
    fontFamily: Fonts.type.primary,
    color: '#555555',
    marginLeft: 8,
    marginTop: 2.2,
  },
  containerBottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerRating: {
    flexDirection: 'row',
  },
});
