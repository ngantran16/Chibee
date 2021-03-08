import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../themes/Colors';
import Fonts from '../../themes/Fonts';
import { NavigationUtils } from '../../navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
const TypeHeader = ({ title }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.txtTitle}>{title}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          NavigationUtils.push({ screen: 'ViewAll', title: 'ViewAll', isTopBarEnable: false });
        }}
      >
        <Text style={styles.txtViewAll}>Xem hết{'>>'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TypeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtViewAll: {
    fontSize: 12,
    color: Colors.secondary,
    fontFamily: Fonts.type.primary,
  },
  txtTitle: {
    fontSize: 16,
    fontFamily: Fonts.type.primary,
    fontWeight: 'bold',
  },
});
