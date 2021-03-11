import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Images from '../../themes/Images';
import Colors from '../../themes/Colors';

const InviteItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Image source={props.item.image} style={styles.imgAvatar} />
        <Text style={styles.txtName}>{props.item.name}</Text>
      </View>
      <View>
        {props.item.isClicked ? (
          <TouchableOpacity style={[{}, styles.btnInvite, { backgroundColor: Colors.primary }]}>
            <Text style={styles.txtBtn}>Mời</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={[{}, styles.btnInvite, { backgroundColor: Colors.secondary }]}>
            <Text style={styles.txtBtn}>Mời</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InviteItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 18,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  txtName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  btnInvite: {
    width: 90,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  txtBtn: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  avatar: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  imgAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
