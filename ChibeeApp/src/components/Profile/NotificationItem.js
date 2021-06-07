/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import moment from 'moment';
import 'moment/locale/vi';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import Colors from '../../themes/Colors';
import { NavigationUtils } from '../../navigation';
import { useDispatch } from 'react-redux';
import DetailActions from '../../redux/DetailRedux/actions';

const screenWidth = Dimensions.get('screen').width;

const dateVi = (date) => {
  const newDate = moment(date);
  newDate.locale('vi');
  return newDate.format('lll');
};

const NotificationItem = (props) => {
  const dispatch = useDispatch();
  const onListenStory = () => {
    dispatch(DetailActions.getStoryDetails(props.item.id_story, onSuccess, onFail));
  };

  const onSuccess = () => {
    NavigationUtils.push({
      screen: 'ListenStory',
      isTopBarEnable: false,
      isBottomTabsEnable: false,
    });
  };

  const onFail = () => {
    console.log('Get story details fail');
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onListenStory}>
      <View style={styles.iconBell}>
        <Image source={{ uri: props.item.avatar }} style={styles.imgRadius} />
        <View style={styles.iconNoti}>
          <Icon name="bell" size={14} color="white" />
        </View>
      </View>
      <View>
        <Text style={styles.allNofi}>
          <Text style={styles.nameUsers}>{props.item.user}</Text>
          <Text> đã mời bạn cùng nghe </Text>
          <Text style={styles.titleStories}>{props.item.story}</Text>
        </Text>
        <Text style={styles.dateInvite}>{dateVi(props.item.created_at)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationItem;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
  },
  allNofi: {
    flexDirection: 'row',
    fontSize: 18,
    width: screenWidth * 0.68,
  },
  nameUsers: {
    fontWeight: 'bold',
  },
  titleStories: {
    fontWeight: 'bold',
  },
  dateInvite: {
    color: '#222222',
    fontSize: 16,
    marginRight: 20,
  },
  iconBell: {
    marginRight: 10,
  },
  imgRadius: {
    width: screenWidth * 0.16,
    height: screenWidth * 0.16,
    borderRadius: (screenWidth * 0.16) / 2,
  },
  iconNoti: {
    marginTop: -screenWidth * 0.05,
    marginLeft: screenWidth * 0.1,
    backgroundColor: Colors.primary,
    width: screenWidth * 0.06,
    height: screenWidth * 0.06,
    borderRadius: (screenWidth * 0.06) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
