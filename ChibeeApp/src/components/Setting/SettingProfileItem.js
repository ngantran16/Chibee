import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationUtils } from '../../navigation';
import LoginTypes from '../../redux/LoginRedux/actions';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../themes/Colors';

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
    <TouchableOpacity onPress={() => onInfoPress(props.title)} style={styles.settingButton}>
      <View style={styles.titleContent}>
        <Icon name={props.name} size={24} color={Colors.secondary} />
        <View style={styles.viewText}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </View>
      <View>
        <Icon name="angle-right" size={24} color="gray" />
      </View>
    </TouchableOpacity>
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
    fontFamily: 'Cochin',
  },
  settingButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 0.5,
    height: 50,
    marginBottom: 5,
  },
  titleContent: {
    flexDirection: 'row',
  },
});
