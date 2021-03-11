import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PersonalInfoItem = (props) => {
  return (
    <View style={styles.info}>
      <Text style={styles.title}>{props.titleName}</Text>
      <Text style={styles.content}>{props.information}</Text>
    </View>
  );
};

export default PersonalInfoItem;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: 6,
  },
  content: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    marginBottom: 25,
  },
});
