import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer : {
        height : "100%",
        paddingTop : "25%",
        paddingLeft : "8%",
        paddingRight : "8%",
        paddingBottom : "30%",
        justifyContent: 'center',
        backgroundColor : "#f7ede2"
    },
    intro : {
        fontSize : 26,
        marginBottom : "16%",
        fontWeight : '600',
        color : "#84a59d",
    },
    
    input : {
        height : 'auto',
        padding : 15,
        width  : '100%',
        borderWidth : 1,
        marginBottom : "3%",
        borderRadius : 10,
        backgroundColor : "#F7F8F9",
        borderColor : '#DADADA',
    },

    logInBtn : {
        backgroundColor : '#84a59d',
        alignItems : "center",
        width : '100%',
        paddingTop : '4%',
        paddingBottom : '4%',
        borderRadius : 10,
        marginBottom : "5%",
        marginTop : '3%',
        elevation : 5
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
        marginTop : '5%',
        borderColor :"#84a59d",
    },

    inputError : {
        borderColor : '#fa6d6d'
    },

    errorTxt : {
        color : '#fa6d6d',
        fontWeight : "bold",
        paddingBottom : '8%'
    },

    registerBtnTxt : {
        fontSize : 20,
        color : '#84a59d'
    },

    guestBtn : {
        fontSize : 17,
        marginLeft : '27%',
        marginTop : '10%',
        color  : "#1E8EF6",
        textDecorationLine : 'underline',
        marginBottom : "5%",
    }
})

export default styles