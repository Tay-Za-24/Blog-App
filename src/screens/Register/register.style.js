import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer : {
        paddingTop : "20%",
        paddingLeft : "5%",
        paddingRight : "5%",
    },
    intro : {
        fontSize : 26,
        marginBottom : "10%",
        fontWeight : '600',
    },  
    input : {
        height : 'auto',
        padding : 10,
        width  : '100%',
        borderWidth : 1,
        marginBottom : "10%",
        borderRadius : 10,
        backgroundColor : "#F7F8F9",
        borderColor : '#DADADA',
    },
    registerBtn : {
        backgroundColor : 'black',
        alignItems : "center",
        width : '100%',
        paddingTop : '4%',
        paddingBottom : '4%',
        borderRadius : 10,
        marginBottom : "10%",
    },
    registerBtnTxt : {
        color : 'white',
        fontSize : 20,
    },

    toLogIn : {
        fontSize : 17,
        marginLeft : '24%',
        color  : "#1E8EF6",
        textDecorationLine : 'underline'
    },
})

export default styles;