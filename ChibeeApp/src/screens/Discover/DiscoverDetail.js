import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { NavigationUtils } from '../../navigation';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
const DiscoverDetail = () => {
  const discoveryDetail = useSelector((state) => state.discovery.detailDiscovery);
  const [checkViewAll, setCheckViewAll] = useState(false);
  const onViewAll = () => {
    setCheckViewAll(!checkViewAll);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => NavigationUtils.pop()}>
          <Icon name="angle-left" size={25} style={styles.setting} />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>{discoveryDetail.title}</Text>
        </View>
      </View>
      <View style={styles.imgContain}>
        <Image source={{ uri: discoveryDetail.image }} style={styles.imgDetail} />
      </View>
      <View>
        {checkViewAll ? (
          <View>
            <Text style={styles.content}>{discoveryDetail.content}</Text>
            <TouchableOpacity onPress={onViewAll}>
              <Text style={styles.viewAll}>Ẩn bớt</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Text style={styles.content} numberOfLines={5}>
              {discoveryDetail.content}
            </Text>
            <TouchableOpacity onPress={onViewAll}>
              <Text style={styles.viewAll}>Xem thêm</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default DiscoverDetail;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
  },
  imgDetail: {
    width: '100%',
    height: 250,
    borderRadius: 5,
  },
  imgContain: {
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 50,
  },
  content: {
    marginTop: 10,
    fontSize: 16,
  },
  titleComment: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  inputComment: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 20,
    backgroundColor: '#EEEEEE',
  },
  sendContain: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: -30,
    marginRight: 15,
  },
  viewAll: {
    fontSize: 15,
    color: Colors.primary,
  },
});
