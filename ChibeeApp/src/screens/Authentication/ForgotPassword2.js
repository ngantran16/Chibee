import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { NavigationUtils } from '../../navigation';
import Images from '../../themes/Images';
import Colors from '../../themes/Colors';

const ForgotPassword1 = () => {
  const [confirmCode, setConfirmCode] = useState('76909');
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => NavigationUtils.pop()}>
          <Image source={Images.back} />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Nhập mã xác nhận</Text>
        <Text />
      </View>
      <View style={styles.contain}>
        <Text style={styles.txtTitle}>
          Vui lòng nhập mã xác nhận của bạn để thay đổi lại mật khẩu mới
        </Text>
        <TextInput
          style={styles.inputText}
          value={confirmCode}
          onChangeText={(text) => setConfirmCode(text)}
        />
        <TouchableOpacity style={styles.btnContain}>
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
    backgroundColor: Colors.secondary,
    width: 120,
    height: 40,
    marginTop: 35,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
