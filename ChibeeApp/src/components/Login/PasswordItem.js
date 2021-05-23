/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
// import Icon from 'react-native-vector-icons/thebook-appicon';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
const PasswordItem = (props) => {
  const [isShowPassword, setShowPass] = useState(true);
  return (
    <View style={styles.layoutInput}>
      <Text style={styles.titleInput}>
        {props.title}
        <Text style={{ color: 'red' }}> *</Text>
      </Text>
      <TextInput
        secureTextEntry={isShowPassword}
        style={styles.textInput}
        onChangeText={(value) => props.onChangePass(value)}
      />
      <TouchableOpacity
        style={styles.showPassword}
        onPress={() => {
          setShowPass(!isShowPassword);
        }}
      >
        {isShowPassword ? <Image source={props.imageClose} /> : <Image source={props.imageOpen} />}
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  titleInput: {
    color: 'gray',
    fontSize: 15,
  },
  textInput: {
    marginTop: 5,
    height: 45,
    borderColor: '#ACA9A9',
    borderWidth: 1,
    borderRadius: 5,
  },
  showPassword: {
    position: 'absolute',
    right: 10,
    top: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
export default PasswordItem;
