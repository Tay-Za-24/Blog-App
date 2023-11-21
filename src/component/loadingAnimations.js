// LoadingAnimation.js

import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import Svg, { Circle } from 'react-native-svg';
import Animated, { useAnimatedProps, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated';
import { useEffect } from 'react';
import styles from './animationStyle';
import { ReText } from 'react-native-redash';

const { width, height } = Dimensions.get('window');

const circleLength = 300;
const radius = circleLength / (2 * Math.PI);

const LoadingAnimation = () => {
    const progess = useSharedValue(0);
    const AnimatedCircle = Animated.createAnimatedComponent(Circle);

    useEffect(() => {
        progess.value = withTiming(1, { duration: 2000 });
    }, []);

    const animatedProps = useAnimatedProps(() => ({
        strokeDashoffset: circleLength * (1 - progess.value),
    }));

    const progressText = useDerivedValue(() => {
        return `${Math.floor(progess.value * 100)}`
    })

    return (
        <View style={styles.main}>
           <ReText style={styles.textInsideCircle} text={progressText}/>
            <Svg style={styles.circleContainer}>
                <Circle
                    cx={width / 2}
                    cy={height / 2}
                    r={radius}
                    stroke={'transparent'}
                    strokeWidth={16}
                    fill={'transparent'}
                />
                {/* Animated Circle */}
                <AnimatedCircle
                    cx={width / 2}
                    cy={height / 2}
                    r={radius}
                    stroke={'#a8dadc'}
                    strokeWidth={8}
                    strokeDasharray={circleLength}
                    animatedProps={animatedProps}
                    strokeLinecap={'round'}
                    fill={'transparent'}
                />
            </Svg>
        </View>
    );
};

export default LoadingAnimation;
