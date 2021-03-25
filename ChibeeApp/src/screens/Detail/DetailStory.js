import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { NavigationUtils } from '../../navigation';
import Images from '../../themes/Images';
import { Dimensions } from 'react-native';
import Colors from '../../themes/Colors';
import HomeStoryItem from '../../components/Home/HomeStoryItem';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const DetailStory = () => {
  const [checkViewAll, setCheckViewAll] = useState(false);
  const onViewAll = () => {
    setCheckViewAll(!checkViewAll);
  };
  const onListen = () => {
    NavigationUtils.push({ screen: 'Invite', isTopBarEnable: false });
  };
  const onListenStory = () => {
    NavigationUtils.push({ screen: 'ListenStory', isTopBarEnable: false });
  };
  const data = [
    {
      id: 1,
      image: Images.story1,
      name: 'Bà cụ non',
      rating: 3,
      numberBuyer: 123,
    },
    {
      id: 2,
      image: Images.story2,
      name: 'Bà cụ non',
      rating: 4,
      numberBuyer: 123,
    },
    {
      id: 3,
      image: Images.story3,
      name: 'Bà cụ non',
      rating: 5,
      numberBuyer: 123,
    },
    {
      id: 4,
      image: Images.story4,
      name: 'Bà cụ non',
      rating: 3,
      numberBuyer: 123,
    },
  ];
  return (
    <ScrollView style={styles.container}>
      <View>
        <Image source={Images.story2} style={styles.imgBackground} />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => NavigationUtils.pop()}>
            <Image source={Images.back} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.subContainer}>
        <View style={styles.storyTitle}>
          <Image source={Images.story2} style={styles.imgStory} />
          <View>
            <Text style={styles.textTitle}>Chú Ếch Xanh</Text>
            <View style={styles.starContainer}>
              <Image source={Images.star} style={styles.imgStar} />
              <Image source={Images.star} style={styles.imgStar} />
              <Image source={Images.star} style={styles.imgStar} />
              <Image source={Images.star} style={styles.imgStar} />
              <Image source={Images.star} style={styles.imgStar} />
            </View>
          </View>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnListen} onPress={onListen}>
            <Image source={Images.headphones} style={styles.imgPlay} />
            <Text style={styles.txtBtn}>Cùng nghe</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnInvite} onPress={onListenStory}>
            <Image source={Images.play} style={styles.imgPlay} />
            <Text style={styles.txtBtn}>Nghe thử</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.introContainer}>
          <Text style={styles.txtIntro}>Giới thiệu</Text>
          <View style={styles.introContent}>
            <View style={styles.titleContainer}>
              <Text style={styles.txtTitle}>Tác giả</Text>
              <Text style={styles.txtTitle}>Thời lượng</Text>
              <Text style={styles.txtTitle}>Thể loại </Text>
              <Text style={styles.txtTitle}>Đánh giá </Text>
            </View>
            <View>
              <Text style={styles.txtContent}>Trịnh Công Hoang</Text>
              <Text style={styles.txtContent}>32 phút 10 giây</Text>
              <Text style={styles.txtContent}>Cổ tích</Text>
              <Text style={styles.txtContent}>4.5</Text>
            </View>
          </View>
        </View>

        <View style={styles.detail}>
          <Text style={styles.txtTitle}>Lời tựa</Text>
          {checkViewAll ? (
            <View>
              <Text style={styles.content}>
                Những ký sự đó đã khắc họa chân dung của người lính mà thời ấy gọi là bộ đội Cụ Hồ
                trong đó ca ngợi những phẩm chất của họ như lòng yêu nước, thương nhà, tình đồng
                đội, tinh thần dũng cảm trong chiến đấu
              </Text>
              <TouchableOpacity onPress={() => onViewAll()}>
                <Text style={styles.viewAll}>Ẩn bớt</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Text style={styles.content} numberOfLines={2}>
                Những ký sự đó đã khắc họa chân dung của người lính mà thời ấy gọi là bộ đội Cụ Hồ
                trong đó ca ngợi những phẩm chất của họ như lòng yêu nước, thương nhà, tình đồng
                đội, tinh thần dũng cảm trong chiến đấu
              </Text>
              <TouchableOpacity onPress={() => onViewAll()}>
                <Text style={styles.viewAll}>Xem thêm</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={styles.listViewContainer}>
          <Text style={styles.txtList}>Có thể bạn muốn nghe</Text>

          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={styles.scvContainer}
          >
            {data.map((item, key) => {
              return <HomeStoryItem item={item} key={key} />;
            })}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailStory;

const styles = StyleSheet.create({
  scvContainer: {
    marginTop: 8,
  },
  header: {
    marginTop: -screenHeight * 0.15,
    paddingHorizontal: 18,
    marginBottom: 60,
  },
  imgBackground: {
    width: Dimensions.get('window').width,
    height: screenHeight * 0.18,
    opacity: 0.5,
  },
  storyTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  imgStory: {
    width: screenWidth * 0.48,
    height: screenHeight * 0.18,
    borderRadius: 5,
    marginTop: -50,
  },
  imgStar: {
    width: screenWidth * 0.05,
    height: screenWidth * 0.05,
    tintColor: 'orange',
  },
  starContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  textTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subContainer: {
    backgroundColor: '#ffffff',
    marginTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  btnListen: {
    width: screenWidth * 0.35,
    height: screenHeight * 0.05,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
  },
  btnContainer: {
    marginTop: 20,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgPlay: {
    tintColor: 'white',
    marginRight: 10,
  },
  txtBtn: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnInvite: {
    flexDirection: 'row',
    width: screenWidth * 0.35,
    height: screenHeight * 0.05,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  txtIntro: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },
  introContent: {
    flexDirection: 'row',
    paddingHorizontal: 40,
  },
  introContainer: {
    marginTop: 20,
  },
  txtDetail: {
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 40,
  },
  txtTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  txtContent: {
    fontSize: 16,
    marginTop: 10,
  },
  titleContainer: {
    width: 150,
  },
  detail: {
    paddingHorizontal: 40,
    marginTop: 10,
  },
  viewAll: {
    color: Colors.secondary,
    textAlign: 'center',
    marginTop: 5,
  },
  content: {
    fontSize: 16,
    lineHeight: 20,
    marginTop: 5,
    textAlign: 'justify',
  },
  txtList: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  listViewContainer: {
    paddingHorizontal: 20,
  },
});
