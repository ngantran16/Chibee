import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Images from '../../themes/Images';
import SettingProfileItem from '../../components/Setting/SettingProfileItem';
import { NavigationUtils } from '../../navigation';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => NavigationUtils.pop()}>
          <Image source={Images.back} />
        </TouchableOpacity>

        <Text style={styles.titleHeader}>Cài đặt thông tin</Text>
        <Text />
      </View>
      <View style={styles.contentContain}>
        <SettingProfileItem name={Images.user} title="Thông tin cá nhân" />
        <SettingProfileItem name={Images.padlock} title="Đổi mật khẩu" />
        <SettingProfileItem name={Images.customerService} title="Hỗ trợ" />
        <SettingProfileItem name={Images.document} title="Quy định" />
        <SettingProfileItem name={Images.logout} title="Đăng xuất" />
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
