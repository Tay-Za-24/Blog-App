import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated';
import styles from './animationStyle';

const ProgressBar = () => {
  const progress = useSharedValue(0);

  progress.value = withTiming(1, { duration: 2000, easing: Easing.linear });

  const dotStyle = useAnimatedStyle(() => {
    return {
      opacity : interpolate(progress.value, [0, 0.5, 1], [0, 1, 0])
    }
  });

  const progressBarStyle = useAnimatedStyle(() => {
    return {
      width: `${progress.value * 100}%`,
    };
  });

  return (
    <View>
      <View style={styles.progressBarContainer}>
        <Animated.View style={[styles.progressBar, progressBarStyle]} />
      </View>
    </View>
  );
};

export default ProgressBar;
