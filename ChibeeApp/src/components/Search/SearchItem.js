import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import HomeStoryItem from '../../components/Home/HomeStoryItem';
import { useSelector } from 'react-redux';
const screenWidth = Dimensions.get('screen').width;

const SearchItem = (props) => {
  const listStory = useSelector((state) => state.home.dataStory);

  function nonAccentVietnamese(str) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '');
    str = str.replace(/\u02C6|\u0306|\u031B/g, '');
    return str;
  }

  const storyByType = listStory?.filter((item) => {
    let story_name = nonAccentVietnamese(item.story_name);
    return item.id_type === props.item.id && story_name.match(props.searchText.toLowerCase());
  });

  return (
    <View>
      <Text style={styles.title}>{props.item.name}</Text>
      {storyByType && storyByType.length > 0 ? (
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
      ) : (
        <Text style={styles.resultMessage}>Không có kết quả tìm kiếm phù hợp</Text>
      )}
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
  },
});
