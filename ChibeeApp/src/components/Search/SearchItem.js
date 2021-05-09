import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import HomeStoryItem from '../../components/Home/HomeStoryItem';
import { useSelector } from 'react-redux';
import { Colors } from '../../themes/Colors';
const screenWidth = Dimensions.get('screen').width;

const SearchItem = (props) => {
  const listStory = useSelector((state) => state.home.dataStory);
  const storyByType = listStory?.filter((item) => {
    return (item.id_type === props.item.id 
      && item.story_name.toLowerCase().match(props.searchText.toLowerCase()));
  });

  return (
    <View>
      <Text style={styles.title}>{props.item.name}</Text>
      {
        storyByType && storyByType.length > 0 ? (
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
        ) : (<Text style={styles.resultMessage}>Không có kết quả tìm kiếm  phù hợp</Text>)
      }
      
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
  resultMessage: {
    fontSize: 14,
    color: '#00D1FF',
    marginTop: 5,
    marginBottom: 10,
  }
});
