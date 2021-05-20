/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Slider from '@react-native-community/slider';
import TrackPlayer from 'react-native-track-player';
import { useTrackPlayerProgress } from 'react-native-track-player/lib/hooks';
import { PLAYBACK_TRACK_CHANGED } from 'react-native-track-player/lib/eventTypes';

const { width } = Dimensions.get('window');
export default function SliderAudio() {
  const { position, duration } = useTrackPlayerProgress(1000, null);
  const [isSeeking, setIsSeeking] = useState(false);
  const [seek, setSeek] = useState(0);

  useEffect(() => {
    TrackPlayer.addEventListener(PLAYBACK_TRACK_CHANGED, () => {
      setIsSeeking(false);
    });
  }, []);

  const formatTime = (secs) => {
    let minutes = Math.floor(secs / 60);
    let seconds = Math.ceil(secs - minutes * 60);

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  };

  const handleChange = (val) => {
    TrackPlayer.seekTo(val);
    TrackPlayer.play().then(() => {
      setTimeout(() => {
        setIsSeeking(false);
      }, 1000);
    });
  };

  return (
    <View style={styles.container}>
      <Slider
        style={{ width: width * 0.58, marginLeft: -10 }}
        minimumValue={0}
        value={isSeeking ? seek : position}
        onValueChange={(value) => {
          TrackPlayer.pause();
          setIsSeeking(true);
          setSeek(value);
        }}
        maximumValue={duration}
        minimumTrackTintColor="#00D1FF"
        onSlidingComplete={handleChange}
        maximumTrackTintColor="#4d4d4d"
        thumbTintColor="#e6e6e6"
      />
      <View style={styles.timeContainer}>
        <Text style={styles.timers}>{formatTime(isSeeking ? seek : position)}</Text>
        <Text style={styles.timers}>{formatTime(duration)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: 35,
    width: width - 200,
  },
  timers: {
    color: '#000000',
    fontSize: 16,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
