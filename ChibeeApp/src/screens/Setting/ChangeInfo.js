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
  PermissionsAndroid,
  ActivityIndicator,
} from 'react-native';
import Colors from '../../themes/Colors';
import AwesomeAlert from 'react-native-awesome-alerts';
import { NavigationUtils } from '../../navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import ProfileAction from '../../redux/UserRedux/actions';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
const TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiM2E5YzE5NmI2YjJjNGIyNmRiZGZkODE1MTNkOGVjZDIxN2E3MTUzMWE0N2QxM2M1OTQ3OWFiNWFiMzE5NzQ1OGE0NzhjOTc1NTVlNThiOWUiLCJpYXQiOjE2MTU5ODAwMTIsIm5iZiI6MTYxNTk4MDAxMiwiZXhwIjoxNjQ3NTE2MDExLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.hej0cb0MhGQwFKl66Bq0iK0M-o2yOeCWNOrp9lXj8jb2I4pdUwXsTgOJSL99Bq7XQJvYBqhVkbdfqQYSgj-Q3h3l5nvuOujdZIoR6-5Ma_VXjT9OncXo_XHDxasFTFjEmTlxUSnquMO6hcWJmqiatd8M15bcaY257KjDBdcHfTXnWCzxMyNceC4jTr_uVhGjlHwRB-Z7V7S0P4fVGF-oV5c6kbcdoAq8ktqT0FgpJNf4k4_PBP46lpteVDKhHzT5XDcXMbxSt1upEw9J_ThV0L5Ooy0w5Xu7vnfkkLFSZ0AdeT5yYuFb6XFevmmRpgIEjzt-oK8OjpsYgNWAp0D1qAnXjnnXF1gKJxkQqE0vxPrQlK18B4oJiX04XxMvmxypZakMnJMV1fEeX7XsNlth2JUvjRkMUi0Wc-e6fbuuMguKYjfNmTJqMvMDwF1yzJ1I2-Fcrg23Ixt1Cf-y19wSOfrGKSj_lV3YR5kfWQRwJIY4UwdhQyxlWPo8b0K1B_lwP8zg3qR5e7G8eNEr1IXxxk8DMXQ6CRRfESjCknvIDoDpGV-Dh2F2njEt7KAsXAeonBznbesbwkyyckCxhv1te2gC8wzqZn4fPtg8cgHgHSbS_iSsF7RvOAdeKTzm9kjOyGt_nS44RkQQ7zcRw-7fLKgt_TIr45Cstq6P2i3WkRY';

