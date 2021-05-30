import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import Colors from '../../themes/Colors';
import AwesomeAlert from 'react-native-awesome-alerts';
import { NavigationUtils } from '../../navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import ProfileAction from '../../redux/UserRedux/actions';
import { screenWidth } from '../../utils/Tools';

const ChangeInfo = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const userInfo = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.login.token);

  const [name, setName] = useState(userInfo ? userInfo.full_name : '');
  const [email, setEmail] = useState(userInfo ? userInfo.email : '');
  const [phone, setPhone] = useState(userInfo ? userInfo.phone_number : '');
  const [ageUser, setAgeUser] = useState(userInfo ? userInfo.age.toString() : '');

  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [ageError, setAgeError] = useState('');

  const onSave = () => {
    setNameError('');
    setPhoneError('');
    setAgeError('');

    if (
      name === '' ||
      phone === '' ||
      ageUser === '' ||
      !validateNumber(phone) ||
      phone.length < 10 ||
      phone.length > 11 ||
      !validateName(name) ||
      !validateNumber(ageUser) ||
      ageUser.length > 2
    ) {
      if (name === '') {
        setNameError('Vui lòng nhập tên');
      } else if (!validateName(name)) {
        setNameError('Vui lòng nhập tên hợp lệ');
      }
      if (phone === '') {
        setPhoneError('Vui lòng nhập số điện thoại');
      } else if (!validateNumber(phone) || phone.length > 11 || phone.length < 10) {
        setPhoneError('Vui lòng nhập số điện thoại hợp lệ');
      }
      if (ageUser === '') {
        setAgeError('Vui lòng nhập tuổi');
      } else if (!validateNumber(ageUser) || ageUser.length > 2) {
        setAgeError('Vui lòng nhập số tuổi hợp lệ');
      }
    } else {
      const info = {
        token: token,
        avatar: 'https://docs.google.com/uc?export=download&id=1DpdiYsYZc2mH4yis6ZG-HNcInKsB71Lg',
        full_name: name,
        phone_number: phone,
        age: parseInt(ageUser, 10),
      };

      dispatch(ProfileAction.updateProfile(info, onSuccess, onFail));
    }
  };

  const onSuccess = () => {
    setShow(true);
  };

  const changeScreen = () => {
    setShow(false);
    NavigationUtils.push({ screen: 'PersonalInfo', isTopBarEnable: false });
  };

  const onFail = () => {
    console.log('UPDATE FAIL');
  };

  const validateName = (text) => {
    let reg = /^[A-Za-z ]*$/;
    if (reg.test(text) === false) {
      return false;
    }
    return true;
  };

  const validateNumber = (text) => {
    let reg = /^(\s*|\d+)$/;
    if (reg.test(text) === false) {
      return false;
    }
    return true;
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => NavigationUtils.pop()}>
          <Icon name="angle-left" size={25} />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Thay đổi thông tin</Text>
        <Text />
      </View>
      {userInfo ? (
        <View>
          <View style={styles.contentContain}>
            <View>
              <View style={styles.nameContain}>
                <Image source={{ uri: userInfo.avatar || '' }} style={styles.avatar} />
                <Text style={styles.name}>{userInfo.full_name}</Text>
              </View>
              <View style={styles.infoContain}>
                <View style={styles.infoItem}>
                  <Text style={styles.title}>Họ và tên</Text>
                  <TextInput
                    style={styles.inputText}
                    value={name || ''}
                    onChangeText={(text) => setName(text)}
                    maxLength={100}
                  />
                  {nameError ? (
                    <View style={styles.errorContain}>
                      <Icon color="#FF0000" name="exclamation-circle" size={15} />
                      <Text style={styles.error}>{nameError}</Text>
                    </View>
                  ) : (
                    <></>
                  )}
                </View>
                <View style={styles.infoItem}>
                  <Text style={styles.title}>Email</Text>
                  <TextInput
                    style={styles.inputText}
                    value={email || ''}
                    editable={false}
                    onChangeText={(text) => setEmail(text)}
                  />
                </View>
                <View style={styles.infoItem}>
                  <Text style={styles.title}>Số điện thoại</Text>
                  <TextInput
                    style={styles.inputText}
                    keyboardType="numeric"
                    value={phone || ''}
                    onChangeText={(text) => setPhone(text)}
                  />
                  {phoneError ? (
                    <View style={styles.errorContain}>
                      <Icon color="#FF0000" name="exclamation-circle" size={15} />
                      <Text style={styles.error}>{phoneError}</Text>
                    </View>
                  ) : (
                    <></>
                  )}
                </View>
                <View style={styles.infoItem}>
                  <Text style={styles.title}>Tuổi</Text>
                  <TextInput
                    keyboardType="numeric"
                    style={styles.inputText}
                    value={ageUser}
                    onChangeText={(text) => setAgeUser(text)}
                  />
                  {ageError ? (
                    <View style={styles.errorContain}>
                      <Icon color="#FF0000" name="exclamation-circle" size={15} />
                      <Text style={styles.error}>{ageError}</Text>
                    </View>
                  ) : (
                    <></>
                  )}
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.btnChangeInfo} onPress={() => onSave()}>
              <Text style={styles.btnTitle}>Lưu</Text>
            </TouchableOpacity>
          </View>
          <AwesomeAlert
            show={show}
            showProgress={false}
            title="Xác nhận"
            message="Bạn đã cập nhật thông tin thành công!"
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            showConfirmButton={true}
            confirmText="OK"
            confirmButtonColor={Colors.primary}
            onConfirmPressed={() => changeScreen()}
          />
        </View>
      ) : (
        <Text>Vui lòng thử lại sau</Text>
      )}
    </ScrollView>
  );
};

export default ChangeInfo;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#BBBBBB',
    paddingHorizontal: 18,
    height: Dimensions.get('window').height * 0.04,
    paddingBottom: 5,
    marginTop: 20,
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
    flexDirection: 'column',
    // justifyContent: 'space-between',
    height: Dimensions.get('window').height * 0.95,
  },
  nameContain: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('window').width - 36,
    height: 150,
    backgroundColor: Colors.secondary,
    marginTop: 10,
    borderRadius: 10,
  },
  name: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  infoContain: {
    marginTop: 20,
  },
  btnChangeInfo: {
    width: Dimensions.get('window').width - 36,
    height: 50,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btnTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
  inputText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    height: 50,
    borderWidth: 0.3,
    borderRadius: 5,
    borderColor: 'gray',
    backgroundColor: '#EEEEEE',
  },
  infoItem: {
    marginBottom: 5,
    height: screenWidth * 0.25,
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
});
