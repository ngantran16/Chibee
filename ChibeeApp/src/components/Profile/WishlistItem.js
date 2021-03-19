import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Images from '../../themes/Images';
import ProfileItem from '../../components/Profile/ProfileItem';

const WishlistItem = () => {
  const data = [
    {
      id: 1,
      name: 'Bài học quý báu',
      image: Images.discover1,
      date: '20/10/2021',
    },
    {
      id: 2,
      name: 'Bài học quý báu',
      image: Images.discover2,
      date: '20/10/2021',
    },
    {
      id: 3,
      name: 'Bài học quý báu',
      image: Images.discover3,
      date: '20/10/2021',
    },
    {
      id: 4,
      name: 'Bài học quý báu',
      image: Images.discover4,
      date: '20/10/2021',
    },
    {
      id: 2,
      name: 'Bài học quý báu',
      image: Images.story2,
      date: '20/10/2021',
    },
    {
      id: 3,
      name: 'Bài học quý báu',
      image: Images.story3,
      date: '20/10/2021',
    },
    {
      id: 4,
      name: 'Bài học quý báu',
      image: Images.story4,
      date: '20/10/2021',
    },
  ];
  return (
    <View>
      {data.map((item) => {
        return <ProfileItem item={item} />;
      })}
    </View>
  );
};

export default WishlistItem;

const styles = StyleSheet.create({});
