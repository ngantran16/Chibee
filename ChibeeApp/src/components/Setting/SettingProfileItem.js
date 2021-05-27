import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationUtils } from '../../navigation';
import LoginTypes from '../../redux/LoginRedux/actions';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

const SettingProfileItem = (props) => {
  const dispatch = useDispatch();
  const onInfoPress = (title) => {
    if (title === 'Thông tin cá nhân') {
      NavigationUtils.push({ screen: 'PersonalInfo', isTopBarEnable: false });
    } else if (title === 'Đổi mật khẩu') {
      NavigationUtils.push({ screen: 'ChangePassword', isTopBarEnable: false });
    } else if (title === 'Hỗ trợ') {
      NavigationUtils.push({ screen: 'Support', isTopBarEnable: false });
    } else if (title === 'Quy định') {
      NavigationUtils.push({ screen: 'Policy', isTopBarEnable: false });
    } else if (title === 'Đăng xuất') {
      dispatch(LoginTypes.userLogout());
    }
  };
  return (
    <View style={styles.settingButton}>
      <Icon name={props.name} size={24} />
      <TouchableOpacity style={styles.viewText} onPress={() => onInfoPress(props.title)}>
        <Text style={styles.title}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingProfileItem;

const styles = StyleSheet.create({
  viewText: {
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
  },
  settingButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
});
