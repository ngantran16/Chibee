import React from 'react';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../../themes/Colors';
import { NavigationUtils } from '../../navigation';
import { useDispatch } from 'react-redux';
import DetailActions from '../../redux/DetailRedux/actions';

const screenWidth = Dimensions.get('screen').width;

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
        <Icon name="bell" size={20} color={Colors.secondary} />
      </View>
      <View>
        <Text style={styles.allNofi}>
          <Text style={styles.nameUsers}>{props.item.user}</Text>
          <Text> đã mời bạn cùng nghe </Text>
          <Text style={styles.titleStories}>{props.item.story}</Text>
        </Text>
        <Text style={styles.dateInvite}>{Moment(props.item.created_at).format('DD/MM/YYYY')}</Text>
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
    width: screenWidth * 0.78,
  },
  nameUsers: {
    fontWeight: 'bold',
  },
  titleStories: {
    fontWeight: 'bold',
  },
  dateInvite: {
    color: 'grey',
    fontSize: 16,
    marginRight: 20,
    fontWeight: 'bold',
  },
  iconBell: {
    marginRight: 10,
  },
});
