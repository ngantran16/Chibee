import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Dimensions } from 'react-native';
import Colors from '../../themes/Colors';
import { NavigationUtils } from '../../navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import ProfileAction from '../../redux/UserRedux/actions';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const PersonalInfo = () => {
  const dispatch = useDispatch();
  const onChangeClicked = () => {
    NavigationUtils.push({ screen: 'ChangeInfo', isTopBarEnable: false });
  };

  const token = useSelector((state) => state.login.token);

  useEffect(() => {
    dispatch(ProfileAction.userProfile(token));
  }, [dispatch, token]);

  const userInfo = useSelector((state) => state.user.user);
  const isLoading = useSelector((state) => state.user.loading);
  return (
    <View>
      {userInfo ? (
        <View>
          <View style={styles.header}>
            <Image source={{ uri: userInfo.avatar }} style={styles.imgBackground} />
            <TouchableOpacity onPress={() => NavigationUtils.pop()} style={styles.iconBack}>
              <Icon name="angle-left" size={25} />
            </TouchableOpacity>
          </View>

          <View style={styles.contentContain}>
            <View style={styles.nameContain}>
              <Image source={{ uri: userInfo.avatar }} style={styles.avatar} />
              {/* <TouchableOpacity style={styles.updateProfile} onPress={() => onChangeClicked()}>
                <Icon name="edit" size={20} color={Colors.secondary} />
              </TouchableOpacity> */}

              <Text style={styles.name}>{userInfo.full_name}</Text>
            </View>
            <View style={styles.infoContain}>
              <View style={styles.infoItem}>
                <Icon name="user" size={30} color={Colors.secondary} />
                <View style={styles.infoContent}>
                  <Text style={styles.textTitle}>Họ và tên</Text>
                  <Text style={styles.textContent}>{userInfo.full_name}</Text>
                </View>
              </View>
              <View style={styles.infoItem}>
                <Icon name="envelope" size={25} color="#FF6600" />
                <View style={styles.infoContent}>
                  <Text style={styles.textTitle}>Email</Text>
                  <Text style={styles.textContent}>{userInfo.email}</Text>
                </View>
              </View>
              <View style={styles.infoItem}>
                <Icon name="phone" size={30} color="#00FF33" />
                <View style={styles.infoContent}>
                  <Text style={styles.textTitle}>Số điện thoại</Text>
                  <Text style={styles.textContent}>{userInfo.phone_number}</Text>
                </View>
              </View>
              <View style={styles.infoItem}>
                <Icon name="birthday-cake" size={25} color="#EE0000" />
                <View style={styles.infoContent}>
                  <Text style={styles.textTitle}>Tuổi</Text>
                  <Text style={styles.textContent}>{userInfo.age}</Text>
                </View>
              </View>
            </View>
            <View>
              <TouchableOpacity style={styles.btnChangeInfo} onPress={() => onChangeClicked()}>
                <Text style={styles.btnTitle}>THAY ĐỔI THÔNG TIN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : isLoading ? (
        <ActivityIndicator size="large" color="#FF6600" />
      ) : (
        <></>
      )}
    </View>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({
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
  },
  contentContain: {
    paddingHorizontal: 18,
  },
  nameContain: {
    alignItems: 'center',
    width: Dimensions.get('window').width - 36,
    // height: screenHeight * 0.12,
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
    marginTop: 20,
    shadowColor: Colors.secondary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  btnTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  imgBackground: {
    width: screenWidth,
    height: screenHeight * 0.2,
    opacity: 0.4,
    backgroundColor: 'rgba(0,0,0,.87)',
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
  infoItem: {
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
  infoContent: {
    marginLeft: 10,
  },
  textTitle: {
    fontSize: 15,
    color: 'gray',
  },
  textContent: {
    fontSize: 18,
  },
});
