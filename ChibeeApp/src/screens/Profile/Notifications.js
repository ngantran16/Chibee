import React, { useEffect } from 'react';
import NotificationItem from '../../components/Profile/NotificationItem';
import { ScrollView, ActivityIndicator, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import NotificationAction from '../../redux/NotificationRedux/actions';

const Notifications = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  useEffect(() => {
    dispatch(NotificationAction.getNotification(token));
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
        <Text>Bạn chưa có thông báo nào</Text>
      )}
    </ScrollView>
  );
};

export default Notifications;
