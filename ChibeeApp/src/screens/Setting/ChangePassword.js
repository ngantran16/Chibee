import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { NavigationUtils } from '../../navigation';
import Images from '../../themes/Images';
import { Dimensions } from 'react-native';
import Colors from '../../themes/Colors';
import PasswordItem from '../../components/Login/PasswordItem';
import Icon from 'react-native-vector-icons/FontAwesome';

const ChangePassword = () => {
  const [] = useState(true);
  const [oldPassword, setOldPassword] = useState('Nguyễn Minh Anh');
  const [newPass, setNewPass] = useState('anhlinh@gmail.com');
  const [confirmNewPass, setConfirmNewPass] = useState('0254326458');
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => NavigationUtils.pop()}>
          <Icon name="angle-left" size={25} />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Đổi mật khẩu</Text>
        <Text />
      </View>
      <View style={styles.contentContain}>
        <View style={styles.infoContain}>
          <View style={styles.infoItem}>
            <PasswordItem
              title="Nhập mật khẩu cũ"
              imageClose={Images.visibility2}
              imageOpen={Images.visibility}
              onChangePass={(val) => setOldPassword(val)}
            />
          </View>
          <View style={styles.infoItem}>
            <PasswordItem
              title="Nhập mật khẩu mới"
              imageClose={Images.visibility2}
              imageOpen={Images.visibility}
              onChangePass={(val) => setNewPass(val)}
            />
          </View>
          <View style={styles.infoItem}>
            <PasswordItem
              title="Nhập lại mật khẩu mới"
              imageClose={Images.visibility2}
              imageOpen={Images.visibility}
              onChangePass={(val) => setConfirmNewPass(val)}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.btnChangeInfo}>
            <Text style={styles.btnTitle}>Thay đổi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
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
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginLeft: 10,
  },
  contentContain: {
    paddingHorizontal: 18,
  },
  nameContain: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('window').width - 36,
    height: 150,
    backgroundColor: Colors.secondary,
    marginTop: 10,
  },
  name: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  infoContain: {
    marginTop: 20,
  },
  btnChangeInfo: {
    width: Dimensions.get('window').width - 36,
    height: 50,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 100,
  },
  btnTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  infoItem: {
    marginBottom: 90,
  },
});
