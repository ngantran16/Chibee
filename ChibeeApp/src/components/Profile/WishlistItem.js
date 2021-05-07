import React from 'react';
import { StyleSheet, Text, ScrollView} from 'react-native';
import ListItem from '../../components/Wishlist/ListItem';

const WishlistItem = (props) => {
  const data = props.data;
  return (
    <ScrollView>
      {
        (data && data.length > 0) ? (
          data.map((item, key) => {
            return <ListItem item={item} key={key} />
          })
        ) : (<Text style={styles.message}>You haven't added any story into your wishlist yet!</Text>)
      }
    </ScrollView>
  );
};

export default WishlistItem;

const styles = StyleSheet.create({
  message: {
    marginTop: 50,
    fontSize: 20,
  }
});
