import { Easing } from "react-native-reanimated"

export const config = {
    animation : 'spring',
    config : {
        stiffness : 800,
        damping : 500,
        mass : 3,
        overshootClamping : false,
        restDisplacementThreshold : 0.01,
        restSpeedThreshold : 0.01,
    }
}

export const closeConfig = {
    animation : 'timing',
    config : {
        duration : 300,
        easing : Easing.linear
    }
}