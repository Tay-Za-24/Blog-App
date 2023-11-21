import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleContainer: {
        position: 'absolute',
        bottom : "32%",
        right : "9%"
    },
    textInsideCircle: {
        position: 'absolute',
        fontSize : 20,
        bottom : "55%"
    },
});

export default styles;
