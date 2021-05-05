/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import TextInputItem from '../../components/Login/TextInputItem';
import PasswordItem from '../../components/Login/PasswordItem';
import { NavigationUtils } from '../../navigation';
import Images from '../../themes/Images';
import Colors from '../../themes/Colors';
import { useDispatch, useSelector } from 'react-redux';
import LoginTypes from '../../redux/LoginRedux/actions';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
const Login = () => {
  const [] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dataLogin = {
    email: email,
    password: password,
  };
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.login.loadingLogin);
  const isError = useSelector((state) => state.login.errorLogin);
  const onSignUpHandel = () => {
    NavigationUtils.push({ screen: 'SignUp', isTopBarEnable: false });
  };
  const onClose = () => {
    NavigationUtils.pop();
  };
  const onLogin = () => {
    console.log('Data login: ' + dataLogin.password);
    // dispatch(LoginTypes.userLogin({ email: 'ngan.tran@gmail.com', password: 'password' }));
    dispatch(LoginTypes.userLogin(dataLogin));
  };
  const onForgotPassword = () => {
    NavigationUtils.push({ screen: 'ForgotPassword1', isTopBarEnable: false });
  };
  return (
    <ImageBackground source={Images.loginBg} style={styles.image}>
      <View style={styles.imgContain}>
        <Image source={Images.intro2} style={styles.iconApp} />
      </View>

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
        {isLoading && <ActivityIndicator size="large" color="#FF6600" />}
        {isError && <Text style={{ color: 'red' }}> {isError} </Text>}
        <View style={styles.layoutButton}>
          <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
            <Text style={styles.textSignUp}> Đăng nhập </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupButton} onPress={onSignUpHandel}>
            <Text> Đăng ký </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => onForgotPassword()}>
          <Text style={styles.policy}> Quên mật khẩu? </Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    marginTop: 15,
  },
  image: {
    flex: 1,
    height: screenHeight * 0.4,
    justifyContent: 'center',
  },
  layoutTitle: {
    flex: 0.7,
    flexDirection: 'row',
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
    justifyContent: 'space-between',
    marginTop: 30,
    paddingHorizontal: 10,
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    borderColor: Colors.secondary,
    borderWidth: 2,
    width: screenWidth * 0.4,
    height: screenHeight * 0.05,
  },
  signupButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.secondary,
    borderWidth: 2,
    width: screenWidth * 0.4,
    height: screenHeight * 0.05,
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
  },
  iconApp: {
    width: screenWidth * 0.45,
    height: screenWidth * 0.45,
  },
  imgContain: {
    marginTop: screenWidth * 0.35,
    backgroundColor: '#FFFFFF',
    width: screenWidth * 0.45,
    height: screenWidth * 0.45,
    borderRadius: (screenWidth * 0.45) / 2,
    marginLeft: screenWidth * 0.3,
  },
});
export default Login;
