import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const ListItem = (props) => {
  return (
    <View>
      <TouchableOpacity style={styles.storyContain}>
        <Image source={{ uri: props.item.image }} style={styles.imgStory} />
        <View style={styles.content}>
          <Text style={styles.nameStory}>{props.item.story_name}</Text>
          <Text style={styles.dateStory}>{props.item.updated_at}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  storyContain: {
    flexDirection: 'row',
    marginTop: 20,
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
