import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import HomeStoryItem from './HomeStoryItem';
import TypeHeader from './TypeHeader';
import Images from '../../themes/Images';

const Type = ({ title, style }) => {
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
    <View style={styles.container}>
      <TypeHeader title={title} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={[styles.scvContainer, style && style]}
      >
        {data.map((item) => {
          return <HomeStoryItem item={item} key={item.id} />;
        })}
      </ScrollView>
    </View>
  );
};

export default Type;

const styles = StyleSheet.create({
  container: {
    marginBottom: 22,
  },
  scvContainer: {
    marginTop: 8,
  },
});
