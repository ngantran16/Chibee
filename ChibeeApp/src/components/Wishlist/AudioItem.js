import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, FlatList } from 'react-native';
import ListItem from './ListItem';

const AudioItem = (props) => {
  const data = props.data;
  const songs = [
    {
      url: 'https://whispering-hollows-85804.herokuapp.com/audio/an_ca_thoi.mp3',
      duration: 140,
      id: 1,
    },
    {
      url: 'https://whispering-hollows-85804.herokuapp.com/audio/an_ca_thoi.mp3',
      duration: 120,
      id: 2,
    },
  ];

  const renderItem = ({ index, item }) => {
    return (
      <View>
        <ListItem item={item} />
      </View>
    );
  };

  return (
    <View>
      {data && data.length > 0 ? (
        <SafeAreaView>
          <FlatList
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      ) : (
        <Text style={styles.message}>You haven't added any story into your wishlist yet!</Text>
      )}
    </View>
  );
};

export default AudioItem;

const styles = StyleSheet.create({
  message: {
    marginTop: 50,
    fontSize: 20,
  },
});
