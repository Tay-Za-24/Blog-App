import { View } from 'react-native';
import React, { useEffect, useMemo } from 'react';
import { Easing, useSharedValue, withEnd, withTiming } from 'react-native-reanimated';
import Square from './square';

const ClockAnimation = () => {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withEnd(withTiming(2 * Math.PI, { duration: 8000, easing: customEasingFunction }), 0);
  }, []);

  return (
    <View>
      {new Array(12).fill(0).map((_, index) => {
        return useMemo(() => <Square key={index} progress={progress} index={index} />, [progress, index]);
      })}
    </View>
  );
};

export default ClockAnimation;

const customEasingFunction = (t) => {
  return t;
};