import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import { NavigationUtils } from '../../navigation';
import Images from '../../themes/Images';
import Colors from '../../themes/Colors';
import * as yup from 'yup';
import { Formik } from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileAction from '../../redux/UserRedux/actions';
import { useDispatch, useSelector } from 'react-redux';
import AwesomeAlert from 'react-native-awesome-alerts';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const ForgotPassword3 = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirm, setIsShowConfirm] = useState(false);
  const [error, setError] = useState('');
  const changeScreen = () => {
    NavigationUtils.push({ screen: 'Login', isTopBarEnable: false });
  };
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.loadingSetPassword);
  const tokenOTP = useSelector((state) => state.user.dataCheckOTP.token);
  const onSubmit = (values) => {
    setError('');
    const data = {
      token: tokenOTP,
      password: values.password,
    };
    dispatch(ProfileAction.setPassword(data, onSuccess, onFail));
  };

  const onSuccess = () => {
    setMessage('Đổi mật khẩu thành công');
    setShow(true);
  };

  const onFail = () => {
    setError('Đổi mật khẩu thất bại, vui lòng thử lại');
  };
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => NavigationUtils.pop()}>
          <Image source={Images.back} />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Nhập mật khẩu mới</Text>
        <Text />
      </View>
      <Formik
        initialValues={{
          password: '',
          confirm: '',
        }}
        onSubmit={onSubmit}
        validationSchema={yup.object().shape({
          password: yup
            .string()
            .required('Vui lòng nhập mật khẩu')
            .min(6, 'Vui lòng nhập mật khẩu ít nhất 6 kí tự')
            .max(15, 'Vui lòng nhập mật khẩu ít hơn 15 kí tự'),
          confirm: yup
            .string()
            .required('Vui lòng xác nhận mật khẩu')
            .oneOf([yup.ref('password'), null], 'Mật khẩu không khớp'),
        })}
      >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <View style={styles.contain}>
            <Text style={styles.txtTitle}>Vui lòng nhập mật khẩu mới</Text>
            <View style={styles.errorSwapper}>
              {error ? (
                <View style={styles.errorContain}>
                  <Icon color="#FF0000" name="exclamation-circle" size={15} />
                  <Text style={styles.error}>{error}</Text>
                </View>
              ) : (
                <></>
              )}
            </View>
            <View style={styles.inputContain}>
              <View>
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
            </View>

            <View style={styles.inputContain}>
              <Text style={styles.titleInput}>
                Xác nhận mật khẩu
                <Text style={{ color: 'red' }}> *</Text>
              </Text>
              <TextInput
                secureTextEntry={!isShowConfirm}
                value={values.confirm}
                style={styles.textInput}
                onChangeText={handleChange('confirm')}
                onBlur={() => setFieldTouched('confirm')}
              />
              <TouchableOpacity
                style={styles.showPassword}
                onPress={() => {
                  setIsShowConfirm(!isShowConfirm);
                }}
              >
                {isShowConfirm ? (
                  <Image source={Images.visibility} />
                ) : (
                  <Image source={Images.visibility2} />
                )}
              </TouchableOpacity>
              {touched.confirm && errors.confirm && (
                <View style={styles.errorContain}>
                  <Icon color="#FF0000" name="exclamation-circle" size={15} />
                  <Text style={styles.error}>{errors.confirm}</Text>
                </View>
              )}
            </View>
            <TouchableOpacity style={styles.btnContain} disabled={!isValid} onPress={handleSubmit}>
              {isLoading ? <ActivityIndicator size="large" color="#FF6600" /> : <></>}
              <Text style={styles.btnText}>Tiếp theo</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <AwesomeAlert
        show={show}
        showProgress={false}
        title="Xác nhận"
        message={message}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="OK"
        confirmButtonColor={Colors.primary}
        onConfirmPressed={() => changeScreen()}
      />
    </View>
  );
};

export default ForgotPassword3;

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
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
    color: 'black',
  },
  txtTitle: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
  contain: {
    paddingHorizontal: 18,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
    height: 50,
    width: 350,
    borderWidth: 0.5,
    borderColor: 'gray',
    backgroundColor: '#EEEEEE',
    borderRadius: 5,
  },
  btnContain: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    width: 120,
    height: 40,
    marginTop: 20,
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
  error: {
    fontSize: 12,
    color: '#FF0D10',
    marginLeft: 5,
  },
  errorContain: {
    flexDirection: 'row',
    height: 20,
  },
  inputContain: {
    height: screenHeight * 0.105,
    marginBottom: 10,
  },
  textInput: {
    height: 45,
    width: screenWidth * 0.8,
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
  errorSwapper: {
    width: screenWidth * 0.8,
    height: 20,
  },
});
