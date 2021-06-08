import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import { NavigationUtils } from '../../navigation';
import Images from '../../themes/Images';
import Colors from '../../themes/Colors';
import PasswordItem from '../../components/Login/PasswordItem';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import ProfileAction from '../../redux/UserRedux/actions';
import AwesomeAlert from 'react-native-awesome-alerts';
const screenWidth = Dimensions.get('screen').width;

const ChangePassword = () => {
  const [] = useState(true);
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.login.token);
  const [oldPassword, setOldPassword] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmNewPass, setConfirmNewPass] = useState('');

  const [show, setShow] = useState(false);
  const [messageAlert, setMessageAlert] = useState('');
  const [error, setError] = useState('');

  const [errorPassword, setErrorPassword] = useState('');
  const [errorNewPass, setErrorNewPass] = useState('');
  const [errorConfirmPass, setErrorConfirmPass] = useState('');

  const onChangePassword = () => {
    setErrorPassword('');
    setErrorNewPass('');
    setErrorConfirmPass('');
    setError('');
    if (
      oldPassword === '' ||
      newPass === '' ||
      confirmNewPass === '' ||
      newPass !== confirmNewPass ||
      newPass.length < 6
    ) {
      if (oldPassword === '') {
        setErrorPassword('Vui lòng nhập mật khẩu hiện tại');
      }
      if (newPass === '') {
        setErrorNewPass('Vui lòng nhập mật khẩu mới');
      } else if (newPass.length < 6) {
        setErrorNewPass('Mật khẩu mới bắt buộc phải từ 6 kí tự trở lên');
      }
      if (confirmNewPass === '') {
        setErrorConfirmPass('Vui lòng xác nhận lại mật khẩu');
      } else if (newPass !== confirmNewPass) {
        setErrorConfirmPass('Mật khẩu không khớp');
      }
    } else {
      const data = {
        token: token,
        oldpassword: oldPassword,
        password: newPass,
      };
      dispatch(ProfileAction.changePassword(data, onSuccess, onFail));
    }
  };

  const onSuccess = () => {
    setMessageAlert('Bạn đã thay đổi mật khẩu thành công');
    setShow(true);
  };

  const changeScreen = () => {
    setShow(false);
    NavigationUtils.startMainContent();
  };

  const onFail = () => {
    setError('Mật khẩu cũ không đúng');
    // setShow(true);
  };
  return (
    <ScrollView>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => NavigationUtils.pop()}>
          <Icon name="angle-left" size={25} />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Đổi mật khẩu</Text>
        <Text />
      </View>
      <View style={styles.containAvatar}>
        <Image source={{ uri: userInfo.avatar }} style={styles.imgAvatar} />
        <Text style={styles.nameUser}>{userInfo.full_name}</Text>
      </View>
      {error ? (
        <View style={styles.errorPassContain}>
          <Icon color="#FF0000" name="exclamation-circle" size={15} />
          <Text style={styles.error}>{error}</Text>
        </View>
      ) : (
        <></>
      )}
      <View style={styles.contentContain}>
        <View style={styles.infoContain}>
          <View style={styles.infoItem}>
            <PasswordItem
              title="Nhập mật khẩu cũ"
              imageClose={Images.visibility2}
              imageOpen={Images.visibility}
              onChangePass={(val) => setOldPassword(val)}
            />
            {errorPassword ? (
              <View style={styles.errorContain}>
                <Icon color="#FF0000" name="exclamation-circle" size={15} />
                <Text style={styles.error}>{errorPassword}</Text>
              </View>
            ) : (
              <></>
            )}
          </View>
          <View style={styles.infoItem}>
            <PasswordItem
              title="Nhập mật khẩu mới"
              imageClose={Images.visibility2}
              imageOpen={Images.visibility}
              onChangePass={(val) => setNewPass(val)}
            />
            {errorNewPass ? (
              <View style={styles.errorContain}>
                <Icon color="#FF0000" name="exclamation-circle" size={15} />
                <Text style={styles.error}>{errorNewPass}</Text>
              </View>
            ) : (
              <></>
            )}
          </View>
          <View style={styles.infoItem}>
            <PasswordItem
              title="Nhập lại mật khẩu mới"
              imageClose={Images.visibility2}
              imageOpen={Images.visibility}
              onChangePass={(val) => setConfirmNewPass(val)}
            />
            {errorConfirmPass ? (
              <View style={styles.errorContain}>
                <Icon color="#FF0000" name="exclamation-circle" size={15} />
                <Text style={styles.error}>{errorConfirmPass}</Text>
              </View>
            ) : (
              <></>
            )}
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.btnChangeInfo} onPress={onChangePassword}>
            <Text style={styles.btnTitle}>Thay đổi</Text>
          </TouchableOpacity>
        </View>
      </View>
      <AwesomeAlert
        show={show}
        showProgress={false}
        title="Xác nhận"
        message={messageAlert}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="OK"
        confirmButtonColor={Colors.primary}
        onConfirmPressed={() => changeScreen()}
      />
    </ScrollView>
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
    marginTop: 5,
  },
  btnChangeInfo: {
    width: Dimensions.get('window').width - 36,
    height: 50,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  btnTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  infoItem: {
    marginBottom: 5,
    height: screenWidth * 0.22,
  },
  error: {
    color: '#FF0000',
    fontSize: 12,
    marginLeft: 5,
  },
  errorContain: {
    flexDirection: 'row',
    marginTop: 2,
  },
  imgAvatar: {
    width: screenWidth * 0.3,
    height: screenWidth * 0.3,
    borderRadius: (screenWidth * 0.3) / 2,
  },
  containAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  nameUser: {
    fontSize: 20,
    fontWeight: '600',
  },
  errorPassContain: {
    flexDirection: 'row',
    paddingHorizontal: 18,
  },
});
