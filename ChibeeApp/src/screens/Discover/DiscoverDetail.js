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
import EvaluateItem from '../../components/Discover/EvaluateItem';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
const DiscoverDetail = () => {
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
      id: 4,
      author: 'Nguyen Van A',
      avatar: Images.discover3,
      content: 'Câu chuyện hay qua!',
      dateComment: '20/11/2021',
      isFirst: false,
    },
  ];
  const [checkViewAll, setCheckViewAll] = useState(false);
  const onViewAll = () => {
    setCheckViewAll(!checkViewAll);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => NavigationUtils.pop()}>
          <Icon name="angle-left" size={25} style={styles.setting} />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>Khám phá thế giới của bé </Text>
        </View>
      </View>
      <View style={styles.imgContain}>
        <Image source={Images.discover1} style={styles.imgDetail} />
      </View>
      <ScrollView>
        <View>
          {checkViewAll ? (
            <View>
              <Text style={styles.content}>
                Những ký sự đó đã khắc họa chân dung của người lính mà thời ấy gọi là bộ đội Cụ Hồ
                trong đó ca ngợi những phẩm chất của họ như lòng yêu nước, thương nhà, tình đồng
                đội, tinh thần dũng cảm trong chiến đấu
              </Text>
              <TouchableOpacity onPress={onViewAll}>
                <Text style={styles.viewAll}>Ẩn bớt</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Text style={styles.content} numberOfLines={3}>
                Những ký sự đó đã khắc họa chân dung của người lính mà thời ấy gọi là bộ đội Cụ Hồ
                trong đó ca ngợi những phẩm chất của họ như lòng yêu nước, thương nhà, tình đồng
                đội, tinh thần dũng cảm trong chiến đấu
              </Text>
              <TouchableOpacity onPress={onViewAll}>
                <Text style={styles.viewAll}>Xem thêm</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View>
          <Text style={styles.titleComment}>Bình luận</Text>
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
        <View>
          <TextInput style={styles.inputComment} />
          <TouchableOpacity style={styles.sendContain}>
            <Icon name="paper-plane" size={25} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default DiscoverDetail;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
  },
  imgDetail: {
    width: '100%',
    height: 250,
    borderRadius: 5,
  },
  imgContain: {
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 50,
  },
  content: {
    marginTop: 10,
    fontSize: 16,
  },
  titleComment: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  inputComment: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 20,
    backgroundColor: '#EEEEEE',
  },
  sendContain: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: -30,
    marginRight: 15,
  },
  viewAll: {
    fontSize: 15,
    color: Colors.primary,
  },
});
