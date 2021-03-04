/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import IntroItem from '../../components/Intro/IntroItem';
import Swiper from 'react-native-swiper';
import Images from '../../themes/Images';

const Introduction = () => {
  const INTRO = [
    {
      id: 1,
      imgSource: Images.intro1,
      title: 'Ứng dụng dành cho trẻ em',
      detail: 'Rất nhiều các loại truyện hay và bổ ích được tích hợp trên hệ thống',
      startBtn: false,
    },
    {
      id: 2,
      imgSource: Images.intro2,
      title: 'ChiBee đem đến cho bạn',
      detail: 'Người bạn tốt\n Khoảnh khắc ý nghĩa\n Giấc mơ đẹp',
      startBtn: false,
    },
    {
      id: 3,
      imgSource: Images.intro3,
      title: 'Vui cùng ChiBee',
      detail: 'Thỏa sức khám phá\n Thỏa sức trải nghiệm',
      startBtn: true,
    },
  ];
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      dot={<View style={styles.dotStyle} />}
      activeDot={<View style={styles.dotActitveStyle} />}
    >
      {INTRO.map((item) => {
        return <IntroItem item={item} key={item.id} />;
      })}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dotStyle: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 8,
    height: 8,
    marginLeft: 3,
    marginRight: 3,
    borderRadius: 4,
    marginBottom: 225,
  },
  dotActitveStyle: {
    width: 8,
    height: 8,
    marginLeft: 3,
    marginRight: 3,
    borderRadius: 4,
    marginBottom: 225,
    backgroundColor: '#3BB9FF',
  },
});

export default Introduction;
