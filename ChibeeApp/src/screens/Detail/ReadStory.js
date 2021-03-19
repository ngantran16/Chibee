import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import { NavigationUtils } from '../../navigation';
import Images from '../../themes/Images';
import Colors from '../../themes/Colors';
import EvaluateItem from '../../components/Discover/EvaluateItem';

const ReadStory = () => {
  const [checkViewAll, setCheckViewAll] = useState(false);
  const onViewAll = () => {
    setCheckViewAll(!checkViewAll);
  };
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
  ];
  const [cmt, setCmt] = useState('   Viết nhận xét ... ');
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => NavigationUtils.pop()}>
          <Image source={Images.back} />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Chú Ếch Xanh</Text>
        <Text />
      </View>

      <View>
        <Image source={Images.story2} style={styles.imgStory} />
      </View>
      {checkViewAll ? (
        <View style={styles.story}>
          <Text style={styles.content}>
            Ngày xửa ngày xưa, Mặt Trăng, Mặt Trời và Gà Trống sống cùng với nhau ở trên trời. Mặt
            Trăng mặc cái áo màu trắng, Gà Trống đội chiếc mũ màu đỏ. Mặt Trăng thích cái mũ đỏ của
            Gà Trống lắm. Một hôm, Mặt Trăng nói với Gà Trống: – Chúng mình đổi áo và mũ cho nhau
            nhé! Gà Trống đáp: – Tớ không thích cái áo màu trắng của cậu. Tớ không đổi mũ lấy áo đâu
            có chi...
          </Text>
          <TouchableOpacity onPress={() => onViewAll()}>
            <Text style={styles.viewAll}>Ẩn bớt</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.story}>
          <Text style={styles.content} numberOfLines={6}>
            Ngày xửa ngày xưa, Mặt Trăng, Mặt Trời và Gà Trống sống cùng với nhau ở trên trời. Mặt
            Trăng mặc cái áo màu trắng, Gà Trống đội chiếc mũ màu đỏ. Mặt Trăng thích cái mũ đỏ của
            Gà Trống lắm. Một hôm, Mặt Trăng nói với Gà Trống: – Chúng mình đổi áo và mũ cho nhau
            nhé! Gà Trống đáp: – Tớ không thích cái áo màu trắng của cậu. Tớ không đổi mũ lấy áo đâu
            có chi...
          </Text>
          <TouchableOpacity onPress={() => onViewAll()}>
            <Text style={styles.viewAll}>Xem thêm</Text>
          </TouchableOpacity>
        </View>
      )}

      <View>
        <Text style={styles.txtComment}>Bình luận (5) </Text>
        <View>
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
          {data.map((item) => {
            return (
              <EvaluateItem
                author="Nguyen Van A"
                isFirst={item.isFirst}
                content="Cau chuyen hay qua!"
              />
            );
          })}
        </View>
      </View>
      <TouchableOpacity>
        <Text style={styles.viewAll}>Xem thêm</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ReadStory;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
  },
  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#BBBBBB',
    padding: 10,
  },
  titleHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  imgStory: {
    width: '100%',
    height: 230,
    borderRadius: 10,
  },
  viewAll: {
    color: Colors.secondary,
    textAlign: 'center',
    marginTop: 5,
  },
  content: {
    fontSize: 18,
    lineHeight: 25,
    marginTop: 5,
    textAlign: 'justify',
    color: 'gray',
  },
  story: {
    marginTop: 15,
  },
  txtComment: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputComment: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 20,
    backgroundColor: '#EEEEEE',
    color: 'gray',
  },
  sendContain: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: -30,
    marginRight: 15,
  },
  listComment: {
    marginTop: 10,
  },
});
