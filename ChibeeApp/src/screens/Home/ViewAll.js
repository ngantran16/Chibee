import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Images from '../../themes/Images';
import HomeStoryItem from '../../components/Home/HomeStoryItem';
import { FlatGrid } from 'react-native-super-grid';
import { NavigationUtils } from '../../navigation';
import { useSelector } from 'react-redux';
const screenWidth = Dimensions.get('screen').width;

const ViewAll = () => {
  const listStory = useSelector((state) => state.home.dataStory);
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
          itemDimension={screenWidth * 0.42}
          data={listStory}
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
