/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import TextInputItem from '../../components/Login/TextInputItem';
import PasswordItem from '../../components/Login/PasswordItem';
import { NavigationUtils } from '../../navigation';
import Images from '../../themes/Images';
import Colors from '../../themes/Colors';
const Login = () => {
  const [] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSignUpHandel = () => {
    NavigationUtils.push({ screen: 'SignUp', isTopBarEnable: false });
  };
  const onClose = () => {
    NavigationUtils.pop();
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.layoutTitle}>
        <Text style={styles.title}> Đăng nhập </Text>
      </View>
      <TextInputItem title="Email" ChangeText={(val) => setEmail(val)} />
      <PasswordItem
        title="Mật khẩu"
        imageClose={Images.visibility2}
        imageOpen={Images.visibility}
        onChangePass={(val) => setPassword(val)}
      />
      <View style={styles.layoutButton}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.textSignUp}> Đăng nhập </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButton} onPress={onSignUpHandel}>
          <Text> Đăng ký </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.policy}> Quên mật khẩu </Text>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
  },
  layoutTitle: {
    flex: 0.7,
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 20,
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
  },
  layoutButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  loginButton: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: Colors.secondary,
    borderColor: Colors.secondary,
    borderWidth: 2,
  },
  signupButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderColor: Colors.secondary,
    borderWidth: 2,
  },
  textSignUp: {
    color: 'white',
  },
  policy: {
    marginTop: 20,
    paddingHorizontal: 10,
    color: 'gray',
    textAlign: 'center',
    fontSize: 18,
  },
});
export default Login;
