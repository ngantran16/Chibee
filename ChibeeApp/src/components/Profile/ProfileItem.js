import React from 'react';
import Moment from 'moment';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const ProfileItem = (props) => {
  Moment.locale('vi');
  return (
    <View>
      <TouchableOpacity style={styles.storyContain}>
        <Image source={{ uri: props.item.image }} style={styles.imgStory} />
        <View style={styles.content}>
          <Text style={styles.nameStory}>{props.item.story_name}</Text>
          <Text style={styles.dateStory}>{Moment(props.item.updated_at).format('DD/MM/YYYY')}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  storyContain: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  imgStory: {
    width: screenWidth * 0.45,
    height: screenHeight * 0.15,
    borderRadius: 10,
  },
  content: {
    marginLeft: screenWidth * 0.05,
    justifyContent: 'center',
  },
  nameStory: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateStory: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'left',
  },
});
