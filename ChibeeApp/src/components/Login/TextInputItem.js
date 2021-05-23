/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
const TextInputItem = (props) => {
  return (
    <View style={styleInput.layoutInput}>
      <Text style={styleInput.titleInput}>
        {props.title}
        <Text style={{ color: 'red' }}> *</Text>
      </Text>
      <TextInput
        style={styleInput.textInput}
        onChangeText={props.ChangeText}
        placeholder={props.placeholder}
      />
    </View>
  );
};
const styleInput = StyleSheet.create({
  layoutInput: {
    height: 70,
  },
  titleInput: {
    color: 'gray',
    fontSize: 15,
    marginBottom: 5,
  },
  textInput: {
    height: 45,
    borderColor: '#ACA9A9',
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 5,
  },
});
export default TextInputItem;
