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
import TrackPlayer, { TrackPlayerEvents } from 'react-native-track-player';
import SliderAudio from './SliderAudio';
import { PLAYBACK_TRACK_CHANGED } from 'react-native-track-player/lib/eventTypes';
import ListItem from './ListItem';

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
const { width, height } = Dimensions.get('window');

const AudioItem = (props) => {
  const data = props.data;
  const songs = [
    {
      url: 'https://whispering-hollows-85804.herokuapp.com/audio/an_ca_thoi.mp3',
      duration: 140,
      id: 1,
    },
    {
      url: 'https://whispering-hollows-85804.herokuapp.com/audio/an_ca_thoi.mp3',
      duration: 120,
      id: 2,
    },
  ];
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

    // TrackPlayer.setupPlayer().then(async () => {
    //   await TrackPlayer.reset();
    //   await TrackPlayer.add(data);
    //   TrackPlayer.play();
    //   isPlayerReady.current = true;

    //   await TrackPlayer.updateOptions(TRACK_PLAYER_CONTROLS_OPTS);

    //   // TrackPlayer.addEventListener(PLAYBACK_TRACK_CHANGED, async (e) => {
    //   //   const trackId = (await TrackPlayer.getCurrentTrack()) - 1;
    //   //   if (trackId !== index.current) {
    //   //     setSongIndex(trackId);
    //   //     isItFromUser.current = false;

    //   //     if (trackId > index.current) {
    //   //       goNext();
    //   //     } else {
    //   //       goPrv();
    //   //     }
    //   //     setTimeout(() => {
    //   //       isItFromUser.current = true;
    //   //     }, 200);
    //   //   }
    //   // });

    //   TrackPlayer.addEventListener(TrackPlayerEvents.REMOTE_DUCK, (e) => {
    //     if (e.paused) {
    //       TrackPlayer.pause();
    //     } else {
    //       TrackPlayer.play();
    //     }
    //   });
    // });

    return () => {
      scrollX.removeAllListeners();
      TrackPlayer.destroy();
    };
  }, [scrollX, data]);

  // useEffect(() => {
  //   if (isPlayerReady.current && isItFromUser.current) {
  //     TrackPlayer.skip(data[songIndex].id)
  //       .then((_) => {
  //         console.log('changed track');
  //       })
  //       .catch((e) => console.log('error in changing track ', e));
  //   }
  //   index.current = songIndex;
  // }, [songIndex, data]);

  const renderItem = ({ index, item }) => {
    return (
      <View>
        <ListItem item={item} />
      </View>
    );
  };

  // const goNext = async () => {
  //   slider.current.scrollToOffset({
  //     offset: (index.current + 1) * width,
  //   });

  //   await TrackPlayer.play();
  // };
  // const goPrv = async () => {
  //   slider.current.scrollToOffset({
  //     offset: (index.current - 1) * width,
  //   });

  //   await TrackPlayer.play();
  // };
  async function jumpForward() {
    const offset = 10;
    try {
      const position = await TrackPlayer.getPosition();
      const duration = await TrackPlayer.getDuration();

      console.log({ position, duration });

      if (duration - position > offset) {
        console.log('jumping in fact');
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
      {data && data.length > 0 ? (
        // data.map((item, key) => {
        //   return <ListItem item={item} key={key} />;
        // })
        <SafeAreaView>
          <Animated.FlatList
            // ref={slider}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            // onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            //   useNativeDriver: true,
            // })}
          />
        </SafeAreaView>
      ) : (
        <Text style={styles.message}>You haven't added any story into your wishlist yet!</Text>
      )}
    </View>
  );
};

export default AudioItem;

const styles = StyleSheet.create({
  message: {
    marginTop: 50,
    fontSize: 20,
  },
});