const ChangeInfo = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const userInfo = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.login.token);
  const [filePath, setFilePath] = useState({});
  const [urlImage, setUrlImage] = useState(userInfo ? userInfo.avatar : '');

  const [name, setName] = useState(userInfo ? userInfo.full_name : '');
  const [email, setEmail] = useState(userInfo ? userInfo.email : '');
  const [phone, setPhone] = useState(userInfo ? userInfo.phone_number : '');
  const [ageUser, setAgeUser] = useState(userInfo ? userInfo.age.toString() : '');

  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
        avatar: urlImage,
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
    let reg = /^[^0-9 *&^$#@!(){}\[\]\\//]+[^0-9*&^$#@!(){}\[\]\\//]+$/;
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

  const chooseFile = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        // eslint-disable-next-line no-alert
        alert(response.customButton);
      } else {
        let source = response;
        setFilePath(source);
        if (response != null) {
          const dataForm = new FormData();
          dataForm.append('folder', 'avatars');
          dataForm.append('image', {
            uri: response.assets[0].uri,
            type: response.assets[0].type,
            name: response.assets[0].fileName,
          });
          setIsLoading(true);
          axios({
            method: 'POST',
            url: 'http://dtravel.crayi.com/api/v1/image-upload',
            data: dataForm,
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: 'Bearer ' + TOKEN,
            },
          })
            .then(function (responses) {
              setIsLoading(false);
              console.log('url avtar', responses);
              if (responses.status === 200) {
                console.log('THANK CONG');
                setUrlImage(responses.data.data);
                // setIsLoading(false);
                console.log(responses.data.data);
              }
            })
            .catch(function (error) {
              console.log(error);
              console.log(error.response.data);
            });
        }
      }
    });
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
        title: 'App Camera Permission',
        message: 'App needs access to your camera ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      });
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission given');
        chooseFile();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {userInfo ? (
        <View>
          <View style={styles.header}>
            <Image source={{ uri: urlImage }} style={styles.imgBackground} />
            <TouchableOpacity onPress={() => NavigationUtils.pop()} style={styles.iconBack}>
              <Icon name="angle-left" size={25} />
            </TouchableOpacity>
            {isLoading && <ActivityIndicator size="small" color="#FF6600" />}
          </View>

          <View style={styles.contentContain}>
            {/* <Image source={Images.backgroundAvatar} style={styles.nameContain} />
            <View style={styles.avatarContain}>
              <Image source={{ uri: urlImage || '' }} style={styles.avatar} />
              <TouchableOpacity style={styles.cameraIcon} onPress={requestCameraPermission}>
                <Icon color="#4F4F4F" name="camera" size={20} />
              </TouchableOpacity>
              <Text style={styles.name}>{userInfo.full_name}</Text>
            </View> */}
            <View style={styles.nameContain}>
              <TouchableOpacity style={styles.avatar}>
                {isLoading ? (
                  <ActivityIndicator size="large" color="#FF6600" />
                ) : (
                  <Image source={{ uri: urlImage }} style={styles.avatar2} />
                )}
              </TouchableOpacity>

              <TouchableOpacity style={styles.updateProfile} onPress={requestCameraPermission}>
                <Icon name="camera" size={18} color={Colors.secondary} />
              </TouchableOpacity>

              <Text style={styles.name}>{userInfo.full_name}</Text>
            </View>

            <View>
              <View>
                <View style={styles.infoContain}>
                  <View style={styles.infoItem}>
                    <Icon name="user" size={30} color={Colors.secondary} />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={styles.title}>
                        Họ và tên<Text style={{ color: 'red' }}> *</Text>
                      </Text>
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
                  </View>
                  <View style={styles.infoItem}>
                    <Icon name="envelope" size={25} color="#FF6600" />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={styles.title}>
                        Email<Text style={{ color: 'red' }}> *</Text>
                      </Text>
                      <TextInput
                        style={[
                          styles.inputText,
                          // eslint-disable-next-line react-native/no-inline-styles
                          {
                            color: 'gray',
                            // borderBottomColor: 'gray',
                            // borderWidth: 0.5,
                            // width: screenWidth - 106,
                          },
                        ]}
                        value={email || ''}
                        editable={false}
                        onChangeText={(text) => setEmail(text)}
                      />
                    </View>
                  </View>
                  <View style={styles.infoItem}>
                    <Icon name="phone" size={30} color="#00FF33" />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={styles.title}>
                        Số điện thoại<Text style={{ color: 'red' }}> *</Text>
                      </Text>
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
                  </View>
                  <View style={styles.infoItem}>
                    <Icon name="birthday-cake" size={25} color="#EE0000" />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={styles.title}>
                        Tuổi<Text style={{ color: 'red' }}> *</Text>
                      </Text>
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
              </View>
              <TouchableOpacity style={styles.btnChangeInfo} onPress={() => onSave()}>
                <Text style={styles.btnTitle}>LƯU</Text>
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
        </View>
      ) : (
        <Text>Vui lòng thử lại sau</Text>
      )}
    </ScrollView>
  );
};

export default ChangeInfo;

const styles = StyleSheet.create({
  // header: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   borderBottomWidth: 0.5,
  //   borderBottomColor: '#BBBBBB',
  //   paddingHorizontal: 18,
  //   height: Dimensions.get('window').height * 0.04,
  //   paddingBottom: 5,
  //   marginTop: 20,
  // },
  titleHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
  avatar: {
    width: screenHeight * 0.12,
    height: screenHeight * 0.12,
    borderRadius: (screenHeight * 0.12) / 2,
    marginTop: -screenHeight * 0.05,
    marginBottom: screenHeight * 0.005,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
  },
  avatar2: {
    width: screenHeight * 0.12,
    height: screenHeight * 0.12,
    borderRadius: (screenHeight * 0.12) / 2,
  },
  updateProfile: {
    marginLeft: screenHeight * 0.06,
    marginTop: -screenHeight * 0.04,
    width: screenHeight * 0.035,
    height: screenHeight * 0.035,
    backgroundColor: 'white',
    padding: 4,
    borderRadius: (screenHeight * 0.035) / 2,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  nameContain: {
    alignItems: 'center',
    width: Dimensions.get('window').width - 36,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: screenHeight * 0.1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  contentContain: {
    paddingHorizontal: 18,
  },
  nameContain2: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.25,
    resizeMode: 'contain',
    backgroundColor: '#ADDFFF',
    opacity: 0.7,
  },
  name: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
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
    marginTop: 10,
    marginBottom: screenHeight * 0.15,
  },
  btnTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  title: {
    fontSize: 15,
    color: 'black',
  },
  inputText: {
    fontSize: 18,
    height: 40,
    fontWeight: '600',
    color: '#363636',
    width: screenWidth - 100,
  },
  infoItem: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
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
  avatarContain: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -screenHeight * 0.07,
  },
  cameraIcon: {
    marginTop: -screenHeight * 0.035,
    marginLeft: screenWidth * 0.2,
    backgroundColor: '#F5F5F5',
    padding: 5,
    width: screenWidth * 0.08,
    height: screenWidth * 0.08,
    borderRadius: (screenWidth * 0.08) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#D3D3D3',
  },
  imgBackground: {
    width: screenWidth,
    height: screenHeight * 0.2,
    opacity: 0.4,
    backgroundColor: 'rgba(0,0,0,.87)',
  },
  iconBack: {
    marginTop: -screenHeight * 0.19,
    marginLeft: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
});
