import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Dimensions,
} from 'react-native';
import { NavigationUtils } from '../../navigation';
import InviteItem from '../../components/Detail/InviteItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import NotificationActions from '../../redux/NotificationRedux/actions';
import { useDispatch, useSelector } from 'react-redux';
import AwesomeAlert from 'react-native-awesome-alerts';
import Colors from '../../themes/Colors';
const screenHeight = Dimensions.get('screen').height;

const Invite = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const detail_story = useSelector((state) => state.storyDetails.getStoryDetailsResponse);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const data = {
      token: token,
      id_story: detail_story.id,
    };
    dispatch(NotificationActions.getUsers(data));
  }, [detail_story.id, dispatch, token]);

  const users = useSelector((state) => state.notification.dataUsers);
  const isLoading = useSelector((state) => state.notification.loadingUsers);

  const onInvite = (id_take) => {
    const data = {
      token: token,
      id_take: id_take,
      id_story: detail_story.id,
    };
    dispatch(NotificationActions.inviteUser(data, onSuccess, onFail));
  };

  const onSuccess = () => {
    setMessage('Bạn đã mời thành công');
    const data = {
      token: token,
      id_story: detail_story.id,
    };
    dispatch(NotificationActions.getUsers(data));
    setShow(true);
  };

  const onFail = () => {
    setMessage('Bạn đã mời thất bại. Vui lòng thử lại lần nữa!');
    setShow(true);
  };
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => NavigationUtils.pop()}>
          <Icon name="angle-left" size={25} />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Cùng nghe</Text>
        <Text />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {(users && users.length) > 0 ? (
          users.map((item, key) => {
            return <InviteItem item={item} key={key} onInvite={onInvite} />;
          })
        ) : isLoading ? (
          <ActivityIndicator size="large" color="#FF6600" />
        ) : (
          <Text>Hiện tại không có bạn nào trong danh sách để mời</Text>
        )}
      </ScrollView>
      <AwesomeAlert
        show={show}
        showProgress={false}
        message={message}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="OK"
        confirmButtonColor={Colors.primary}
        onCancelPressed={() => setShow(false)}
        onConfirmPressed={() => setShow(false)}
      />
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
  container: {
    height: screenHeight * 0.82,
  },
});
