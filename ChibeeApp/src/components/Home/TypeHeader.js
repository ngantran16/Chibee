import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Colors from '../../themes/Colors';
import Fonts from '../../themes/Fonts';
import { NavigationUtils } from '../../navigation';
import { useDispatch } from 'react-redux';

import HomeActions from '../../redux/HomeRedux/actions';

const TypeHeader = (props) => {
  const dispatch = useDispatch();
  const id_type = props.id_type;
  const title = props.title;

  const onSuccess = () => {
    NavigationUtils.push({ screen: 'ViewAll', data: title, isTopBarEnable: false });
  };

  const onFail = () => {
    console.log('Something went wrong!');
  };

  const onViewByType = () => {
    dispatch(HomeActions.getStoryByType(id_type, onSuccess, onFail));
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.txtTitle}>{title}</Text>
      </View>
      <TouchableOpacity onPress={() => onViewByType()}>
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
