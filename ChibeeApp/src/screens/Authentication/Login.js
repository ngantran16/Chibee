import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Formik } from 'formik';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
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
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.login.loadingLogin);
  const isError = useSelector((state) => state.login.errorLogin);
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const validateEmail = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      return false;
    }
    return true;
  };

  const onSignUpHandel = () => {
    NavigationUtils.push({ screen: 'SignUp', isTopBarEnable: false });
  };
  const onLogin = () => {
    setErrorEmail('');
    setErrorPassword('');
    if (email === '' || password === '' || validateEmail(email) === false) {
      if (email === '') {
        setErrorEmail('Email is required');
      } else if (validateEmail(email) === false) {
        setErrorEmail('Please input a valid email');
      }
      if (password === '') {
        setErrorPassword('Password is required');
      }
    } else {
      const dataLogin = {
        email: email,
        password: password,
      };
      console.log(dataLogin);
      dispatch(LoginTypes.userLogin(dataLogin));
    }
  };

  const onForgotPassword = () => {
    NavigationUtils.push({ screen: 'ForgotPassword1', isTopBarEnable: false });
  };
  return (
    <ScrollView style={styles.sessionContain} showsVerticalScrollIndicator={false}>
      <View style={styles.loginForm}>
        <View style={styles.imgContain}>
          <Image source={Images.intro2} style={styles.iconApp} />
        </View>
        <View style={styles.container}>
          <View style={styles.layoutTitle}>
            <Text style={styles.title}> Đăng nhập </Text>
            {isError ? (
              <Text style={styles.error}>
                <Icon color="#FF0000" name="error" size={20} /> Username or password incorrect
              </Text>
            ) : (
              <></>
            )}
          </View>
          <View style={styles.inputSession}>
            <TextInputItem title="Email" ChangeText={(val) => setEmail(val)} />
            {errorEmail ? <Text style={styles.error}>{errorEmail}</Text> : <></>}
          </View>
          <View style={styles.inputSession}>
            <PasswordItem
              title="Mật khẩu"
              imageClose={Images.visibility2}
              imageOpen={Images.visibility}
              onChangePass={(val) => setPassword(val)}
            />
            {errorPassword ? <Text style={styles.error}>{errorPassword}</Text> : <></>}
          </View>
          <View style={styles.layoutButton}>
            <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
              {isLoading && <ActivityIndicator size="large" color="#FF6600" />}
              <Text style={styles.textSignUp}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => onForgotPassword()}>
            <Text style={styles.policy}> Quên mật khẩu? </Text>
            <TouchableOpacity onPress={onSignUpHandel}>
              <Text style={styles.signUp}>Đăng ký</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: screenHeight * 0.44,
  },
  sessionContain: {
    backgroundColor: '#ADDFFF',
  },
  loginForm: {
    width: screenWidth * 0.9,
    height: screenHeight * 0.58,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: screenHeight * 0.15,
    marginLeft: screenWidth * 0.05,
    borderRadius: 10,
  },
  layoutTitle: {
    marginBottom: 30,
    height: 35,
  },
  closeImage: {
    height: 20,
    width: 20,
    marginTop: 7,
  },
  title: {
    color: '#505050',
    fontSize: 26,
    width: screenWidth * 0.8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  layoutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  loginButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    borderColor: Colors.secondary,
    borderWidth: 2,
    width: screenWidth * 0.3,
    height: screenHeight * 0.05,
    borderRadius: 5,
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
    fontWeight: 'bold',
  },
  policy: {
    marginTop: 10,
    paddingHorizontal: 10,
    color: 'gray',
    textAlign: 'center',
    fontSize: 16,
  },
  signUp: {
    color: Colors.secondary,
    paddingHorizontal: 10,
    textAlign: 'center',
    fontSize: 18,
  },
  iconApp: {
    width: screenWidth * 0.3,
    height: screenWidth * 0.3,
  },
  imgContain: {
    width: screenWidth * 0.3,
    height: screenWidth * 0.3,
    borderRadius: (screenWidth * 0.3) / 2,
  },
  error: {
    color: '#FF0000',
  },
  inputSession: {
    height: 85,
    marginTop: 8,
  },
});
export default Login;
