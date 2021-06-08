/* eslint-disable react-native/no-inline-styles */
import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Animated,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import TrackPlayer, { usePlaybackState, TrackPlayerEvents } from 'react-native-track-player';
import { PLAYBACK_TRACK_CHANGED } from 'react-native-track-player/lib/eventTypes';
import ControlItem from './PlayerControl';
import SliderStory from './SliderStory';
import { NavigationUtils } from '../../navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Images from '../../themes/Images';
import EvaluateItem from '../../components/Discover/EvaluateItem';
import CommentActions from '../../redux/CommentRedux/actions';
import WishlistActions from '../../redux/WishlistRedux/actions';
import AwesomeAlert from 'react-native-awesome-alerts';
import Colors from '../../themes/Colors';
const { width, height } = Dimensions.get('window');

const TRACK_PLAYER_CONTROLS_OPTS = {
  waitforBuffer: true,
  stopWithApp: false,
  alwaysPauseOnInterruption: true,
  capabilities: [
    TrackPlayer.CAPABILITY_PLAY,
    TrackPlayer.CAPABILITY_PAUSE,
    TrackPlayer.CAPABILITY_SEEK_TO,
  ],
  compactCapabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
};

export default function PlayStory() {
  const dispatch = useDispatch();

  const scrollX = useRef(new Animated.Value(0)).current;
  const slider = useRef(null);
  const isPlayerReady = useRef(false);
  const isItFromUser = useRef(true);
  const index = useRef(0);
  const isLoading = useSelector((state) => state.comment.loadingComment);
  const addCmtLoading = useSelector((state) => state.comment.loadingAddComment);
  const dataComment = useSelector((state) => state.comment.dataComment);
  const token = useSelector((state) => state.login.token);
  const detail_story = useSelector((state) => state.storyDetails.getStoryDetailsResponse);
  const wishlistList = useSelector((state) => state.wishlist.dataWishlist);
  const [isWishlist, setIsWishlist] = useState(false);
  const [show, setShow] = useState(false);

  const story = [
    {
      url: detail_story?.audio[0].link_audio,
      duration: detail_story?.audio[0].length,
      title: detail_story.story_name,
      artist: 'Truyện cổ tích',
      artwork: detail_story.image,
    },
  ];
  // const story = [
  //   {
  //     title: 'Nàng Tiên Ốc',
  //     artist: 'Powfu',
  //     artwork: 'https://pngimg.com/uploads/rainbow/rainbow_PNG5567.png',
  //     url: 'https://doctruyencotich.vn/upload/file/20201225/conmoilamchunghuongduong3523592.mp3',
  //     duration: 2 * 60 + 53,
  //     id: 1,
  //   },
  // ];
  const onBack = () => {
    TrackPlayer.reset();
    NavigationUtils.popShowBottomTab();
  };

  const onDeleteSuccess = () => {
    dispatch(CommentActions.getComment(detail_story.id));
  };

  const onDeleteFail = () => {
    console.log('Delete fail');
  };

  const [songIndex, setSongIndex] = useState(0);
  const position = useRef(Animated.divide(scrollX, width)).current;
  const playbackState = usePlaybackState();

  useEffect(() => {
    scrollX.addListener(({ value }) => {
      const val = Math.round(value / width);
      setSongIndex(val);
    });

    TrackPlayer.setupPlayer().then(async () => {
      await TrackPlayer.reset();
      await TrackPlayer.add(story);
      TrackPlayer.play();
      isPlayerReady.current = true;

      await TrackPlayer.updateOptions(TRACK_PLAYER_CONTROLS_OPTS);

      TrackPlayer.addEventListener(PLAYBACK_TRACK_CHANGED, async (e) => {
        const trackId = (await TrackPlayer.getCurrentTrack()) - 1;

        if (trackId !== index.current) {
          setSongIndex(trackId);
          isItFromUser.current = false;
          setTimeout(() => {
            isItFromUser.current = true;
          }, 200);
        }
      });

      TrackPlayer.addEventListener(TrackPlayerEvents.REMOTE_DUCK, (e) => {
        if (e.paused) {
          TrackPlayer.pause();
        } else {
          TrackPlayer.play();
        }
      });
    });

    return () => {
      scrollX.removeAllListeners();
      TrackPlayer.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detail_story.id, dispatch, scrollX]);

  async function jumpForward() {
    const offset = 10;
    try {
      const position = await TrackPlayer.getPosition();
      const duration = await TrackPlayer.getDuration();

      if (duration - position > offset) {
        await TrackPlayer.seekTo(position + offset);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function jumpBackward() {
    const offset = 10;
    try {
      const position = await TrackPlayer.getPosition();
      if (position - offset > 0) {
        await TrackPlayer.seekTo(position - offset);
      } else {
        await TrackPlayer.seekTo(0);
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    dispatch(CommentActions.getComment(detail_story.id));
    if (wishlistList && wishlistList.length > 0) {
      for (let i = 0; i < wishlistList.length; i++) {
        if (wishlistList[i].id_story === detail_story.id) {
          setIsWishlist(true);
        }
      }
    }
  }, [dispatch, detail_story.id, wishlistList]);

  const [cmt, setCmt] = useState('');

  const onReadStory = () => {
    NavigationUtils.push({ screen: 'ReadStory', isTopBarEnable: false, isBottomTabsEnable: false });
  };

  const onWatchStory = () => {
    NavigationUtils.push({
      screen: 'WatchVideo',
      isTopBarEnable: false,
      isBottomTabsEnable: false,
    });
  };

  const addComment = () => {
    const data = {
      token: token,
      id_story: detail_story.id,
      content: cmt,
    };
    dispatch(CommentActions.addComment(data));
    setCmt('');
  };
  const onAddToWishlist = () => {
    const dataWishlist = {
      token: token,
      id_story: detail_story.id,
    };

    dispatch(WishlistActions.addToWishlist(dataWishlist, onSuccess, onFail));
    setIsWishlist(true);
    setShow(true);
  };

  const onSuccess = () => {
    dispatch(WishlistActions.getWishlist(token));
  };

  const onFail = () => {
    console.log('Something went wrong');
  };

  const renderItem = () => {
    return (
      <View>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => onBack()}>
            <Icon name="angle-left" size={25} />
          </TouchableOpacity>
          <Text style={styles.titleHeader}>{detail_story.story_name}</Text>
        </View>
        <Animated.View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: width,
          }}
        >
          <Animated.Image source={{ uri: detail_story.image }} style={styles.imageStyle} />
          <SliderStory />
        </Animated.View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <Animated.FlatList
          ref={slider}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          data={story}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: true,
          })}
        />
      </SafeAreaView>
      <ControlItem jumpForward={jumpForward} jumpBackward={jumpBackward} />

      <View style={styles.playStory}>
        <TouchableOpacity
          onPress={onAddToWishlist}
          disabled={isWishlist ? true : false}
          style={styles.reactIcon}
        >
          {/* <Icon name="heart" size={25} color={isWishlist ? '#CC0000' : Colors.secondary} /> */}
          {isWishlist ? (
            <Image source={Images.hearted} style={styles.iconHeartStory} />
          ) : (
            <Image source={Images.heartstory} style={styles.iconStory} />
          )}
          <Text style={styles.typeStory}>{isWishlist ? 'Đã thích' : 'Yêu thích'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onReadStory} style={styles.reactIcon}>
          <Image source={Images.book} style={styles.iconStory} color={Colors.secondary} />
          <Text style={styles.typeStory}>Đọc truyện</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onWatchStory} style={styles.reactIcon}>
          <Image source={Images.video} style={styles.iconStory} />
          <Text style={styles.typeStory}>Xem video</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.commentContain}>
        <Text style={styles.txtComment}>
          Bình luận ({dataComment && dataComment.length > 0 ? dataComment.length : 0})
        </Text>
        <View style={styles.btnContainer}>
          <TextInput
            style={styles.inputComment}
            value={cmt}
            onChangeText={(text) => setCmt(text)}
          />
          <TouchableOpacity style={styles.sendContain} onPress={addComment}>
            <Icon name="paper-plane" size={25} />
          </TouchableOpacity>
        </View>
        <View>
          {dataComment && dataComment.length > 0 ? (
            <View style={styles.listComment}>
              {dataComment.map((item, key) => {
                return (
                  <EvaluateItem
                    author={item.full_name}
                    token={item.token}
                    id_comment={item.id}
                    content={item.content}
                    avatar={item.avatar}
                    dateComment={item.created_at}
                    key={key}
                    replies={item.reply}
                    id_story={detail_story.id}
                    onDeleteSuccess={onDeleteSuccess}
                    onDeleteFail={onDeleteFail}
                  />
                );
              })}
              <TouchableOpacity>
                <Text style={styles.viewAll}>Xem thêm</Text>
              </TouchableOpacity>
            </View>
          ) : isLoading || addCmtLoading ? (
            <ActivityIndicator size="large" color="#FF6600" />
          ) : (
            <View style={styles.commentIconContainer}>
              <Image source={Images.comments} style={styles.commentIcon} />
              <Text style={styles.message}>Câu chuyện này vẫn chưa có bình luận nào</Text>
            </View>
          )}
        </View>
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
}

