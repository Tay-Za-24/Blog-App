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
        right : "9%",
        zIndex : 99,
    },
    textInsideCircle: {
        position: 'relative',
        fontSize : 20,
        bottom : "8%",
    },
});

export default styles;
