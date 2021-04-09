import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import Images from '../../themes/Images';
import { Dimensions } from 'react-native';
import Colors from '../../themes/Colors';
import { NavigationUtils } from '../../navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

const ChangeInfo = () => {
  const [name, setName] = useState('Nguyễn Minh Anh');
  const [email, setEmail] = useState('anhlinh@gmail.com');
  const [phone, setPhone] = useState('0254326458');

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => NavigationUtils.pop()}>
          <Icon name="angle-left" size={25} />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Thay đổi thông tin</Text>
        <Text />
      </View>
      <View style={styles.contentContain}>
        <View style={styles.nameContain}>
          <Image source={Images.avatar} style={styles.avatar} />
          <Text style={styles.name}>Nguyễn Minh Anh</Text>
        </View>
        <View style={styles.infoContain}>
          <View style={styles.infoItem}>
            <Text style={styles.title}>Họ và tên</Text>
            <TextInput
              style={styles.inputText}
              value={name}
              onChangeText={(text) => setName(text)}
            />
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.title}>Email</Text>
            <TextInput
              style={styles.inputText}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.title}>Số điện thoại</Text>
            <TextInput
              style={styles.inputText}
              value={phone}
              onChangeText={(text) => setPhone(text)}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.btnChangeInfo}>
            <Text style={styles.btnTitle}>Lưu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChangeInfo;

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
    marginTop: 40,
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
    marginBottom: 20,
  },
});
