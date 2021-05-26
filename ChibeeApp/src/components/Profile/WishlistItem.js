import React, { useState } from 'react';
import Moment from 'moment';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import DetailActions from '../../redux/DetailRedux/actions';
import CommentActions from '../../redux/CommentRedux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationUtils } from '../../navigation';
import Colors from '../../themes/Colors';
import WishlistActions from '../../redux/WishlistRedux/actions';
import AwesomeAlert from 'react-native-awesome-alerts';

const WishlistItem = (props) => {
  const data = props.data;
  Moment.locale('en');
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const onDetailSuccess = (id) => {
    dispatch(CommentActions.getComment(id, onCommentSuccess, onFail));
  };

  const onCommentSuccess = () => {
    NavigationUtils.push({
      screen: 'WatchVideo',
      isTopBarEnable: false,
      isBottomTabsEnable: false,
    });
  };

  const onFail = () => {
    console.log('Get detail fail');
  };

  const onVideoClick = (id) => {
    dispatch(DetailActions.getStoryDetails(id, onDetailSuccess, onFail));
  };

  const onDeleteStory = (token, id) => {
    const story = {
      token: token,
      id_story: id,
    };
    console.log(story);
    dispatch(WishlistActions.deleteStoryWishlist(story, onDeleteSuccess, onDeleteFail));
  };

  const onDeleteSuccess = () => {
    setMessage('Bạn đã xóa thành công');
    dispatch(WishlistActions.getWishlist(data[0].token));
  };

  const onDeleteFail = () => {
    console.log('Delete fail');
    setMessage('Xóa không thành công');
    setShow(true);
  };

  const wishlistLoading = useSelector((state) => state.wishlist.loadingWishlist);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {data && data.length > 0 ? (
        data.map((item, key) => {
          return (
            <TouchableOpacity
              style={styles.storyContain}
              key={key}
              onPress={() => onVideoClick(item.id)}
            >
              <Image source={{ uri: item.image }} style={styles.imgStory} />
              <View style={styles.content}>
                <Text style={styles.nameStory}>{item.story_name}</Text>
                <Text style={styles.dateStory}>{Moment(item.updated_at).format('DD/MM/YYYY')}</Text>
                <TouchableOpacity onPress={() => onDeleteStory(item.token, item.id_story)}>
                  <Text style={styles.delete}>Xóa</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        })
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
    </ScrollView>
  );
};

export default WishlistItem;

const styles = StyleSheet.create({
  storyContain: {
    marginTop: 20,
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 10,
    borderBottomColor: Colors.primary,
    borderRightColor: '#F5F5F5',
    borderLeftColor: '#F5F5F5',
    borderTopColor: '#F5F5F5',
    borderWidth: 2,
  },
  imgStory: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  content: {
    marginTop: 10,
    justifyContent: 'center',
  },
  nameStory: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateStory: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'left',
  },
  delete: {
    color: 'red',
  },
});
