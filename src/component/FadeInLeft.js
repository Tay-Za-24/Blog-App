import React from 'react';
import { Animated, Easing } from 'react-native';
import { useSharedValue, useAnimatedStyle, useAnimatedReaction, withSpring } from 'react-native-reanimated';

const FadeInLeft = ({ children }) => {
  const translateX = useSharedValue(-1000);

  useAnimatedReaction(
    () => translateX.value,
    (currentTranslateX) => {
      if (currentTranslateX === -1000) {
        translateX.value = withSpring(0, { stiffness: 100 });
      }
    },
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  return <Animated.View style={[animatedStyle]}>{children}</Animated.View>;
};

export default FadeInLeft;