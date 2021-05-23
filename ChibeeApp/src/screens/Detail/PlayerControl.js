import React, { useEffect, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TrackPlayer, { usePlaybackState } from 'react-native-track-player';

export default function ControlItem({ jumpForward, jumpBackward }) {
  const playbackState = usePlaybackState();
  const isPlaying = useRef('paused');

  useEffect(() => {
    if (playbackState === 'playing' || playbackState === 3) {
      isPlaying.current = 'playing';
    } else if (playbackState === 'paused' || playbackState === 2) {
      isPlaying.current = 'paused';
    } else {
      isPlaying.current = 'loading';
    }
  }, [playbackState]);

  const returnPlayBtn = () => {
    switch (isPlaying.current) {
      case 'playing':
        return <Icon color="#000000" name="play-circle" size={45} />;
      case 'paused':
        return <Icon color="#000000" name="pause-circle" size={45} />;
      default:
        return <Icon color="#000000" name="pause-circle" size={45} />;
    }
  };

  const onPlayPause = () => {
    if (isPlaying.current === 'playing') {
      TrackPlayer.pause();
    } else if (isPlaying.current === 'paused') {
      TrackPlayer.play();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={jumpBackward} style={styles.controlStyle}>
        <Icon color="#000" name="backward" size={35} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPlayPause} style={styles.controlStyle}>
        {returnPlayBtn()}
      </TouchableOpacity>
      <TouchableOpacity onPress={jumpForward}>
        <Icon color="#000" name="forward" size={35} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlStyle: {
    marginRight: 20,
  },
});
