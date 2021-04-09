import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Images from '../../themes/Images';
import { NavigationUtils } from '../../navigation';

const index = () => {
  const data = [
    {
      id: 1,
      image: Images.discover1,
      title: 'Khám phá thế giới của bé',
      content:
        'Những ký sự đó đã khắc họa chân dung của người lính mà thời ấy gọi là bộ đội Cụ Hồ trong đó ca ngợi những phẩm chất của họ như lòng yêu nước, thương nhà, tình đồng đội, tinh thần dũng cảm trong chiến đấu',
    },
    {
      id: 2,
      image: Images.discover2,
      title: 'Khám phá thế giới của bé',
      content:
        'Những ký sự đó đã khắc họa chân dung của người lính mà thời ấy gọi là bộ đội Cụ Hồ trong đó ca ngợi những phẩm chất của họ như lòng yêu nước, thương nhà, tình đồng đội, tinh thần dũng cảm trong chiến đấu',
    },
    {
      id: 3,
      image: Images.discover3,
      title: 'Khám phá thế giới của bé',
      content:
        'Những ký sự đó đã khắc họa chân dung của người lính mà thời ấy gọi là bộ đội Cụ Hồ trong đó ca ngợi những phẩm chất của họ như lòng yêu nước, thương nhà, tình đồng đội, tinh thần dũng cảm trong chiến đấu',
    },
    {
      id: 4,
      image: Images.discover4,
      title: 'Khám phá thế giới của bé',
      content:
        'Những ký sự đó đã khắc họa chân dung của người lính mà thời ấy gọi là bộ đội Cụ Hồ trong đó ca ngợi những phẩm chất của họ như lòng yêu nước, thương nhà, tình đồng đội, tinh thần dũng cảm trong chiến đấu',
    },
  ];

  const onImagePress = () => {
    NavigationUtils.push({ screen: 'DiscoverDetail', isTopBarEnable: false });
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Khám phá</Text>
      </View>
      <ScrollView>
        <View style={styles.discoverContain} showsVerticalScrollIndicator={false}>
          {data.map((item, key) => {
            return (
              <TouchableOpacity onPress={onImagePress} key={key}>
                <Image source={item.image} style={styles.imgDiscover} />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  title: {
    color: '#867D7D',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  imgDiscover: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginBottom: 15,
  },
  discoverContain: {
    marginTop: 20,
  },
});
