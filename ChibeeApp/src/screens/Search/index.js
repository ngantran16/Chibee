import React, { useState } from 'react';
import { StyleSheet, View, TextInput, ScrollView } from 'react-native';
import SearchItem from '../../components/Search/SearchItem';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

const Search = () => {
  const listTypes = useSelector((state) => state.home.dataTypes);
  const [searchText, setSearchText] = useState('');
  const onSearch = (text) => {
    setSearchText(text);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="search" size={20} style={styles.iconSearch} />
        <TextInput
          style={styles.inputSearch}
          placeholder="Tìm kiếm..."
          placeholderTextColor="black"
          onChangeText={onSearch}
          value={searchText}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {listTypes?.map((type, key) => {
            return <SearchItem item={type} key={key} searchText={searchText} />;
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
