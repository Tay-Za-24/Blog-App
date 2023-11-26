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
    
    //progress bar
    progressBarContainer: {
        marginTop : "10%",
        height: 20,
        width: '100%',
        backgroundColor: '#dad7cd',
        borderRadius: 10,
        overflow: 'hidden',
      },
      progressBar: {
        height: '100%',
        backgroundColor: '#84a98c',
      },
});

export default styles;
