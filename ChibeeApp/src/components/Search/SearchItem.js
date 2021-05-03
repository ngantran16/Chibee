import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import HomeStoryItem from '../../components/Home/HomeStoryItem';
import { useSelector } from 'react-redux';
const screenWidth = Dimensions.get('screen').width;

const SearchItem = (props) => {
  const listStory = useSelector((state) => state.home.dataStory);
  const storyByType = listStory?.filter((item) => {
    return item.id_type === props.item.id;
  });
  return (
    <View>
      <Text style={styles.title}>{props.item.name}</Text>
      <ScrollView style={styles.mainContain}>
        <FlatGrid
          initialNumToRender={1}
          itemDimension={screenWidth * 0.4}
          data={storyByType}
          style={styles.gridView}
          padding={0}
          renderItem={({ item, key }) => <HomeStoryItem item={item} key={key} />}
        />
      </ScrollView>
    </View>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
