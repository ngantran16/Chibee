import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationUtils } from '../../navigation';
import Images from '../../themes/Images';
import Colors from '../../themes/Colors';
const Support = () => {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => NavigationUtils.pop()}>
          <Image source={Images.back} />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Hỗ trợ</Text>
        <Text />
      </View>
      <View style={styles.contain}>
        <Image source={Images.support} style={styles.imgSupport} />
        <Text style={styles.txtSupport}>Bạn cần giúp đỡ ?</Text>
      </View>
    </View>
  );
};

export default Support;

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
  contain: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgSupport: {
    width: '50%',
    height: '60%',
    resizeMode: 'contain',
    tintColor: Colors.primary,
  },
  txtSupport: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
  },
});
