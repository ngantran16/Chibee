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

const ListenItem = (props) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const slider = useRef(null);
  const isPlayerReady = useRef(false);
  const isItFromUser = useRef(true);
  const index = useRef(0);

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
      await TrackPlayer.add(props.story);
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
  }, [props.story, scrollX]);

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

  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => NavigationUtils.popShowBottomTab()}>
          <Icon name="angle-left" size={25} />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>{props.detail_story.story_name}</Text>
      </View>
      <Animated.View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: width,
        }}
      >
        <Animated.Image source={{ uri: props.detail_story.image }} style={styles.imageStyle} />
        <SliderStory />
      </Animated.View>
    </View>
  );
};

export default ListenItem;
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
    borderWidth: 1,
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
