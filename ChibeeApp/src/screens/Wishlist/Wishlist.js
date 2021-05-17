/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { NavigationUtils } from '../../navigation';
import Colors from '../../themes/Colors';
import WishlistItem from '../../components/Profile/WishlistItem';
import AudioItem from '../../components/Wishlist/VideoItem';
import WishlistActions from '../../redux/WishlistRedux/actions';
import { useDispatch, useSelector } from 'react-redux';

const WishList = () => {
  const [selected, setSelected] = useState('Audio');
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  useEffect(() => {
    dispatch(WishlistActions.getWishlist(token));
  }, [dispatch, token])
  const data = useSelector((state) => state.wishlist.dataWishlist);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleHeader}>Yêu thích</Text>
      </View>
      <View style={styles.subContain}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => setSelected('Audio')}>
            {selected === 'Audio' ? (
              <Text style={styles.titleMenuSelected}>Audio</Text>
            ) : (
              <Text style={styles.titleMenu}>Audio</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelected('Video')}>
            {selected === 'Video' ? (
              <Text style={styles.titleMenuSelected}>Video</Text>
            ) : (
              <Text style={styles.titleMenu}>Video</Text>
            )}
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContain}>
          {selected === 'Audio' ? <WishlistItem data = {data}/> : <AudioItem data = {data}/>}
        </ScrollView>
        
      </View>
    </View>
  );
};

export default WishList;

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
  container: {
    paddingHorizontal: 18,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  subContain: {
    marginTop: 20,
  },
  titleMenu: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
  titleMenuSelected: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 2,
  },
  scrollContain: {
    marginBottom: 150,
  }
});
