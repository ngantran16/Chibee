/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  Dimensions,
  ScrollView,
  TextInput,
  Pressable,
  Alert,
  Modal,
} from 'react-native';
import Images from '../../themes/Images';
import Videos from '../../themes/Videos';
import Video from 'react-native-video';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import Orientation from 'react-native-orientation-locker';
import EvaluateItem from '../../components/Discover/EvaluateItem';
import Colors from '../../themes/Colors';
import { NavigationUtils } from '../../navigation';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const WatchVideo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const data = [
    {
      id: 1,
      author: 'Nguyen Van A',
      avatar: Images.avatar,
      content: 'Câu chuyện hay qua!',
      dateComment: '20/11/2021',
      isFirst: true,
    },
    {
      id: 2,
      author: 'Nguyen Van A',
      avatar: Images.discover1,
      content: 'Câu chuyện hay qua!',
      dateComment: '20/11/2021',
      isFirst: false,
    },
    {
      id: 3,
      author: 'Nguyen Van A',
      avatar: Images.discover2,
      content: 'Câu chuyện hay qua!',
      dateComment: '20/11/2021',
      isFirst: false,
    },
  ];
  const videoPlayer = useRef(null);

  const [duration, setDuration] = useState(0);
  const [paused, setPaused] = useState(true);

  const [currentTime, setCurrentTime] = useState(0);
  const [playerState, setPlayerState] = useState(PLAYER_STATES.PAUSED);
  const [isLoading, setIsLoading] = useState(true);

  const onSeek = (seek) => {
    videoPlayer?.current.seek(seek);
  };

  const onSeeking = (currentVideoTime) => setCurrentTime(currentVideoTime);

  const onPaused = (newState) => {
    setPaused(!paused);
    setPlayerState(newState);
  };

  const onReplay = () => {
    videoPlayer?.current.seek(0);
    setCurrentTime(0);
    if (Platform.OS === 'android') {
      setPlayerState(PLAYER_STATES.PAUSED);
      setPaused(true);
    } else {
      setPlayerState(PLAYER_STATES.PLAYING);
      setPaused(false);
    }
  };

  const onProgress = (data) => {
    if (!isLoading) {
      setCurrentTime(data.currentTime);
    }
  };

  const onLoad = (data) => {
    setDuration(Math.round(data.duration));
    setIsLoading(false);
  };

  const onLoadStart = () => setIsLoading(true);
  const onEnd = () => {
    setPlayerState(PLAYER_STATES.ENDED);
    setCurrentTime(duration);
  };

  const [isFullScreen, setIsFullScreen] = useState(false);

  const onFullScreen = () => {
    if (!isFullScreen) {
      Orientation.lockToLandscape();
    } else {
      if (Platform.OS === 'ios') {
        Orientation.lockToPortrait();
      }
      Orientation.lockToPortrait();
    }
    setIsFullScreen(!isFullScreen);
  };
  const [cmt, setCmt] = useState('   Viết nhận xét ... ');
  return (
    <ScrollView style={styles.container}>
      <View style={{ marginHorizontal: isFullScreen ? 50 : 0 }}>
        <View style={styles.itemScreen}>
          <TouchableOpacity onPress={() => NavigationUtils.pop()}>
            <Image source={Images.back} style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.titleStory}>Chú Cừu Con</Text>
        </View>
        <View style={styles.itemVideo}>
          <Video
            onEnd={onEnd}
            onLoad={onLoad}
            onLoadStart={onLoadStart}
            onProgress={onProgress}
            paused={paused}
            ref={(ref) => (videoPlayer.current = ref)}
            resizeMode={'cover'}
            source={Videos.demo}
            style={styles.playVideo}
            fullscreen={true}
            playWhenInactive={false}
          />
          <MediaControls
            isFullScreen={isFullScreen}
            duration={duration}
            isLoading={isLoading}
            progress={currentTime}
            onFullScreen={onFullScreen}
            onPaused={onPaused}
            onReplay={onReplay}
            onSeek={onSeek}
            onSeeking={onSeeking}
            mainColor={'orange'}
            playerState={playerState}
            style={isFullScreen ? styles.backgroundVideoFullScreen : styles.backgroundVideo}
            sliderStyle={
              isFullScreen
                ? { containerStyle: styles.mediaControls, thumbStyle: {}, trackStyle: {} }
                : { containerStyle: {}, thumbStyle: {}, trackStyle: {} }
            }
          />
        </View>
        <View style={styles.iconInteract}>
          <View style={styles.itemCenter}>
            <Image source={Images.heart} style={styles.iconHeart} />
            <Text style={styles.nameIcon}>Yêu thích</Text>
          </View>

          <Pressable
            style={[styles.itemCenter, styles.button]}
            onPress={() => setModalVisible(true)}
          >
            <Image source={Images.share} style={styles.iconShare} />
            <Text style={styles.nameIcon}>Chia sẻ</Text>
          </Pressable>

          <View style={styles.itemCenter}>
            <Image source={Images.download} style={styles.iconDown} />
            <Text style={styles.nameIcon}>Tải về</Text>
          </View>
        </View>
        <View style={styles.boderScreen} />
      </View>

      <View>
        <Text style={styles.txtComment}>Bình luận (5) </Text>
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

        <View style={styles.listComment}>
          {data.map((item, key) => {
            return (
              <EvaluateItem
                author="Nguyen Van A"
                isFirst={item.isFirst}
                content="Cau chuyen hay qua!"
                key={key}
              />
            );
          })}
        </View>
      </View>
      <TouchableOpacity>
        <Text style={styles.viewAll}>Xem thêm</Text>
      </TouchableOpacity>

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
    </ScrollView>
  );
};

export default WatchVideo;

const styles = StyleSheet.create({
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
  },
  iconBack: {
    padding: 10,
    marginTop: 11,
  },
  titleStory: {
    marginLeft: 115,
    marginTop: 7,
    fontSize: 20,
    fontWeight: 'bold',
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
  mediaControls: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignSelf:
      Platform.OS === 'android' ? (screenHeight < 800 ? 'center' : 'flex-start') : 'center',
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
