import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Animated
} from 'react-native';
import { useSelector } from 'react-redux';
import TrackPlayer, {
  Capability,
  useTrackPlayerEvents,
  usePlaybackState,
  TrackPlayerEvents,
  STATE_PLAYING,
  Event,
} from 'react-native-track-player';
 
import songs from './data';
import ControlItem from './ControlItem';
import SliderStory from './SliderStory';
import {PLAYBACK_TRACK_CHANGED} from 'react-native-track-player/lib/eventTypes';
import { NavigationUtils } from '../../navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Images from '../../themes/Images';
import EvaluateItem from '../../components/Discover/EvaluateItem';
 
const {width, height} = Dimensions.get('window');
 
// const events = [
//   TrackPlayerEvents.PLAYBACK_STATE,
//   TrackPlayerEvents.PLAYBACK_ERROR
// ];
 
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
 
  // for tranlating the album art
  const position = useRef(Animated.divide(scrollX, width)).current;
  const playbackState = usePlaybackState();
 
  useEffect(() => {
    // position.addListener(({ value }) => {
    //   console.log(value);
    // });
 
    scrollX.addListener(({value}) => {
      const val = Math.round(value / width);
 
      setSongIndex(val);
    });
 
    TrackPlayer.setupPlayer().then(async () => {
      // The player is ready to be used
      console.log('Player ready');
      // add the array of songs in the playlist
      await TrackPlayer.reset();
      await TrackPlayer.add(songs);
      TrackPlayer.play();
      isPlayerReady.current = true;
 
      await TrackPlayer.updateOptions(TRACK_PLAYER_CONTROLS_OPTS);
 
      //add listener on track change
      TrackPlayer.addEventListener(PLAYBACK_TRACK_CHANGED, async e => {
        console.log('song ended', e);
 
        const trackId = (await TrackPlayer.getCurrentTrack()) - 1; //get the current id
 
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
 
        // isPlayerReady.current = false;
      });
 
      // monitor intterupt when other apps start playing music
      TrackPlayer.addEventListener(TrackPlayerEvents.REMOTE_DUCK, e => {
        // console.log(e);
        if (e.paused) {
          // if pause true we need to pause the music
          TrackPlayer.pause();
        } else {
          TrackPlayer.play();
        }
      });
    });
 
    return () => {
      scrollX.removeAllListeners();
      TrackPlayer.destroy();
 
      // exitPlayer();
    };
  }, [scrollX]);
 
  // change the song when index changes
  useEffect(() => {
    if (isPlayerReady.current && isItFromUser.current) {
      TrackPlayer.skip(songs[songIndex].id)
        .then(_ => {
          console.log('changed track');
        })
        .catch(e => console.log('error in changing track ', e));
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
  const dataComment = useSelector((state) => state.comment.dataComment);
  console.log('COMMENT*********************************');
  console.log(dataComment);
  const [cmt, setCmt] = useState('   Viết nhận xét ... ');
 
 
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
  const renderItem = ({index, item}) => {
    return (
    <View>
    <View style={styles.header}>
      <TouchableOpacity onPress={() => NavigationUtils.popShowBottomTab()}>
        <Icon name="angle-left" size={25} />
      </TouchableOpacity>
    </View>
      <Animated.View
        style={{
          alignItems: 'center',
          width: width,
          transform: [
            {
              translateX: Animated.multiply(
                Animated.add(position, -index),
                -10,
              ),
            },
          ],
        }}>
        <View> 
          <Text style={styles.title}>{songs[songIndex].title}</Text>
        </View>
        <Animated.Image
          source={item.artwork}
          style={{width: 300, height: height-505, borderRadius: 5}}
        />
          <SliderStory/>
      </Animated.View>
      </View>
    );
  };
 
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={{height: 320}}>
        <Animated.FlatList
          ref={slider}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          data={songs}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: true},
          )}
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
        <TouchableOpacity onPress={onWatchStory} >
          <Image source={Images.video} style={styles.iconStory} />
          <Text style={styles.typeStory}>Xem video</Text>
        </TouchableOpacity>
      </View>
      {/* ------------------------------------------ */}
      <View style={styles.commentContain}>
        <Text style={styles.txtComment}>Bình luận ({dataComment && dataComment.length > 0 ? dataComment.length : 0}) </Text>
        <View style={styles.btnContainer}>
          <TextInput
            style={styles.inputComment}
            value={cmt}
            onChangeText={(text) => setCmt(text)}
          />
          <TouchableOpacity style={styles.sendContain}>
            <Image source={Images.send} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View>
        {
          dataComment && dataComment.length > 0 ? (
            <View style={styles.listComment}>
              {dataComment.map((item, key) => {
                return (
                  <EvaluateItem
                    author= {item.full_name}
                    isFirst= {item.isFirst}
                    content= {item.content}
                    avatar = {item.avatar}
                    key={key}
                  />
                );
              })}
            </View>) : (<Text>This story hasn't had any comment yet</Text>)
          }</View>
          </ScrollView>
      </View>
      <TouchableOpacity>
        <Text style={styles.viewAll}>Xem thêm</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  header:{
    marginLeft: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: '#000000',
  },
  artist: {
    fontSize: 18,
    textAlign: 'center',
    color: '#ffffff',
    textTransform: 'capitalize',
  },
  container: {
    width: width,
    alignItems: 'center',
    height: height,
    maxHeight: 600,
  },
 
  playStory: {
    width: width-70,
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
    width: width-70,
    marginTop: 20,
  },
  txtComment: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  inputComment: {
    width: width - 70,
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
    width: width-70,
    marginTop: 10,
  },
  viewAll: {
    color: '#00D1FF',
    textAlign: 'center',
    marginTop: 5,
  },
});
