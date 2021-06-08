import React, { useEffect } from 'react';
import NotificationItem from '../../components/Profile/NotificationItem';
import {
  ScrollView,
  ActivityIndicator,
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import NotificationAction from '../../redux/NotificationRedux/actions';
import Pusher from 'pusher-js/react-native';
import Images from '../../themes/Images';
import Colors from '../../themes/Colors';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const Notifications = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  // var pusher = new Pusher('a0bcaef3f812d7a05575', {
  //   cluster: 'ap1',
  // });

  useEffect(() => {
    dispatch(NotificationAction.getNotification(token));
    // var channel = pusher.subscribe('my-channel');
    // channel.bind('my-event', function (data) {
    //   alert(JSON.stringify(data));
    // });
    // Pusher.logToConsole = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, token]);

  const notifications = useSelector((state) => state.notification.dataNotification);
  const notificationLoading = useSelector((state) => state.notification.loadingNotification);
  return (
    <ScrollView>
      {notifications && notifications.length > 0 ? (
        notifications.map((item, key) => {
          return <NotificationItem item={item} key={key} />;
        })
      ) : notificationLoading ? (
        <ActivityIndicator size="large" color="#FF6600" />
      ) : (
        <View style={styles.iconBellContainer}>
          <Image source={Images.bells} style={styles.iconBell} />
          <Text style={styles.message}>Bạn chưa có thông báo nào</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default Notifications;
const styles = StyleSheet.create({
  iconBellContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBell: {
    width: screenWidth * 0.6,
    height: screenHeight * 0.35,
    resizeMode: 'contain',
    tintColor: Colors.secondary,
    opacity: 0.5,
  },
  message: {
    fontSize: 16,
    marginTop: -screenHeight * 0.09,
    color: 'gray',
  },
});
