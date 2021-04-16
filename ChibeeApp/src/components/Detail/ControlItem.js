import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TrackPlayer, { usePlaybackState } from 'react-native-track-player';

export default function Controller({ onNext, onPrv }) {
  const playbackState = usePlaybackState();
  const [checkPlay, setCheckPlay] = useState(true);
  const onPlayPause = () => {
    console.log(playbackState);
    if (playbackState === 'playing' || playbackState === 3) {
      TrackPlayer.pause();
      setCheckPlay(false);
    } else if (playbackState === 'paused' || playbackState === 2) {
      TrackPlayer.play();
      setCheckPlay(true);
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity>
          <Icon name="alarm" size={35} style={styles.controlImg} />
        </TouchableOpacity>
      </View>
      <View style={styles.controlAudio}>
        <TouchableOpacity onPress={onPrv}>
          <Icon name="skip-previous" size={45} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPlayPause}>
          {checkPlay ? <Icon name="pause" size={45} /> : <Icon name="play-arrow" size={45} />}
        </TouchableOpacity>
        <TouchableOpacity onPress={onNext}>
          <Icon name="skip-next" size={45} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Icon name="restore" size={35} style={styles.controlImg} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  controlAudio: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  controlImg: {
    marginTop: 5,
  },
});
