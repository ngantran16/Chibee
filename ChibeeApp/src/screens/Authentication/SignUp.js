/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import TextInputItem from '../../components/Login/TextInputItem';
import PasswordItem from '../../components/Login/PasswordItem';
import { NavigationUtils } from '../../navigation';
import SignUpTypes from '../../redux/SignUpRedux/actions';
import LoginTypes from '../../redux/LoginRedux/actions';
import {
  validateEmail,
  validateField,
  validatePhone,
  validatePassword,
  validateName,
} from '../../utils/Tools';
import Images from '../../themes/Images';
const SignUp = (props) => {
  const [] = useState(true);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.signUp.loadingSignUp);
  const isError = useSelector((state) => state.signUp.errorSignUp);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [password, setPass] = useState('');
  const [confirm, setConfirm] = useState('');
  const onLogin = () => {
    dispatch(LoginTypes.userLogout());
    NavigationUtils.push({ screen: 'Login', isTopBarEnable: false });
  };

  const onSignUp = () => {
    if (email && fullName && password && confirm && phone) {
      if (validateEmail(email) || validatePhone(phone) || validatePassword(password)) {
        if (confirm === password) {
          let data = {
            full_name: fullName,
            email: email,
            password: password,
            phone_number: phone,
            age: age,
          };
          dispatch(SignUpTypes.userSignUp(data));
        } else {
          alert('Vui lòng xác nhận mật khẩu.');
        }
      } else {
        alert('Vui lòng kiểm tra lại');
      }
    } else {
      alert('Vui lòng điền đủ thông tin');
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.layoutTitle}>
        <TouchableOpacity onPress={onLogin}>
          <Image source={Images.cancelIcon} style={{ marginTop: 4 }} />
        </TouchableOpacity>
        <Text style={styles.title}>Đăng ký</Text>
      </View>
      <TextInputItem title="Họ và tên" ChangeText={(val) => setFullName(val)} />
      <TextInputItem title="Email" ChangeText={(val) => setEmail(val)} />
      <TextInputItem title="Số điện thoại" ChangeText={(val) => setPhone(val)} />
      <TextInputItem title="Tuổi" ChangeText={(val) => setAge(val)} />
      <PasswordItem
        title="Mật khẩu"
        imageClose={Images.visibility2}
        imageOpen={Images.visibility}
        onChangePass={(val) => setPass(val)}
      />
      <PasswordItem
        title="Xác nhận mật khẩu"
        imageClose={Images.visibility2}
        imageOpen={Images.visibility}
        onChangePass={(val) => setConfirm(val)}
      />
      {isLoading && <ActivityIndicator size="large" color="#FF6600" />}
      {isError && <Text style={{ color: 'red' }}>{isError}</Text>}
      <View style={styles.layoutButton}>
        <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
          <Text style={styles.textLogin}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButton} onPress={onSignUp}>
          <Text style={styles.textSignUp}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.policy}>
        Bằng việc xác nhận tạo tài khoản, bạn đã đồng ý với{' '}
        <Text style={styles.policyHighLight}>điều khoản quy định</Text> của chúng tôi
      </Text>
    </ScrollView>
  );
};
export default SignUp;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
  },
  layoutTitle: {
    flex: 1,
    flexDirection: 'row',
  },
  closeImage: {
    height: 20,
    width: 20,
    marginTop: 7,
  },
  title: {
    color: '#505050',
    fontSize: 26,
    marginLeft: '32%',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  layoutButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  loginButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderColor: '#41B8C1',
    borderWidth: 2,
    borderRadius: 5,
  },
  signUpButton: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: '#41B8C1',
    borderColor: '#41B8C1',
    borderWidth: 2,
    borderRadius: 5,
  },
  textSignUp: {
    color: 'white',
  },
  policy: {
    marginTop: 20,
    paddingHorizontal: 10,
    color: 'gray',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 10,
  },
  policyHighLight: {
    color: '#25969E',
    fontSize: 16,
  },
  showPassword: {
    position: 'absolute',
    right: 10,
    top: 38,
  },
});