const styles = StyleSheet.create({
  header: {
    marginTop: 18,
    flexDirection: 'row',
  },
  reactIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleHeader: {
    fontSize: 18,
    color: 'gray',
    marginLeft: 20,
  },
  imageStyle: {
    height: height * 0.3,
    width: height * 0.3,
    borderRadius: (height * 0.3) / 2,
    borderColor: '#E8E8E8',
    borderWidth: 2,
    shadowColor: '#E8E8E8',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  artist: {
    fontSize: 18,
    textAlign: 'center',
    color: '#ffffff',
    textTransform: 'capitalize',
  },
  container: {
    paddingHorizontal: 18,
  },

  playStory: {
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#C4C4C4',
    marginTop: 30,
    paddingTop: 10,
  },
  iconStory: {
    width: 30,
    height: 30,
    tintColor: Colors.secondary,
  },
  commentIcon: {
    width: width * 0.3,
    height: height * 0.1,
    tintColor: Colors.secondary,
    resizeMode: 'contain',
    opacity: 0.5,
  },
  commentIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.04,
  },
  message: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
  },
  iconHeartStory: {
    width: 30,
    height: 30,
    tintColor: 'red',
  },
  iconHearted: {
    width: 30,
    height: 30,
    tintColor: Colors.secondary,
  },
  commentContain: {
    width: width - 70,
    marginTop: 20,
  },
  txtComment: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  inputComment: {
    width: width - 45,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 15,
    borderRadius: 20,
    backgroundColor: '#EEEEEE',
    color: 'gray',
    marginLeft: -45,
    paddingRight: 40,
    paddingLeft: 10,
  },
  sendContain: {
    marginLeft: -38,
    marginTop: 15,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
  },
  listComment: {
    width: width - 70,
    marginTop: 10,
  },
  viewAll: {
    color: '#00D1FF',
    textAlign: 'center',
    marginTop: 5,
  },
});
