import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import Images from '../../themes/Images';
import HomeStoryItem from '../../components/Home/HomeStoryItem';
import { FlatGrid } from 'react-native-super-grid';
import { NavigationUtils } from '../../navigation';

const ViewAll = () => {
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
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => NavigationUtils.pop()}>
          <Image source={Images.back} style={styles.iconBack} />
        </TouchableOpacity>

        <View style={styles.titleContain}>
          <Text style={styles.txtTitle}>Xem truyện cổ tích</Text>
        </View>
      </View>
      <ScrollView style={styles.mainContain} showsVerticalScrollIndicator={false}>
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

export default ViewAll;

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 18,
  },
  header: {
    marginTop: 10,
    flexDirection: 'row',
  },
  txtTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
  titleContain: {
    marginLeft: 90,
  },
  iconBack: {
    marginTop: 5,
  },
  subContain: {
    flexDirection: 'row',
  },
  mainContain: {
    marginTop: 10,
  },
});
