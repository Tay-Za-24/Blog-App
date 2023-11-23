import { View } from 'react-native';
import React, { useEffect } from 'react';
import { Easing, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import Square from './square';

const ClockAnimation = () => {
  const progress = useSharedValue(0);

useEffect(() => {
    progress.value = withRepeat(withTiming(2 * Math.PI, { duration: 8000, easing: Easing.linear }), -1);
  }, []);

  return (
    <View>
      {new Array(12).fill(0).map((_, index) => {
        return <Square key={index} progress={progress} index={index} />;
      })}
    </View>
  );
};

export default ClockAnimation;