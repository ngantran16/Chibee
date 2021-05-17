import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { NavigationUtils } from '../../navigation';
import Colors from '../../themes/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';

const ReadStory = () => {
  const [checkViewAll, setCheckViewAll] = useState(false);
  const onViewAll = () => {
    setCheckViewAll(!checkViewAll);
  };

  const storyDetails = useSelector((state) => state.storyDetails.getStoryDetailsResponse);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => NavigationUtils.pop()}>
          <Icon name="angle-left" size={25} />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>{storyDetails?.story_name}</Text>
        <Text />
      </View>

      <View>
        <Image source={{ uri: storyDetails?.image }} style={styles.imgStory} />
      </View>
      {checkViewAll ? (
        <View style={styles.story}>
          <Text style={styles.content}>{storyDetails.content}</Text>
          <TouchableOpacity onPress={() => onViewAll()}>
            <Text style={styles.viewAll}>Ẩn bớt</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.story}>
          <Text style={styles.content} numberOfLines={18}>
            {storyDetails.content}
          </Text>
          <TouchableOpacity onPress={() => onViewAll()}>
            <Text style={styles.viewAll}>Xem thêm</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

export default ReadStory;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
  },
  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#BBBBBB',
    padding: 10,
  },
  titleHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  imgStory: {
    width: '100%',
    height: 230,
    borderRadius: 10,
  },
  viewAll: {
    color: Colors.secondary,
    textAlign: 'center',
    marginBottom: 30,
  },
  content: {
    fontSize: 18,
    lineHeight: 25,
    marginTop: 5,
    textAlign: 'justify',
    color: 'gray',
  },
  story: {
    marginTop: 15,
  },
});
