import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Images from '../../themes/Images';
import HomeStoryItem from '../../components/Home/HomeStoryItem';

const SearchItem = (props) => {
  const data = [
    {
      id: 1,
      image: Images.story1,
      name: 'Bà cụ non',
      rating: 3,
      numberBuyer: 123,
    },
    {
      id: 2,
      image: Images.story2,
      name: 'Bà cụ non',
      rating: 4,
      numberBuyer: 123,
    },
    {
      id: 3,
      image: Images.story3,
      name: 'Bà cụ non',
      rating: 5,
      numberBuyer: 123,
    },
    {
      id: 4,
      image: Images.story4,
      name: 'Bà cụ non',
      rating: 3,
      numberBuyer: 123,
    },
  ];
  return (
    <View>
      <Text style={styles.title}>{props.type.name}</Text>
      <ScrollView style={styles.mainContain}>
        <FlatGrid
          itemDimension={130}
          data={data}
          style={styles.gridView}
          spacing={10}
          renderItem={({ item }) => <HomeStoryItem item={item} key={item.id} />}
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
