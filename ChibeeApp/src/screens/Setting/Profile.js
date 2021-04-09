import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SettingProfileItem from '../../components/Setting/SettingProfileItem';
import { NavigationUtils } from '../../navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => NavigationUtils.pop()}>
          <Icon name="angle-left" size={24} />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Cài đặt thông tin</Text>
        <Text />
      </View>
      <View style={styles.contentContain}>
        <SettingProfileItem name="user" title="Thông tin cá nhân" />
        <SettingProfileItem name="lock" title="Đổi mật khẩu" />
        <SettingProfileItem name="phone" title="Hỗ trợ" />
        <SettingProfileItem name="sticky-note" title="Quy định" />
        <SettingProfileItem name="sign-out" title="Đăng xuất" />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 18,
  },
  header: {
    marginTop: 20,
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
  contentContain: {
    marginTop: 20,
  },
});
