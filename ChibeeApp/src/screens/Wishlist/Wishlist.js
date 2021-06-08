/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Colors from '../../themes/Colors';
import WishlistItem from '../../components/Profile/WishlistItem';
import AudioItem from '../../components/Wishlist/AudioItem';
import WishlistActions from '../../redux/WishlistRedux/actions';
import { useDispatch, useSelector } from 'react-redux';
const { width, height } = Dimensions.get('window');

const WishList = () => {
  const [selected, setSelected] = useState('Audio');
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  useEffect(() => {
    dispatch(WishlistActions.getWishlist(token));
  }, [dispatch, token]);
  const data = useSelector((state) => state.wishlist.dataWishlist);
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.titleHeader}>Yêu thích</Text>
      </View>
      <View style={styles.subContain}>
        <View style={styles.headerContent}>
          <TouchableOpacity
            onPress={() => setSelected('Audio')}
            style={selected === 'Audio' ? styles.titleWidthSelected : styles.titleWidth}
          >
            <Text style={selected === 'Audio' ? styles.titleMenuSelected : styles.titleMenu}>
              Audio
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelected('Video')}
            style={selected === 'Video' ? styles.titleWidthSelected : styles.titleWidth}
          >
            <Text style={selected === 'Video' ? styles.titleMenuSelected : styles.titleMenu}>
              Video
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollContain}>
          {selected === 'Audio' ? <AudioItem data={data} /> : <WishlistItem data={data} />}
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subContain: {
    marginTop: 20,
  },
  titleMenu: {
    fontSize: 16,
    color: 'gray',
  },
  titleMenuSelected: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  scrollContain: {
    marginBottom: 120,
    paddingHorizontal: 18,
    marginTop: 10,
  },
  titleWidth: {
    width: width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleWidthSelected: {
    width: width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 2,
  },
});
