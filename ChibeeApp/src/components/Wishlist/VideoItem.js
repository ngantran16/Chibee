import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Images from '../../themes/Images';
import ProfileItem from '../../components/Profile/ProfileItem';

const VideoItem = () => {
  const data = [
    {
      id: 1,
      name: 'Bài học quý báu',
      image: Images.discover1,
      date: '20/10/2021',
    },
    {
      id: 2,
      name: 'Bài học quý báu',
      image: Images.discover2,
      date: '20/10/2021',
    },
    {
      id: 3,
      name: 'Bài học quý báu',
      image: Images.discover3,
      date: '20/10/2021',
    },
    {
      id: 4,
      name: 'Bài học quý báu',
      image: Images.discover4,
      date: '20/10/2021',
    },
    {
      id: 2,
      name: 'Bài học quý báu',
      image: Images.story2,
      date: '20/10/2021',
    },
    {
      id: 3,
      name: 'Bài học quý báu',
      image: Images.story3,
      date: '20/10/2021',
    },
    {
      id: 4,
      name: 'Bài học quý báu',
      image: Images.story4,
      date: '20/10/2021',
    },
  ];
  return (
    <View>
      {data.map((item) => {
        return (
          <View>
            <TouchableOpacity style={styles.storyContain}>
              <Image source={item.image} style={styles.imgStory} />
              <View style={styles.content}>
                <Text style={styles.nameStory}>{item.name}</Text>
                <Text style={styles.dateStory}>{item.date}</Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default VideoItem;

const styles = StyleSheet.create({
  storyContain: {
    marginTop: 20,
  },
  imgStory: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  content: {
    marginTop: 10,
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
