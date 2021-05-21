import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import HomeStoryItem from './HomeStoryItem';
import TypeHeader from './TypeHeader';
import { useSelector } from 'react-redux';

const Type = (props) => {
  const listStory = useSelector((state) => state.home.dataStory);
  const storyByType = listStory?.filter((item) => {
    return item.id_type === props.item.id;
  });
  console.log(storyByType);
  return (
    <View style={styles.container}>
      <TypeHeader title={props.item.name} id_type={props.item.id} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.scvContainer}
      >
        {storyByType?.map((item, key) => {
          return <HomeStoryItem item={item} key={key} />;
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
  // scvContainer: {
  //   marginTop: 8,
  // },
});
