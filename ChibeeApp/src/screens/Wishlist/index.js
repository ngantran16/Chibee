/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { NavigationUtils } from '../../navigation';
import Images from '../../themes/Images';
import Colors from '../../themes/Colors';
import WishlistItem from '../../components/Profile/WishlistItem';
import AudioItem from '../../components/Wishlist/VideoItem';

const index = () => {
  const [selected, setSelected] = useState('Audio');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => NavigationUtils.pop()}>
          <Image source={Images.back} />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Yêu thích</Text>
        <Text />
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

        <ScrollView showsVerticalScrollIndicator={false}>
          {selected === 'Audio' ? <WishlistItem /> : <AudioItem />}
        </ScrollView>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    flexDirection: 'row',
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
});
