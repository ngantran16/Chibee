import React from 'react';
import NotificationItem from '../../components/Profile/NotificationItem';

import { ScrollView } from 'react-native';

const Notifications = () => {
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
      {DATA.map((item, key) => {
        return <NotificationItem item={item} key={key} />;
      })}
    </ScrollView>
  );
};

export default Notifications;
