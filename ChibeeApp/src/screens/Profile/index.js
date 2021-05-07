/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import Images from '../../themes/Images';
import { Dimensions } from 'react-native';
import Colors from '../../themes/Colors';
import ProfileItem from '../../components/Profile/ProfileItem';
import { NavigationUtils } from '../../navigation';
import Notifications from '../../screens/Profile/Notifications';
import WishlistItem from '../../components/Profile/WishlistItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import ProfileAction from '../../redux/UserRedux/actions';
import WishlistActions from '../../redux/WishlistRedux/actions';

const index = () => {

  const onSettingIcon = () => {
    NavigationUtils.push({ screen: 'Setting', isTopBarEnable: false });
  };
  const [selected, setSelected] = useState('Đã nghe');
  const dispatch = useDispatch();

  const token = useSelector((state) => state.login.token);

  useEffect(() => {
    dispatch(WishlistActions.getWishlist(token));
    dispatch(ProfileAction.userProfile({ id: 1 }));
  }, [dispatch, token]);
  const user = useSelector((state) => state.loginResponse);
  const data = useSelector((state) => state.wishlist.dataWishlist);
  const isLoading = useSelector((state) => state.wishlist.loadingWishlist);
  return (
    <View style={styles.container}>
      <View style={styles.con}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onSettingIcon}>
            <Icon name="cog" size={25} style={styles.setting} />
          </TouchableOpacity>
        </View>
        <View style={styles.nameContain}>
          <Image source={Images.avatar} style={styles.avatar} />
          <Text style={styles.name}>Nguyen Minh Anh</Text>
        </View>
      </View>
      <View style={styles.allStory}>
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
        {isLoading && <ActivityIndicator size="large" color="#FF6600" />}
        {
          data && data.length > 0 ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              {selected === 'Đã nghe' ? (
                data.map((item, key) => {
                  return <ProfileItem item={item} key={key} />;
                })
              ) : selected === 'Yêu thích' ? (
                <WishlistItem data = {data} />
              ) : (
                <Notifications />
              )}
            </ScrollView>
          ) : isLoading ? (<Text style={styles.message}>Loading</Text>) : <Text style={styles.message}>There doesn't have any story in your wishlist</Text>
        }
        
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
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
    width: 100,
    height: 100,
    borderRadius: 60,
    marginLeft: 10,
  },
  nameContain: {
    alignItems: 'center',
    flexDirection: 'row',
    width: Dimensions.get('window').width - 30,
    backgroundColor: 'white',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    height: 110,
    marginTop: 5,
    marginLeft: 15,
  },
  name: {
    color: 'black',
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
    fontSize: 17,
    fontWeight: 'bold',
    color: 'gray',
  },
  titleMenuSelected: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 2,
  },
  con: {
    backgroundColor: Colors.secondary,
  },
  allStory: {
    paddingHorizontal: 18,
  },
  message: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
  }
});
