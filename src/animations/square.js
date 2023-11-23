import { View, Animated } from 'react-native';
import React from 'react';
import { numberOfSquares, squareSize } from '../util/constant/constant';
import { useAnimatedStyle, useDerivedValue, withSpring, withTiming } from 'react-native-reanimated';

const Square = ({ index, progress }) => {
  const offsetAngle = (2 * Math.PI) / numberOfSquares;
  const finalAngle = offsetAngle * (numberOfSquares - 1 - index);

  const rotate = useDerivedValue(() => {
    if (progress.value <= 2 * Math.PI) {
      return Math.min(finalAngle, progress.value);
    }
    if (progress.value - 2 * Math.PI < finalAngle) {
      return finalAngle;
    }

    return progress.value;
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${progress.value}rad` }, { translateY: -index * squareSize }],
    };
  });

  const translateY = useDerivedValue(() => {
    if (rotate.value === finalAngle) {
      return withSpring(-numberOfSquares * squareSize);
    }
    if (progress.value > 2 * Math.PI) {
      return withTiming((index - numberOfSquares) * squareSize);
    }
    return -index * squareSize;
  });

  return (
    <Animated.View
      key={index}
      style={[
        {
          height: squareSize,
          aspectRatio: 1,
          backgroundColor: 'black',
          opacity: (index + 1) / numberOfSquares,
          position: 'absolute',
          transform: [{ rotate: `${finalAngle}rad` }, { translateY: -index * squareSize }],
        },
        rStyle,
      ]}
    />
  );
};

export default Square;