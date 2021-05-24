import React, { useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import ListItem from './ListItem';
import AwesomeAlert from 'react-native-awesome-alerts';
import Colors from '../../themes/Colors';
import WishlistActions from '../../redux/WishlistRedux/actions';
import { useDispatch, useSelector } from 'react-redux';

const AudioItem = (props) => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');
  const data = props.data;
  const dispatch = useDispatch();
  const renderItem = ({ item, key }) => {
    return (
      <View>
        <ListItem
          item={item}
          key={key}
          onDeleteFail={onDeleteFail}
          onDeleteSuccess={onDeleteSuccess}
        />
      </View>
    );
  };

  const onDeleteSuccess = () => {
    setMessage('Bạn đã xóa thành công');
    dispatch(WishlistActions.getWishlist(props.data[0].token));
  };

  const onDeleteFail = () => {
    console.log('Delete fail');
    setMessage('Xóa không thành công');
    setShow(true);
  };

  const wishlistLoading = useSelector((state) => state.wishlist.loadingWishlist);

  return (
    <View>
      {data && data.length > 0 ? (
        <SafeAreaView>
          <FlatList
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      ) : wishlistLoading ? (
        <ActivityIndicator size="large" color="#FF6600" />
      ) : (
        <Text style={styles.message}>Bạn vẫn chưa có câu chuyện nào trong mục Yêu thích</Text>
      )}
      <AwesomeAlert
        show={show}
        showProgress={false}
        message={message}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="OK"
        confirmButtonColor={Colors.primary}
        onCancelPressed={() => setShow(false)}
        onConfirmPressed={() => setShow(false)}
      />
    </View>
  );
};

export default AudioItem;

const styles = StyleSheet.create({
  message: {
    marginTop: 50,
    fontSize: 16,
  },
});
