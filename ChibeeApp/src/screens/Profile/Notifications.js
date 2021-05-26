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
  console.log('*********************************');
  if (notifications) {
    console.log(notifications[0].id);
  }
  // notifications && console.log(notifications[0].id);
  const DATA = [
    {
      id: 1,
      nameUser: 'Nguyen Ngoc Han',
      nameStory: 'Chú Ếch Con',
      dateInvite: '27-09-2021',
    },
    {
      id: 2,
      nameUser: 'Tran Ngoc Anh',
      nameStory: 'Chú Vịt Con',
      dateInvite: '27-09-2021',
    },
    {
      id: 3,
      nameUser: 'Pham Huyen Trang',
      nameStory: 'Bài học đầu tiên',
      dateInvite: '27-09-2021',
    },
    {
      id: 4,
      nameUser: 'Nguyen Ba Hoc',
      nameStory: 'Bé Đi Học',
      dateInvite: '27-09-2021',
    },
    {
      id: 5,
      nameUser: 'Tran Minh Tam',
      nameStory: 'Con Ong Chăm Chỉ ',
      dateInvite: '27-09-2021',
    },
    {
      id: 6,
      nameUser: 'Le Minh Hung',
      nameStory: 'Chú Ếch Con',
      dateInvite: '27-09-2021',
    },
    {
      id: 7,
      nameUser: 'Luong Chi Thien',
      nameStory: 'Chú Ếch Con',
      dateInvite: '27-09-2021',
    },
    {
      id: 8,
      nameUser: 'Dao Ba Dung',
      nameStory: 'Chú Ếch Con',
      dateInvite: '27-09-2021',
    },
  ];
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
