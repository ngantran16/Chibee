/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Fonts from '../../themes/Fonts';
import Colors from '../../themes/Colors';
import IconStar from './IconStar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationUtils } from '../../navigation';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const HomeStoryItem = (props) => {
  var iconRatings = [];
  for (let i = 0; i < props.item.rating; i++) {
    iconRatings.push(<IconStar color={Colors.primary} />);
  }
  for (let i = 0; i < 5 - props.item.rating; i++) {
    iconRatings.push(<IconStar color={Colors.greyAuthor} />);
  }

  const onImageClicked = () => {
    NavigationUtils.push({ screen: 'DetailStory', isTopBarEnable: false });
  };
  return (
    <TouchableOpacity onPress={onImageClicked}>
      <View style={[styles.container, props.style && props.style]}>
        <View>
          <Image
            source={{
              uri: props.item.image,
            }}
            style={styles.imgItem}
          />
        </View>
        <Text style={styles.txtNameStory} numberOfLines={2}>
          {props.item.story_name}
        </Text>
        <View style={styles.containerBottom}>
          <View style={styles.containerRating}>{iconRatings}</View>
          <Text style={styles.txtNumberBuyer}>{props.item.number_rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeStoryItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  imgItem: {
    width: (screenWidth - 36) * 0.42,
    height: screenHeight * 0.15,
    borderRadius: 10,
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
