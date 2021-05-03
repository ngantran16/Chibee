/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Dimensions,
  Animated,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

// import songs from '../../assets/data.json';
import ControlItem from '../../components/Detail/ControlItem';
import TrackPlayer, { Capability, Event } from 'react-native-track-player';
import SliderStory from '../../screens/Detail/SliderStory';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationUtils } from '../../navigation';
// import Images from '../themes/Images';

const { width, height } = Dimensions.get('screen');

export default function PlayerStory() {
  const scrollX = useRef(new Animated.Value(0)).current;

  const slider = useRef(null);
  const [songIndex, setSongIndex] = useState(0);
  const isPlayerReady = useRef(false);
  // for tranlating the album art
  const position = useRef(Animated.divide(scrollX, width)).current;

  useEffect(() => {
    scrollX.addListener(({ value }) => {
      const val = Math.round(value / width);

      setSongIndex(val);
    });
    const onWatchStory = () => {
      NavigationUtils.push({ screen: 'WatchVideo', isTopBarEnable: false });
    };
    // TrackPlayer.addEventListener(Event.PlaybackTrackChanged, (e) => {
    //   console.log(e);
    // });
    // TrackPlayer.setupPlayer().then(async () => {
    //   console.log('Player Ready');
    //   await TrackPlayer.reset();
    //   // await TrackPlayer.add(songs);
    //   isPlayerReady.current = true;
    //   TrackPlayer.play();
    //   await TrackPlayer.updateOptions({
    //     stopWithApp: false,
    //     alwaysPauseOnInterruption: true,
    //     capabilities: [
    //       Capability.Play,
    //       Capability.Pause,
    //       Capability.SkipToNext,
    //       Capability.SkipToPrevious,
    //     ],
    //   });
    // });
    return () => {
      scrollX.removeAllListeners();
    };
  }, []);

  useEffect(() => {
    if (isPlayerReady.current) {
      // TrackPlayer.skip(songs[songIndex].id);
    }
  }, [songIndex]);

  const goNext = () => {
    slider.current.scrollToOffset({
      offset: (songIndex + 1) * width,
    });
  };
  const goPrv = () => {
    slider.current.scrollToOffset({
      offset: (songIndex - 1) * width,
    });
  };

  const renderItem = ({ index, item }) => {
    return (
      <Animated.View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          alignItems: 'center',
          width: width,
          transform: [
            {
              translateX: Animated.multiply(Animated.add(position, -index), -100),
            },
          ],
        }}
      >
        <Animated.Image
          source={{ uri: item.artwork }}
          style={{ width: width - 30, height: 280, borderRadius: 5 }}
        />
      </Animated.View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={{ width: width, height: 600, marginTop: -175 }}>
        {/* <Text style={styles.title}>{songs[songIndex].title}</Text> */}
        <Animated.FlatList
          ref={slider}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={1}
          // data={songs}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: true,
          })}
        />
        <View>
          <SliderStory />
          <ControlItem onNext={goNext} onPrv={goPrv} />
        </View>
        <View style={styles.borderIcon} />
        <View style={styles.iconControl}>
          <TouchableOpacity>
            <Icon name="heart" size={32} />
            <Text style={styles.nameImg}> Yêu thích</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="book" size={32} />
            <Text style={styles.nameImg}>Đọc truyện</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="film" size={32} />
            <Text style={styles.nameImg}>Xem video</Text>
          </TouchableOpacity>
        </View>
        <View styles={styles.containerComs}>
          <Text style={styles.titleComs}>Bình luận (5)</Text>
          <TextInput
            style={styles.placeComs}
            placeholderTextColor="black"
            placeholder="Viết nhận xét..."
          />
        </View>
        <View style={styles.containerComd}>
          <View style={styles.editAvatar}>
            {/* <Image source={Images.avatar} style={styles.iconAvatar} /> */}
            <Text>Hay quá</Text>
          </View>
          <View style={styles.editComs}>
            <TouchableOpacity>
              <Icon name="edit" size={25} style={styles.iconComs} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="trash" size={25} style={styles.iconComs} />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    textAlign: 'center',
    textTransform: 'capitalize',
    color: 'black',
  },
  artist: {
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  container: {
    justifyContent: 'space-evenly',
    height: height,
    marginTop: 0,
    width: width,
  },
  iconSto: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  borderIcon: {
    width: 330,
    height: 2,
    backgroundColor: '#f2f2f2',
    marginTop: 20,
    marginLeft: 15,
  },
  iconControl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingLeft: 25,
    paddingRight: 12,
  },
  nameImg: {
    fontSize: 11,
    marginLeft: -9,
  },
  titleComs: {
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
    fontSize: 15,
  },
  placeComs: {
    width: 330,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#F3F0F0',
    marginLeft: 15,
    marginTop: 5,
    color: 'black',
  },
  containerComd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editComs: {
    flexDirection: 'row',
  },
  iconComs: {
    marginRight: 15,
    marginTop: 13,
  },
  iconAvatar: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginTop: 10,
    marginLeft: 15,
    borderWidth: 4,
    borderColor: '#E9EFF4',
  },
  editAvatar: {
    flexDirection: 'row',
  },
});
