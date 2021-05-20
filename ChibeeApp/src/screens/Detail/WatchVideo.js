/* eslint-disable react-native/no-inline-styles */
import React, { useState, useCallback, useEffect } from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TextInput,
  Pressable,
  Alert,
  Modal,
  ActivityIndicator,
} from 'react-native';
import Images from '../../themes/Images';
import EvaluateItem from '../../components/Discover/EvaluateItem';
import Colors from '../../themes/Colors';
import { NavigationUtils } from '../../navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import CommentActions from '../../redux/CommentRedux/actions';
import WishlistActions from '../../redux/WishlistRedux/actions';
import AwesomeAlert from 'react-native-awesome-alerts';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const WatchVideo = () => {
  const dataComment = useSelector((state) => state.comment.dataComment);
  const isCommentLoading = useSelector((state) => state.comment.loadingComment);

  const dispatch = useDispatch();
  const story_detail = useSelector((state) => state.storyDetails.getStoryDetailsResponse);
  const token = useSelector((state) => state.login.token);
  const id_story = story_detail.id;
  const wishlistList = useSelector((state) => state.wishlist.dataWishlist);
  const [isWishlist, setIsWishlist] = useState(false);
  const [show, setShow] = useState(false);

  const addComment = () => {
    const data = {
      token: token,
      id_story: id_story,
      content: cmt,
    };
    dispatch(CommentActions.addComment(data));
    setCmt('');
  };

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    for (let i = 0; i < wishlistList.length; i++) {
      if (wishlistList[i].id_story === story_detail.id) {
        setIsWishlist(true);
      }
    }
  }, [dispatch, story_detail.id, wishlistList]);

  const onAddToWishlist = () => {
    const dataWishlist = {
      token: token,
      id_story: story_detail.id,
    };

    dispatch(WishlistActions.addToWishlist(dataWishlist));
    setIsWishlist(true);
    setShow(true);
  };

  const [cmt, setCmt] = useState('');
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.itemScreen}>
          <TouchableOpacity onPress={() => NavigationUtils.pop()}>
            <Icon name="angle-left" size={25} style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.titleStory}>{story_detail.story_name}</Text>
        </View>
        <View style={styles.itemVideo}>
          <YoutubePlayer
            height={220}
            play={playing}
            videoId={story_detail.video[0].id_video}
            onChangeState={onStateChange}
          />
        </View>
        <View style={styles.iconInteract}>
          <TouchableOpacity
            style={styles.itemCenter}
            disabled={isWishlist ? true : false}
            onPress={onAddToWishlist}
          >
            <Icon
              name="heart"
              size={25}
              color={isWishlist ? '#CC0000' : '#000'}
              style={styles.iconHeart}
            />
            <Text style={styles.nameIcon}>Yêu thích</Text>
          </TouchableOpacity>

          <Pressable
            style={[styles.itemCenter, styles.button]}
            onPress={() => setModalVisible(true)}
          >
            <Icon name="share-square" size={26} style={styles.iconShare} />
            <Text style={styles.nameIcon}>Chia sẻ</Text>
          </Pressable>

          <View style={styles.itemCenter}>
            <Icon name="download" size={26} style={styles.iconDown} />
            <Text style={styles.nameIcon}>Tải về</Text>
          </View>
        </View>
        <View style={styles.boderScreen} />
      </View>

      <View>
        <Text style={styles.txtComment}>Bình luận ({dataComment.length}) </Text>
        <View style={styles.btnContainer}>
          <TextInput
            style={styles.inputComment}
            value={cmt}
            placeholder="Viết nhận xét ..."
            onChangeText={(text) => setCmt(text)}
          />
          <TouchableOpacity style={styles.sendContain} onPress={addComment}>
            <Icon name="paper-plane" size={25} />
          </TouchableOpacity>
        </View>
        {dataComment && dataComment.length > 0 ? (
          <View style={styles.listComment}>
            {dataComment.map((item, key) => {
              return (
                <EvaluateItem
                  author={item.full_name}
                  isFirst={item.isFirst}
                  content={item.content}
                  avatar={item.avatar}
                  dateComment={item.created_at}
                  key={key}
                />
              );
            })}
            <TouchableOpacity>
              <Text style={styles.viewAll}>Xem thêm</Text>
            </TouchableOpacity>
          </View>
        ) : isCommentLoading ? (
          <ActivityIndicator size="large" color="#FF6600" />
        ) : (
          <Text>This story hasn't had any comment yet</Text>
        )}
      </View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.titleHeader}>
                <Text style={styles.modalText}>Chia sẻ</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Image source={Images.down} style={styles.textStyle} />
                </Pressable>
              </View>

              <View style={styles.shareContainer}>
                <View style={styles.iconContain}>
                  <Image source={Images.messenger} style={styles.iconSize} />
                  <Text style={styles.txtIcon}>Chats</Text>
                </View>
                <View style={styles.iconContain}>
                  <Image source={Images.fb} style={styles.iconFb} />
                  <Text style={styles.txtIcon}>Bảng tin</Text>
                </View>
                <View style={styles.iconContain}>
                  <Image source={Images.copy} style={styles.copyIcon} />
                  <Text style={styles.txtIcon}>Sao chép</Text>
                </View>
              </View>
              <View style={styles.shareContainer}>
                <View style={styles.iconContain}>
                  <Image source={Images.zalo} style={styles.zaloIcon} />
                  <Text style={styles.txtIcon}>Zalo</Text>
                </View>
                <View style={styles.iconContain}>
                  <Image source={Images.gmail} style={styles.iconSize} />
                  <Text style={styles.txtIcon}>Gmail</Text>
                </View>
                <View style={styles.iconContain}>
                  <Image source={Images.bluetooth} style={styles.zaloIcon} />
                  <Text style={styles.txtIcon}>Bluetooth</Text>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <AwesomeAlert
        show={show}
        showProgress={false}
        message="Bạn đã thêm vào Yêu thích thành công!"
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

