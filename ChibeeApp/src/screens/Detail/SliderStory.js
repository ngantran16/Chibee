import React from 'react';
import TrackPlayer, { useProgress } from 'react-native-track-player';
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

const formatTime = (secs) => {
  let minutes = Math.floor(secs / 60);
  let seconds = Math.ceil(secs - minutes * 60);

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  return `${minutes}:${seconds}`;
};
const SliderStory = () => {
  const { position, duration } = useProgress();
  const handleChange = (val) => {
    TrackPlayer.seekTo(val);
  };
  return (
    <View style={styles.container}>
      <Slider
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ width: 360, height: 15, alignItems: 'center' }}
        minimumValue={70}
        maximumValue={duration}
        value={position}
        minimumTrackTintColor="#00D1FF"
        maximumTrackTintColor="#595959"
        thumbTintColor="#595959"
        onSlidingComplete={handleChange}
      />
      <View style={styles.timerContainer}>
        <Text style={styles.timer}>{formatTime(position)}</Text>
        <Text style={styles.timer}>{formatTime(duration)}</Text>
      </View>
    </View>
  );
};

export default SliderStory;

const styles = StyleSheet.create({
  container: {
    height: 30,
  },
  timerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timer: {
    color: 'black',
    fontSize: 12,
    paddingLeft: 15,
    paddingRight: 16,
  },
});
