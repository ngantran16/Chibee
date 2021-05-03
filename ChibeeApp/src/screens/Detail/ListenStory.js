import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import Images from '../../themes/Images';
import { NavigationUtils } from '../../navigation';
import EvaluateItem from '../../components/Discover/EvaluateItem';
import Colors from '../../themes/Colors';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const ListenStory = () => {
  const data = [
    {
      id: 1,
      author: 'Nguyen Van A',
      avatar: Images.avatar,
      content: 'Câu chuyện hay qua!',
      dateComment: '20/11/2021',
      isFirst: true,
    },
    {
      id: 2,
      author: 'Nguyen Van A',
      avatar: Images.discover1,
      content: 'Câu chuyện hay qua!',
      dateComment: '20/11/2021',
      isFirst: false,
    },
    {
      id: 3,
      author: 'Nguyen Van A',
      avatar: Images.discover2,
      content: 'Câu chuyện hay qua!',
      dateComment: '20/11/2021',
      isFirst: false,
    },
    {
      id: 2,
      author: 'Nguyen Van A',
      avatar: Images.discover1,
      content: 'Câu chuyện hay qua!',
      dateComment: '20/11/2021',
      isFirst: false,
    },
  ];
  const [cmt, setCmt] = useState('   Viết nhận xét ... ');
  const onReadStory = () => {
    NavigationUtils.push({ screen: 'ReadStory', isTopBarEnable: false, isBottomTabsEnable: false });
  };
  const onWatchStory = () => {
    NavigationUtils.push({
      screen: 'WatchVideo',
      isTopBarEnable: false,
      isBottomTabsEnable: false,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => NavigationUtils.pop()}>
          <Image source={Images.back} />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Cô Bé Choàng Khăn đỏ</Text>
        <Text />
      </View>

      <View>
        <Image source={Images.story4} style={styles.imageStory} />
        <Image source={Images.settime} style={styles.timestory} />
      </View>

      <View style={styles.playControl}>
        <View>
          <Image source={Images.clock} />
        </View>
        <View style={styles.playAudio}>
          <Image source={Images.next} />
          <Image source={Images.playstory} />
          <Image source={Images.next2} />
        </View>

        <View>
          <Image source={Images.returnStory} />
        </View>
      </View>
      <View style={styles.playStory}>
        <TouchableOpacity>
          <Image source={Images.heart} style={styles.iconStory} />
          <Text style={styles.typeStory}>Yêu thích</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onReadStory}>
          <Image source={Images.book} style={styles.iconStory} />
          <Text style={styles.typeStory}>Đọc truyện</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onWatchStory}>
          <Image source={Images.video} style={styles.iconStory} />
          <Text style={styles.typeStory}>Xem video</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.txtComment}>Bình luận (5) </Text>
        <View style={styles.btnContainer}>
          <TextInput
            style={styles.inputComment}
            value={cmt}
            onChangeText={(text) => setCmt(text)}
          />
          <TouchableOpacity style={styles.sendContain}>
            <Image source={Images.send} />
          </TouchableOpacity>
        </View>

        <View style={styles.listComment}>
          {data.map((item, key) => {
            return (
              <EvaluateItem
                author="Nguyen Van A"
                isFirst={item.isFirst}
                content="Cau chuyen hay qua!"
                key={key}
              />
            );
          })}
        </View>
      </View>
      <TouchableOpacity>
        <Text style={styles.viewAll}>Xem thêm</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ListenStory;
const styles = StyleSheet.create({
  header: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
  imageStory: {
    width: '100%',
    height: 200,
    marginTop: 10,
    borderRadius: 5,
  },
  container: {
    paddingHorizontal: 18,
  },
  timestory: {
    width: '100%',
    marginTop: 5,
  },
  playControl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  playAudio: {
    flexDirection: 'row',
  },
  playStory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#C4C4C4',
    marginTop: 25,
    paddingTop: 10,
  },
  typeStory: {
    fontSize: 13,
    paddingLeft: 3,
  },
  iconStory: {
    marginLeft: 20,
  },
  txtComment: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputComment: {
    width: screenWidth - 36,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 20,
    backgroundColor: '#EEEEEE',
    color: 'gray',
    marginLeft: -15,
  },
  sendContain: {
    marginLeft: -38,
    marginTop: 15,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listComment: {
    marginTop: 10,
  },
  viewAll: {
    color: Colors.secondary,
    textAlign: 'center',
    marginTop: 5,
  },
});