export default WatchVideo;

const styles = StyleSheet.create({
  itemVideo: {
    marginTop: 5,
  },
  txtComment: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  inputComment: {
    width: '98%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 20,
    backgroundColor: '#EEEEEE',
    color: 'gray',
    marginLeft: -15,
  },
  sendContain: {
    marginLeft: -38,
    marginTop: 15,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listComment: {
    marginTop: 10,
  },
  itemScreen: {
    width: '100%',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleStory: {
    marginLeft: 20,
    fontSize: 20,
  },
  playVideo: {
    height: 300,
    width: '100%',
    borderRadius: 10,
  },
  iconInteract: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  nameIcon: {
    fontSize: 12,
  },
  boderScreen: {
    width: '99%',
    height: 1,
    backgroundColor: '#d9d9d9',
    marginTop: 10,
    marginLeft: 5,
  },
  backgroundVideo: {
    height: 300,
    width: screenWidth,
  },
  backgroundVideoFullScreen: {
    height: 300,
    width: '100%',
  },
  container: {
    paddingHorizontal: 18,
  },
  itemCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewAll: {
    color: Colors.secondary,
    textAlign: 'center',
    marginTop: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#222222',
    width: screenWidth,
    height: screenHeight * 0.4,
    padding: 40,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    // elevation: 2,
  },
  textStyle: {
    tintColor: 'white',
  },
  modalText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: -15,
  },
  zaloIcon: {
    width: 55,
    height: 55,
    backgroundColor: 'white',
    borderRadius: 27.5,
  },
  txtIcon: {
    fontSize: 18,
    color: 'white',
  },
  iconContain: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  copyIcon: {
    tintColor: 'white',
    width: 55,
    height: 55,
  },
  iconFb: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: 55,
    height: 55,
  },
  titleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconSize: {
    width: 55,
    height: 55,
  },
});
