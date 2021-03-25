import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import Images from '../../themes/Images';
import SearchItem from '../../components/Search/SearchItem';

const index = () => {
  const types = [
    {
      id: '1',
      name: 'Truyện cổ tích',
    },
    {
      id: '2',
      name: 'Bài học quý báu',
    },
    {
      id: '3',
      name: 'Quà tặng cuộc sống',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Images.search} style={styles.iconSearch} />
        <TextInput
          style={styles.inputSearch}
          placeholder="Tìm kiếm..."
          placeholderTextColor="black"
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {types.map((type, key) => {
            return <SearchItem type={type} key={key} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
  },
  header: {
    flexDirection: 'row',
    marginTop: 20,
  },
  inputSearch: {
    height: 40,
    width: 300,
    borderRadius: 15,
  },
  iconSearch: {
    marginRight: 5,
    marginTop: 10,
  },
});
