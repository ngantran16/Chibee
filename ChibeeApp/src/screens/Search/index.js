import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import Images from '../../themes/Images';
import SearchItem from '../../components/Search/SearchItem';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

const Search = () => {
  const listTypes = useSelector((state) => state.home.dataTypes);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Image source={Images.search} style={styles.iconSearch} /> */}
        <Icon name="search" size={20} style={styles.iconSearch} />
        <TextInput
          style={styles.inputSearch}
          placeholder="Tìm kiếm..."
          placeholderTextColor="black"
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {listTypes.map((type, key) => {
            return <SearchItem item={type} key={key} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Search;

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
    fontSize: 20,
  },
});
