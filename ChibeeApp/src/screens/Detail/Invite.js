import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { NavigationUtils } from '../../navigation';
import Images from '../../themes/Images';
import InviteItem from '../../components/Detail/InviteItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import NotificationActions from '../../redux/NotificationRedux/actions';
import { useDispatch, useSelector } from 'react-redux';

const Invite = () => {
  const dispatch = useDispatch();
  const data = [
    {
      id: 1,
      image: Images.avatar,
      name: 'Lê Ngọc Mai',
      isClicked: true,
    },
    {
      id: 2,
      image: Images.story1,
      name: 'Nguyễn Khánh An',
      isClicked: false,
    },
    {
      id: 3,
      image: Images.story2,
      name: 'Bùi Minh Khang',
      isClicked: false,
    },
    {
      id: 4,
      image: Images.story3,
      name: 'Nguyễn Khánh An',
      isClicked: false,
    },
    {
      id: 5,
      image: Images.story4,
      name: 'Nguyễn Ngọc Hân',
      isClicked: false,
    },
    {
      id: 6,
      image: Images.story1,
      name: 'Bùi Minh Khang',
      isClicked: false,
    },
  ];

  useEffect(() => {
    dispatch(NotificationActions.getUsers());
  }, [dispatch]);

  const users = useSelector((state) => state.notification.dataUsers);
  const isLoading = useSelector((state) => state.notification.loadingUsers);
  console.log(users);
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => NavigationUtils.pop()}>
          <Icon name="angle-left" size={25} />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Cùng nghe</Text>
        <Text />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {(users && users.length) > 0 ? (
          users.map((item, key) => {
            return <InviteItem item={item} key={key} />;
          })
        ) : isLoading ? (
          <ActivityIndicator size="large" color="#FF6600" />
        ) : (
          <Text>Hiện tại không có bạn nào trong danh sách để mời</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Invite;

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#BBBBBB',
    padding: 10,
  },
  titleHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
});
