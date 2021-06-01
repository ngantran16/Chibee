import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
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

const ForgotPassword2 = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');
  const changeScreen = () => {
    NavigationUtils.push({ screen: 'ForgotPassword3', isTopBarEnable: false });
  };
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.loadingCheckOTP);
  const email = useSelector((state) => state.user.dataForgotPassword);
  const onSubmit = (values) => {
    const data = {
      email: email,
      code: values.otpCode,
    };
    dispatch(ProfileAction.checkOTP(data, onSuccess, onFail));
  };

  const onSuccess = () => {
    changeScreen();
  };

  const onFail = () => {
    setMessage('Mã OTP sai, vui lòng thử lại!');
    setShow(true);
  };
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => NavigationUtils.pop()}>
          <Image source={Images.back} />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Nhập mã xác nhận</Text>
        <Text />
      </View>
      <Formik
        initialValues={{
          otpCode: '',
        }}
        onSubmit={onSubmit}
        validationSchema={yup.object().shape({
          otpCode: yup.string().required('Vui lòng nhập mã xác nhận'),
        })}
      >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <View style={styles.contain}>
            <Text style={styles.txtTitle}>
              Vui lòng nhập mã OTP đã được gửi cho bạn để thay đổi lại mật khẩu mới
            </Text>

            <View style={styles.inputContain}>
              <TextInput
                value={values.email}
                style={styles.inputText}
                onChangeText={handleChange('otpCode')}
                placeholder="Ví dụ: 758853"
                onBlur={() => setFieldTouched('otpCode')}
              />
              {touched.otpCode && errors.otpCode && (
                <View style={styles.errorContain}>
                  <Icon color="#FF0000" name="exclamation-circle" size={15} />
                  <Text style={styles.error}>{errors.otpCode}</Text>
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
        onConfirmPressed={() => setShow(false)}
      />
    </View>
  );
};

export default ForgotPassword2;

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
    marginTop: 5,
    height: 20,
  },
  inputContain: {
    height: 90,
  },
});
