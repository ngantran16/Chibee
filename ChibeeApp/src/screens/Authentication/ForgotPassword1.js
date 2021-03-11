import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { NavigationUtils } from '../../navigation';
import Images from '../../themes/Images';
import Colors from '../../themes/Colors';

const ForgotPassword1 = () => {
  const [email, setEmail] = useState('tuyetngan@gmail.com');
  const onContinueClicked = () => {
    NavigationUtils.push({ screen: 'ForgotPassword2', isTopBarEnable: false });
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
      <View style={styles.contain}>
        <Text style={styles.txtTitle}>Vui lòng nhập email của bạn để nhận mã xác nhận</Text>
        <TextInput style={styles.inputText} value={email} onChangeText={(text) => setEmail(text)} />
        <TouchableOpacity style={styles.btnContain} onPress={() => onContinueClicked()}>
          <Text style={styles.btnText}>Tiếp theo</Text>
        </TouchableOpacity>
      </View>
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
    borderWidth: 0.3,
    borderColor: 'gray',
    backgroundColor: '#EEEEEE',
  },
  btnContain: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.secondary,
    width: 120,
    height: 40,
    marginTop: 35,
  },
  btnText: {
    color: 'gray',
  },
});
