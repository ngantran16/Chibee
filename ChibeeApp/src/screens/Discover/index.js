import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { NavigationUtils } from '../../navigation';
import { useDispatch, useSelector } from 'react-redux';
import DiscoveryActions from '../../redux/Discovery/actions';

const Discovery = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(DiscoveryActions.getDiscovery());
  }, [dispatch]);

  const discovery = useSelector((state) => state.discovery.dataDiscovery);
  const discoveryLoading = useSelector((state) => state.discovery.loadingDiscovery);

  const onImagePress = (id) => {
    dispatch(DiscoveryActions.getDetailDiscovery(id, onSuccess, onFail));
  };

  const onSuccess = () => {
    NavigationUtils.push({ screen: 'DiscoverDetail', isTopBarEnable: false });
  };

  const onFail = () => {
    console.log('Get detail discovery fail');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Khám phá</Text>
      </View>
      <ScrollView>
        <View style={styles.discoverContain} showsVerticalScrollIndicator={false}>
          {discovery && discovery.length > 0 ? (
            discovery.map((item, key) => {
              return (
                <TouchableOpacity onPress={() => onImagePress(item.id)} key={key}>
                  <Image source={{ uri: item.image }} style={styles.imgDiscover} />
                </TouchableOpacity>
              );
            })
          ) : discoveryLoading ? (
            <ActivityIndicator size="large" color="#FF6600" />
          ) : (
            <Text>Không có mục nào trong Khám phá</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Discovery;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  title: {
    color: '#867D7D',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  imgDiscover: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    marginBottom: 15,
  },
  discoverContain: {
    marginTop: 20,
  },
});
