/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Images from '../../themes/Images';
import { Dimensions } from 'react-native';
import Colors from '../../themes/Colors';
import ProfileItem from '../../components/Profile/ProfileItem';
import { NavigationUtils } from '../../navigation';
import Notifications from '../../screens/Profile/Notifications';
import WishlistItem from '../../components/Profile/WishlistItem';

const index = () => {
  const data = [
    {
      id: 1,
      name: 'Bài học quý báu',
      image: Images.story1,
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
  const onSettingIcon = () => {
    NavigationUtils.push({ screen: 'Setting', isTopBarEnable: false });
  };
  const [selected, setSelected] = useState('Đã nghe');
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={styles.title}>Trang cá nhân</Text>
          <TouchableOpacity onPress={onSettingIcon}>
            <Image source={Images.settings} style={styles.setting} />
          </TouchableOpacity>
        </View>
        <View style={styles.nameContain}>
          <Image source={Images.avatar} style={styles.avatar} />
          <Text style={styles.name}>Nguyen Minh Anh</Text>
        </View>

        <View style={styles.menu}>
          <TouchableOpacity onPress={() => setSelected('Đã nghe')}>
            {selected === 'Đã nghe' ? (
              <Text style={styles.titleMenuSelected}>Đã nghe</Text>
            ) : (
              <Text style={styles.titleMenu}>Đã nghe</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelected('Yêu thích')}>
            {selected === 'Yêu thích' ? (
              <Text style={styles.titleMenuSelected}>Yêu thích</Text>
            ) : (
              <Text style={styles.titleMenu}>Yêu thích</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelected('Thông báo')}>
            {selected === 'Thông báo' ? (
              <Text style={styles.titleMenuSelected}>Thông báo</Text>
            ) : (
              <Text style={styles.titleMenu}>Thông báo</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {selected === 'Đã nghe' ? (
          data.map((item) => {
            return <ProfileItem item={item} />;
          })
        ) : selected === 'Yêu thích' ? (
          <WishlistItem />
        ) : (
          <Notifications />
        )}
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 18,
    marginRight: (Dimensions.get('window').width - 36) / 2 - 60,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginLeft: 10,
  },
  nameContain: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('window').width - 36,
    height: 150,
    backgroundColor: Colors.secondary,
    marginTop: 20,
  },
  name: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  menu: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleMenu: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
  titleMenuSelected: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 2,
  },
});
