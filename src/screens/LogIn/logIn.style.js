import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer : {
        paddingTop : "28%",
        paddingLeft : "8%",
        paddingRight : "8%",
        justifyContent: 'center',
    },
    intro : {
        fontSize : 26,
        marginBottom : "16%",
        fontWeight : '600',
    },
    
    input : {
        height : 'auto',
        padding : 15,
        width  : '100%',
        borderWidth : 1,
        marginBottom : "15%",
        borderRadius : 10,
        backgroundColor : "#F7F8F9",
        borderColor : '#DADADA',
    },

    logInBtn : {
        backgroundColor : 'black',
        alignItems : "center",
        width : '100%',
        paddingTop : '4%',
        paddingBottom : '4%',
        borderRadius : 10,
        marginBottom : "10%",
        marginTop : '3%'
    },

    logInBtnTxt : {
        color : 'white',
        fontSize : 20,
    },

    registerBtn : {
        alignItems : "center",
        width : '100%',
        paddingTop : '4%',
        paddingBottom : '4%',
        borderRadius : 10,
        borderWidth : 2,
        marginBottom : "10%"
    },

    registerBtnTxt : {
        fontSize : 20,
    },

    guestBtn : {
        fontSize : 17,
        marginLeft : '28%',
        color  : "#1E8EF6",
        textDecorationLine : 'underline'
    }
})

export default styles