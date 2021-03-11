import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const ProfileItem = (props) => {
  return (
    <View>
      <TouchableOpacity style={styles.storyContain}>
        <Image source={props.item.image} style={styles.imgStory} />
        <View style={styles.content}>
          <Text style={styles.nameStory}>{props.item.name}</Text>
          <Text style={styles.dateStory}>{props.item.date}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  storyContain: {
    flexDirection: 'row',
    marginTop: 20,
  },
  imgStory: {
    width: 200,
    height: 120,
    borderRadius: 10,
  },
  content: {
    marginLeft: 20,
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
