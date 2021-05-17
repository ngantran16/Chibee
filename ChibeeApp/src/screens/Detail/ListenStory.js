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
import TrackPlayer, { TrackPlayerEvents } from 'react-native-track-player';

import songs from './data';
import ControlItem from './PlayerControl';
import SliderStory from './SliderStory';
import { PLAYBACK_TRACK_CHANGED } from 'react-native-track-player/lib/eventTypes';
import { NavigationUtils } from '../../navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Images from '../../themes/Images';
import EvaluateItem from '../../components/Discover/EvaluateItem';
import CommentActions from '../../redux/CommentRedux/actions';

const { width, height } = Dimensions.get('window');

const TRACK_PLAYER_CONTROLS_OPTS = {
  waitforBuffer: true,
  stopWithApp: false,
  alwaysPauseOnInterruption: true,
  capabilities: [
    TrackPlayer.CAPABILITY_PLAY,
    TrackPlayer.CAPABILITY_PAUSE,
    TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
    TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
    TrackPlayer.CAPABILITY_SEEK_TO,
  ],
  compactCapabilities: [
    TrackPlayer.CAPABILITY_PLAY,
    TrackPlayer.CAPABILITY_PAUSE,
    TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
    TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
  ],
};

export default function PlayStory() {
  const scrollX = useRef(new Animated.Value(0)).current;

  const slider = useRef(null);
  const isPlayerReady = useRef(false);
  const index = useRef(0);

  const [songIndex, setSongIndex] = useState(0);

  const isItFromUser = useRef(true);
  const position = useRef(Animated.divide(scrollX, width)).current;

  useEffect(() => {
    scrollX.addListener(({ value }) => {
      const val = Math.round(value / width);

      setSongIndex(val);
    });

    TrackPlayer.setupPlayer().then(async () => {
      console.log('Player ready');
      await TrackPlayer.reset();
      await TrackPlayer.add(songs);
      TrackPlayer.play();
      isPlayerReady.current = true;

      await TrackPlayer.updateOptions(TRACK_PLAYER_CONTROLS_OPTS);

      TrackPlayer.addEventListener(PLAYBACK_TRACK_CHANGED, async (e) => {
        console.log('song ended', e);

        const trackId = (await TrackPlayer.getCurrentTrack()) - 1;

        console.log('track id', trackId, 'index', index.current);

        if (trackId !== index.current) {
          setSongIndex(trackId);
          isItFromUser.current = false;

          if (trackId > index.current) {
            goNext();
          } else {
            goPrv();
          }
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
  }, [scrollX]);

  useEffect(() => {
    if (isPlayerReady.current && isItFromUser.current) {
      TrackPlayer.skip(songs[songIndex].id)
        .then((_) => {
          console.log('changed track');
        })
        .catch((e) => console.log('error in changing track ', e));
    }
    index.current = songIndex;
  }, [songIndex]);

  const goNext = async () => {
    slider.current.scrollToOffset({
      offset: (index.current + 1) * width,
    });

    await TrackPlayer.play();
  };
  const goPrv = async () => {
    slider.current.scrollToOffset({
      offset: (index.current - 1) * width,
    });

    await TrackPlayer.play();
  };
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const id_story = useSelector((state) => state.storyDetails.getStoryDetailsResponse.id);
  useEffect(() => {
    dispatch(CommentActions.getComment(id_story));
  }, [dispatch, id_story]);

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
      id_story: id_story,
      content: cmt,
    };
    dispatch(CommentActions.addComment(data));
    setCmt('');
  };
  const isLoading = useSelector((state) => state.comment.loadingComment);
  const addCmtLoading = useSelector((state) => state.comment.loadingAddComment);
  const dataComment = useSelector((state) => state.comment.dataComment);
  const renderItem = ({ index, item }) => {
    return (
      <View>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => NavigationUtils.popShowBottomTab()}>
            <Icon name="angle-left" size={25} />
          </TouchableOpacity>
          <Text style={styles.titleHeader}>Cô Bé Choàng Khăn đỏ</Text>
        </View>
        <Animated.View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: width,
          }}
        >
          <Animated.Image source={item.artwork} style={styles.imageStyle} />
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
          data={songs}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: true,
          })}
        />
      </SafeAreaView>
      <ControlItem onNext={goNext} onPrv={goPrv} />

      <View style={styles.playStory}>
        <TouchableOpacity>
          <Image source={Images.heartstory} style={styles.iconStory} />
          <Text style={styles.typeStory}>Yêu thích</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onReadStory}>
          <Image source={Images.book} style={styles.iconStory} />
          <Text style={styles.typeStory}>Đọc truyện</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onWatchStory}>
          <Image source={Images.video} style={styles.iconStory} />
          <Text style={styles.typeStory}>Xem video</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.commentContain}>
        <Text style={styles.txtComment}>
          Bình luận ({dataComment && dataComment.length > 0 ? dataComment.length : 0}){' '}
        </Text>
        <View style={styles.btnContainer}>
          <TextInput
            style={styles.inputComment}
            value={cmt}
            onChangeText={(text) => setCmt(text)}
          />
          <TouchableOpacity style={styles.sendContain} onPress={addComment}>
            <Image source={Images.send} />
          </TouchableOpacity>
        </View>
        <View>
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
          ) : isLoading || addCmtLoading ? (
            <ActivityIndicator size="large" color="#FF6600" />
          ) : (
            <Text>This story hasn't had any comment yet</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 18,
    flexDirection: 'row',
  },
  titleHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
    marginLeft: width * 0.25,
  },
  imageStyle: {
    height: height * 0.3,
    width: height * 0.3,
    borderRadius: (height * 0.3) / 2,
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
    marginLeft: 19,
    width: 30,
    height: 30,
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
