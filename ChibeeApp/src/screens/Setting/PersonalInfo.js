import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Images from '../../themes/Images';
import { Dimensions } from 'react-native';
import Colors from '../../themes/Colors';
import PersonalInfoItem from '../../components/Setting/PersonalInfoItem';
import { NavigationUtils } from '../../navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';

const PersonalInfo = () => {
  const onChangeClicked = () => {
    NavigationUtils.push({ screen: 'ChangeInfo', isTopBarEnable: false });
  };
  const userInfo = useSelector((state) => state.user.user);
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => NavigationUtils.pop()}>
          <Icon name="angle-left" size={25} />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Thông tin cá nhân</Text>
        <Text />
      </View>
      <View style={styles.contentContain}>
        <View style={styles.nameContain}>
          <Image source={{ uri: userInfo.avatar }} style={styles.avatar} />
          <Text style={styles.name}>{userInfo.full_name}</Text>
        </View>
        <View style={styles.infoContain}>
          <PersonalInfoItem titleName="Họ và tên" information={userInfo.full_name} />
          <PersonalInfoItem titleName="Email" information={userInfo.email} />
          <PersonalInfoItem titleName="Số điện thoại" information={userInfo.phone_number} />
        </View>
        <View>
          <TouchableOpacity style={styles.btnChangeInfo} onPress={() => onChangeClicked()}>
            <Text style={styles.btnTitle}>Thay đổi thông tin</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
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
  },
  nameContain: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('window').width - 36,
    height: 150,
    backgroundColor: Colors.secondary,
    marginTop: 10,
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
    marginTop: 20,
  },
  btnTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
