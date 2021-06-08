import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Colors from '../../themes/Colors';
import ProfileItem from '../../components/Profile/ProfileItem';
import { NavigationUtils } from '../../navigation';
import Notifications from '../../screens/Profile/Notifications';
import WishlistItem from '../../components/Profile/WishlistItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import ProfileAction from '../../redux/UserRedux/actions';
import WishlistActions from '../../redux/WishlistRedux/actions';
import Images from '../../themes/Images';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const Profile = () => {
  const dispatch = useDispatch();
  const onSettingIcon = () => {
    NavigationUtils.push({ screen: 'Setting', isTopBarEnable: false });
  };
  const [selected, setSelected] = useState('Đã nghe');
  const token = useSelector((state) => state.login.token);
  const user = useSelector((state) => state.user.user);
  const data = useSelector((state) => state.wishlist.dataWishlist);
  const notifications = useSelector((state) => state.notification.dataNotification);

  useEffect(() => {
    dispatch(ProfileAction.userProfile(token));
    dispatch(WishlistActions.getWishlist(token));
  }, [dispatch, token]);

  const formatNumber = (number) => {
    if (number < 10) {
      return `0${number}`;
    }
    return number;
  };
  return (
    <View style={styles.container}>
      <View style={styles.con}>
        <Image source={{ uri: user?.avatar }} style={styles.imgBackground} />
        <View style={styles.header}>
          <TouchableOpacity onPress={onSettingIcon}>
            <Icon name="cog" size={25} style={styles.setting} />
          </TouchableOpacity>
        </View>
        <View style={styles.nameContain}>
          <Image source={{ uri: user?.avatar }} style={styles.avatar} />
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{user?.full_name}</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.iconContain}>
                <Icon
                  name="headphones"
                  size={25}
                  style={styles.iconName}
                  color={Colors.secondary}
                />
                <Text style={styles.textNumber}>{data && formatNumber(data.length)}</Text>
              </View>
              <View style={styles.iconContain}>
                <Icon name="heart" size={20} style={styles.iconName} color="#CC0000" />
                <Text style={styles.textNumber}>{data && formatNumber(data.length)}</Text>
              </View>
              <View style={styles.iconContain}>
                <Icon name="bell" size={20} style={styles.iconName} color={Colors.primary} />
                <Text style={styles.textNumber}>
                  {notifications && formatNumber(notifications.length)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity
          onPress={() => setSelected('Đã nghe')}
          style={selected === 'Đã nghe' ? styles.allStory : styles.allStory2}
        >
          <Text style={selected === 'Đã nghe' ? styles.titleMenuSelected : styles.titleMenu}>
            Đã nghe
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelected('Yêu thích')}
          style={selected === 'Yêu thích' ? styles.allStory : styles.allStory2}
        >
          <Text style={selected === 'Yêu thích' ? styles.titleMenuSelected : styles.titleMenu}>
            Yêu thích
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelected('Thông báo')}
          style={selected === 'Thông báo' ? styles.allStory : styles.allStory2}
        >
          <Text style={selected === 'Thông báo' ? styles.titleMenuSelected : styles.titleMenu}>
            Thông báo
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.storyContain}>
        {selected === 'Đã nghe' && data ? (
          <View>
            {data && data.length > 0 ? (
              data.map((item, key) => {
                return <ProfileItem item={item} key={key} />;
              })
            ) : (
              <View style={styles.audioFileContainer}>
                <Image source={Images.audioFile} style={styles.audioFile} />
                <Text style={styles.textMessage}>Danh sách trống</Text>
              </View>
            )}
          </View>
        ) : selected === 'Yêu thích' && data ? (
          <WishlistItem data={data} />
        ) : (
          <Notifications />
        )}
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  header: {
    marginTop: -screenHeight * 0.18,
    paddingHorizontal: 18,
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
    width: screenWidth * 0.25,
    height: screenWidth * 0.25,
    borderRadius: (screenWidth * 0.25) / 2,
    marginLeft: 20,
    borderWidth: 2,
    borderColor: 'white',
  },
  nameContain: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: screenHeight * 0.09,
  },
  name: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: -10,
    marginBottom: 10,
    textShadowColor: 'black',
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10,
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    width: screenWidth,
  },
  titleMenu: {
    fontSize: 16,
    color: 'gray',
    padding: 5,
  },
  titleMenuSelected: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    padding: 5,
  },
  allStory: {
    width: screenWidth / 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 2,
    marginBottom: 8,
  },
  allStory2: {
    width: screenWidth / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
  },
  storyContain: {
    paddingHorizontal: 18,
    marginBottom: screenHeight * 0.3,
  },
  imgBackground: {
    width: screenWidth,
    height: screenHeight * 0.2,
    opacity: 0.4,
    backgroundColor: 'rgba(0,0,0,.87)',
  },
  iconContain: {
    marginLeft: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconName: {
    marginRight: 5,
  },
  textNumber: {
    fontSize: 20,
    color: '#222222',
    fontWeight: '600',
  },
  setting: {
    textShadowColor: 'white',
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 2,
  },
  audioFile: {
    width: screenWidth * 0.5,
    height: screenHeight * 0.25,
    resizeMode: 'contain',
    tintColor: Colors.secondary,
    opacity: 0.5,
  },
  audioFileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: screenHeight * 0.06,
  },
  textMessage: {
    fontSize: 16,
    marginTop: -screenHeight * 0.04,
    color: 'gray',
  },
});
