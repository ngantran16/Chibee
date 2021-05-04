import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Images from '../../themes/Images';
import ListItem from '../../components/Wishlist/ListItem';

const WishlistItem = (props) => {
  const data = props.data;
  console.log('WishlistItem ');
  return (
    <View>
      {data && data.map((item, key) => {
        return <ListItem item={item} key={key} />;
      })}
    </View>
  );
};

export default WishlistItem;

const styles = StyleSheet.create({});
