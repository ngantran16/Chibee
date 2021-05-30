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
  TextInput,
  Dimensions,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationUtils } from '../../navigation';
import SignUpTypes from '../../redux/SignUpRedux/actions';
import * as yup from 'yup';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';
import SignUpFormValidation from '../../components/SignUp/validationSchema';
import Images from '../../themes/Images';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const SignUp = (props) => {
  const [] = useState(true);
  const dispatch = useDispatch();
  const errorSignUp = useSelector((state) => state.signUp.errorSignUp);
  const [isShowPassword, setShowPass] = useState(false);
  const [isShowConfirm, setIsShowConfirm] = useState(false);

  const [error, setError] = useState('');
  const onLogin = () => {
    NavigationUtils.push({ screen: 'Login', isTopBarEnable: false });
  };

  const onSubmit = (values) => {
    const data = {
      full_name: values.name,
      email: values.email,
      password: values.password,
      phone_number: values.phone,
      age: parseInt(values.age, 10),
    };
    dispatch(SignUpTypes.userSignUp(data, onSuccess, onFail));
  };

  const onSuccess = () => {
    console.log('Success');
  };

  const onFail = (errorSignUp) => {
    errorSignUp ? setError(errorSignUp) : setError('Đăng ký thất bại. Vui lòng thử lại!');
  };

  const isLoading = useSelector((state) => state.signUp.loadingSignUp);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.layoutTitle}>
        <TouchableOpacity onPress={onLogin}>
          <Image source={Images.cancelIcon} style={{ marginTop: 4 }} />
        </TouchableOpacity>
        <Text style={styles.title}>Đăng ký</Text>
      </View>

      {error ? (
        <View style={styles.errorContain}>
          <Icon color="#FF0000" name="exclamation-circle" size={15} />
          <Text style={styles.error}>{error}</Text>
        </View>
      ) : (
        <></>
      )}

      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          age: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={onSubmit}
        validationSchema={SignUpFormValidation}
      >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <View style={styles.formContainer}>
            <View style={styles.layoutInput}>
              <Text style={styles.titleInput}>
                Họ và tên
                <Text style={{ color: 'red' }}> *</Text>
              </Text>
              <TextInput
                value={values.name}
                style={styles.textInput}
                onChangeText={handleChange('name')}
                onBlur={() => setFieldTouched('name')}
                placeholder="Ví dụ: Nguyễn Văn Trí"
              />
              {touched.name && errors.name && (
                <View style={styles.errorContain}>
                  <Icon color="#FF0000" name="exclamation-circle" size={15} />
                  <Text style={styles.error}>{errors.name}</Text>
                </View>
              )}
            </View>
            <View style={styles.layoutInput}>
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

            <View style={styles.layoutInput}>
              <Text style={styles.titleInput}>
                Số điện thoại
                <Text style={{ color: 'red' }}> *</Text>
              </Text>
              <TextInput
                value={values.phone}
                style={styles.textInput}
                onChangeText={handleChange('phone')}
                onBlur={() => setFieldTouched('phone')}
                placeholder="Ví dụ: 0397739325"
              />
              {touched.phone && errors.phone && (
                <View style={styles.errorContain}>
                  <Icon color="#FF0000" name="exclamation-circle" size={15} />
                  <Text style={styles.error}>{errors.phone}</Text>
                </View>
              )}
            </View>

            <View style={styles.layoutInput}>
              <Text style={styles.titleInput}>
                Tuổi
                <Text style={{ color: 'red' }}> *</Text>
              </Text>
              <TextInput
                value={values.age}
                style={styles.textInput}
                onChangeText={handleChange('age')}
                onBlur={() => setFieldTouched('age')}
                placeholder="Ví dụ: 6"
              />
              {touched.age && errors.age && (
                <View style={styles.errorContain}>
                  <Icon color="#FF0000" name="exclamation-circle" size={15} />
                  <Text style={styles.error}>{errors.age}</Text>
                </View>
              )}
            </View>

            <View style={styles.layoutInput}>
              <Text style={styles.titleInput}>
                Mật khẩu
                <Text style={{ color: 'red' }}> *</Text>
              </Text>
              <TextInput
                secureTextEntry={isShowPassword}
                value={values.password}
                style={styles.textInput}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
              />
              <TouchableOpacity
                style={styles.showPassword}
                onPress={() => {
                  setShowPass(!isShowPassword);
                }}
              >
                {isShowPassword ? (
                  <Image source={Images.visibility2} />
                ) : (
                  <Image source={Images.visibility} />
                )}
              </TouchableOpacity>
              {touched.password && errors.password && (
                <View style={styles.errorContain}>
                  <Icon color="#FF0000" name="exclamation-circle" size={15} />
                  <Text style={styles.error}>{errors.password}</Text>
                </View>
              )}
            </View>

            <View style={styles.layoutInput}>
              <Text style={styles.titleInput}>
                Xác nhận mật khẩu
                <Text style={{ color: 'red' }}> *</Text>
              </Text>
              <TextInput
                secureTextEntry={isShowConfirm}
                value={values.confirmPassword}
                style={styles.textInput}
                onChangeText={handleChange('confirmPassword')}
                onBlur={() => setFieldTouched('confirmPassword')}
              />
              <TouchableOpacity
                style={styles.showPassword}
                onPress={() => {
                  setIsShowConfirm(!isShowConfirm);
                }}
              >
                {isShowConfirm ? (
                  <Image source={Images.visibility2} />
                ) : (
                  <Image source={Images.visibility} />
                )}
              </TouchableOpacity>
              {touched.confirmPassword && errors.confirmPassword && (
                <View style={styles.errorContain}>
                  <Icon color="#FF0000" name="exclamation-circle" size={15} />
                  <Text style={styles.error}>{errors.confirmPassword}</Text>
                </View>
              )}
            </View>
            {isLoading ? (
              <View style={styles.layoutButton}>
                <TouchableOpacity
                  style={styles.signUpButton}
                  onPress={handleSubmit}
                  disabled={!isValid}
                >
                  <ActivityIndicator size="large" color="#FF6600" />
                  <Text style={styles.textSignUp}>Đăng ký</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.layoutButton}>
                <TouchableOpacity style={styles.loginButton} onPress={onLogin} display>
                  <Text style={styles.textLogin}>Đăng nhập</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.signUpButton}
                  onPress={handleSubmit}
                  disabled={!isValid}
                >
                  <Text style={styles.textSignUp}>Đăng ký</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      </Formik>
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
    marginBottom: 8,
  },
  layoutButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  loginButton: {
    width: screenWidth * 0.3,
    height: screenHeight * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#41B8C1',
    borderWidth: 2,
    borderRadius: 5,
  },
  signUpButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#41B8C1',
    borderColor: '#41B8C1',
    borderWidth: 2,
    borderRadius: 5,
    flexDirection: 'row',
    width: screenWidth * 0.3,
    height: screenHeight * 0.05,
  },
  textSignUp: {
    color: 'white',
  },
  textLogin: {
    color: 'black',
  },
  policy: {
    marginTop: 20,
    paddingHorizontal: 10,
    color: 'gray',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
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
  layoutInput: {
    height: screenHeight * 0.1,
    marginBottom: 5,
  },
  titleInput: {
    color: 'gray',
    fontSize: 15,
    marginBottom: 5,
  },
  textInput: {
    height: 45,
    borderColor: '#ACA9A9',
    borderWidth: 1,
    marginBottom: 2,
    borderRadius: 5,
  },
  error: {
    fontSize: 12,
    color: '#FF0D10',
    marginLeft: 5,
  },
  errorContain: {
    flexDirection: 'row',
  },
});
