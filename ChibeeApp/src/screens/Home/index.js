/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, View, ScrollView, Image, ActivityIndicator } from 'react-native';
import Swiper from 'react-native-swiper';
import Images from '../../themes/Images';
import Type from '../../components/Home/Type';
import { useSelector } from 'react-redux';

const Home = () => {
  const listTypes = useSelector((state) => state.home.dataTypes);
  const isLoading = useSelector((state) => state.home.loadingHome);
  const IMAGE_SLIDE = [
    {
      id: 1,
      imgSource: Images.background1,
    },
    {
      id: 2,
      imgSource: Images.story2,
    },
    {
      id: 3,
      imgSource: Images.story4,
    },
  ];
  return (
    <ScrollView>
      <View>
        <View style={styles.header}>
          <Image source={Images.intro1} style={styles.logo} />
          <Image source={Images.intro2} style={styles.iconApp} />
        </View>
        <View>
          <Swiper
            style={styles.slider}
            showsButtons={false}
            autoplay
            dot={<View style={styles.sliderDot} />}
            activeDot={<View style={styles.dotActitveSlider} />}
          >
            {IMAGE_SLIDE.map((item, key) => {
              return <Image source={item.imgSource} style={styles.background} key={key} />;
            })}
          </Swiper>
        </View>
      </View>
      {isLoading && <ActivityIndicator size="large" color="#FF6600" />}
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {listTypes?.map((type, index) => {
          return <Type item={type} key={index} />;
        })}
      </ScrollView>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
  },
  slider: {
    height: 200,
  },
  sliderDot: {
    backgroundColor: 'white',
    width: 8,
    height: 8,
    marginLeft: 3,
    marginRight: 3,
    borderRadius: 4,
  },
  dotActitveSlider: {
    width: 8,
    height: 8,
    marginLeft: 3,
    marginRight: 3,
    borderRadius: 4,
    backgroundColor: '#FF9933',
  },
  iconApp: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  background: {
    width: '100%',
    height: 200,
    marginTop: 5,
  },
  container: {
    marginHorizontal: 16,
    marginTop: 30,
  },
});
