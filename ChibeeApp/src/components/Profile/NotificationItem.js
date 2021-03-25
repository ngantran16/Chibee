import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NotificationItem = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.allNofi}>
        <Text style={styles.nameUsers}>{props.item.nameUser}</Text>
        <Text> đã mời bạn cùng nghe </Text>
        <Text style={styles.titleStories}>{props.item.nameStory}</Text>
        <Text style={styles.dateInvite}> {props.item.dateInvite} </Text>
      </Text>
    </View>
  );
};

export default NotificationItem;
const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginLeft: 10,
  },
  allNofi: {
    flexDirection: 'row',
    fontSize: 16,
  },
  nameUsers: {
    fontWeight: 'bold',
  },
  titleStories: {
    fontWeight: 'bold',
  },
  dateInvite: {
    color: 'grey',
    fontSize: 12,
    marginRight: 20,
    fontWeight: 'bold',
  },
});
