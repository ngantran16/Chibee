/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, View, ScrollView, Image, ActivityIndicator } from 'react-native';
import Images from '../../themes/Images';
import Type from '../../components/Home/Type';
import { useSelector } from 'react-redux';

const Home = () => {
  const listTypes = useSelector((state) => state.home.dataTypes);
  const isLoading = useSelector((state) => state.home.loadingHome);
  return (
    <ScrollView>
      <View>
        <View style={styles.header}>
          <Image source={Images.intro1} style={styles.logo} />
          <Image source={Images.intro2} style={styles.iconApp} />
        </View>
        <View>
          <Image source={Images.background1} style={styles.background} />
        </View>
      </View>
      {isLoading && <ActivityIndicator size="large" color="#FF6600" />}
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {listTypes.map((type, key) => {
          return <Type item={type} key={key} />;
        })}
      </ScrollView>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: 'contain',
  },
  iconApp: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  background: {
    width: '100%',
    height: 200,
    marginTop: 5,
  },
  container: {
    marginHorizontal: 16,
    marginTop: 30,
  },
});
