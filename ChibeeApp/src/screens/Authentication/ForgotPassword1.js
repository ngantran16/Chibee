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

const ForgotPassword1 = () => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');
  const changeScreen = () => {
    NavigationUtils.push({ screen: 'ForgotPassword2', isTopBarEnable: false });
  };
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.loadingForgotPassword);
  const onSubmit = (values) => {
    dispatch(ProfileAction.forgotPassword(values, onSuccess, onFail));
  };

  const onSuccess = () => {
    changeScreen();
  };

  const onFail = () => {
    setMessage('Gửi email thất bại, vui lòng thử lại!');
    setMessage(true);
  };
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => NavigationUtils.pop()}>
          <Image source={Images.back} />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Quên mật khẩu</Text>
        <Text />
      </View>
      <Formik
        initialValues={{
          email: '',
        }}
        onSubmit={onSubmit}
        validationSchema={yup.object().shape({
          email: yup.string().email('Vui lòng nhập email hợp lệ').required('Vui lòng nhập email'),
        })}
      >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <View style={styles.contain}>
            <Text style={styles.txtTitle}>Vui lòng nhập email của bạn để nhận mã xác nhận</Text>

            <View style={styles.inputContain}>
              <TextInput
                value={values.email}
                style={styles.inputText}
                onChangeText={handleChange('email')}
                placeholder="Ví dụ: ngantran@gmail.com"
                onBlur={() => setFieldTouched('email')}
              />
              {touched.email && errors.email && (
                <View style={styles.errorContain}>
                  <Icon color="#FF0000" name="exclamation-circle" size={15} />
                  <Text style={styles.error}>{errors.email}</Text>
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

export default ForgotPassword1;

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
