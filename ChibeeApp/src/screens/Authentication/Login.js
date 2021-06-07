import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Image,
  Dimensions,
  ImageBackground,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationUtils } from '../../navigation';
import Images from '../../themes/Images';
import Colors from '../../themes/Colors';
import { useDispatch, useSelector } from 'react-redux';
import LoginTypes from '../../redux/LoginRedux/actions';
import * as yup from 'yup';
import { Formik } from 'formik';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
const Login = () => {
  const [] = useState(true);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.login.loadingLogin);
  const isError = useSelector((state) => state.login.errorLogin);

  const [isShowPassword, setIsShowPassword] = useState(false);

  const onSignUpHandel = () => {
    NavigationUtils.push({ screen: 'SignUp', isTopBarEnable: false });
  };
  const onLogin = (values) => {
    dispatch(LoginTypes.userLogin(values));
  };

  const onForgotPassword = () => {
    NavigationUtils.push({ screen: 'ForgotPassword1', isTopBarEnable: false });
  };
  return (
    <ImageBackground source={Images.backgroundLogin} style={styles.imageBackground}>
      <ScrollView style={styles.sessionContain} showsVerticalScrollIndicator={false}>
        <View style={styles.loginForm}>
          <View style={styles.imgContain}>
            <Image source={Images.intro2} style={styles.iconApp} />
          </View>
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
            }}
            onSubmit={onLogin}
            validationSchema={yup.object().shape({
              email: yup
                .string()
                .email('Vui lòng nhập email hợp lệ')
                .required('Vui lòng nhập email'),
              password: yup
                .string()
                .min(6, 'Vui lòng nhập mật khẩu it nhất 6 kí tự')
                .max(15, 'Vui lòng nhập mật khẩu ít hơn 15 kí tự')
                .required('Vui lòng nhập mật khẩu'),
            })}
          >
            {({
              values,
              handleChange,
              errors,
              setFieldTouched,
              touched,
              isValid,
              handleSubmit,
            }) => (
              <View style={styles.container}>
                <View style={styles.layoutTitle}>
                  <Text style={styles.title}> Đăng nhập </Text>
                  {isError ? (
                    <View style={styles.errorHeader}>
                      <Icon color="#FF0000" name="exclamation-circle" size={18} />
                      <Text style={styles.error}>Email hoặc mật khẩu không đúng</Text>
                    </View>
                  ) : (
                    <></>
                  )}
                </View>
                <View style={styles.inputSession}>
                  <Text style={styles.titleInput}>
                    Email
                    <Text style={{ color: 'red' }}> *</Text>
                  </Text>
                  <TextInput
                    value={values.email}
                    style={styles.textInput}
                    onChangeText={handleChange('email')}
                    onBlur={() => setFieldTouched('email')}
                    placeholder="Ví dụ: ngan@gmail.com"
                  />
                  {touched.email && errors.email && (
                    <View style={styles.errorContain}>
                      <Icon color="#FF0000" name="exclamation-circle" size={15} />
                      <Text style={styles.error}>{errors.email}</Text>
                    </View>
                  )}
                </View>
                <View style={styles.inputSession}>
                  <Text style={styles.titleInput}>
                    Mật khẩu
                    <Text style={{ color: 'red' }}> *</Text>
                  </Text>
                  <TextInput
                    secureTextEntry={!isShowPassword}
                    value={values.password}
                    style={styles.textInput}
                    onChangeText={handleChange('password')}
                    onBlur={() => setFieldTouched('password')}
                  />
                  <TouchableOpacity
                    style={styles.showPassword}
                    onPress={() => {
                      setIsShowPassword(!isShowPassword);
                    }}
                  >
                    {isShowPassword ? (
                      <Image source={Images.visibility} />
                    ) : (
                      <Image source={Images.visibility2} />
                    )}
                  </TouchableOpacity>
                  {touched.password && errors.password && (
                    <View style={styles.errorContain}>
                      <Icon color="#FF0000" name="exclamation-circle" size={15} />
                      <Text style={styles.error}>{errors.password}</Text>
                    </View>
                  )}
                </View>
                <View style={styles.layoutButton}>
                  <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
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
            )}
          </Formik>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  loginForm: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: screenHeight * 0.07,
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
    marginLeft: 5,
  },
  inputSession: {
    height: screenHeight * 0.1,
    marginTop: 8,
  },
  imageBackground: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  textInput: {
    height: 45,
    borderColor: '#ACA9A9',
    borderWidth: 1,
    marginBottom: 2,
    borderRadius: 5,
  },
  titleInput: {
    marginBottom: 5,
    color: 'black',
  },
  showPassword: {
    position: 'absolute',
    right: 10,
    top: 38,
  },
  errorContain: {
    flexDirection: 'row',
  },
  errorHeader: {
    flexDirection: 'row',
    marginTop: 10,
  },
});
export default Login;
