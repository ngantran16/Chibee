import React, { useEffect, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TrackPlayer, { usePlaybackState } from 'react-native-track-player';

export default function PlayerControl() {
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
        return <Icon color="#000000" name="play-circle" size={35} />;
      case 'paused':
        return <Icon color="#000000" name="pause-circle" size={35} />;
      default:
        return <Icon color="#000000" name="pause-circle" size={35} />;
    }
  };

  const onPlayPause = () => {
    if (isPlaying.current === 'playing') {
      TrackPlayer.pause();
    } else if (isPlaying.current === 'paused') {
      TrackPlayer.play();
    }
  };

  return <TouchableOpacity onPress={onPlayPause}>{returnPlayBtn()}</TouchableOpacity>;
}
