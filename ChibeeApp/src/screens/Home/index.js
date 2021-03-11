/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Images from '../../themes/Images';
import Type from '../../components/Home/Type';

const index = () => {
  const types = [
    {
      id: '1',
      name: 'Truyện cổ tích',
    },
    {
      id: '2',
      name: 'Bài học quý báu',
    },
    {
      id: '3',
      name: 'Quà tặng cuộc sống',
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
          <Image source={Images.background1} style={styles.background} />
        </View>
      </View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {types.map((type) => {
          return <Type title={type.name} key={type.id} />;
        })}
      </ScrollView>
    </ScrollView>
  );
};

export default index;

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
