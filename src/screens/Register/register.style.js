import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer : {
        paddingTop : "25%",
        paddingLeft : "5%",
        paddingRight : "5%",
        backgroundColor : "#f7ede2",
        paddingBottom : "20%"
    },
    intro : {
        fontSize : 26,
        marginBottom : "10%",
        fontWeight : '600',
        color : "#84a59d"
    },  
    input : {
        height : 'auto',
        padding : 10,
        width  : '100%',
        borderWidth : 1,
        borderRadius : 10,
        backgroundColor : "#F7F8F9",
        borderColor : '#DADADA',
    },
    inputError : {
        borderColor : '#fa6d6d'
    },
    errorTxt : {
        color : '#fa6d6d',
        fontWeight : "bold",
        paddingTop : '3%',
        paddingBottom : '3%'
    },
    registerBtn : {
        backgroundColor : '#84a59d',
        alignItems : "center",
        width : '100%',
        paddingTop : '4%',
        paddingBottom : '4%',
        borderRadius : 10,
        marginBottom : "5%",
        elevation : 5
    },
    registerBtnTxt : {
        color : 'white',
        fontSize : 20,
    },

    toLogIn : {
        fontSize : 17,
        marginLeft : '24%',
        color  : "#1E8EF6",
        textDecorationLine : 'underline',
        marginBottom : '5%'
    },
})

export default styles;