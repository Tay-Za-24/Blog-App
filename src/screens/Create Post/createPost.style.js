import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    mainContainer : {
        paddingBottom : "13%",
        paddingLeft : "8%",
        paddingRight : "8%",
        justifyContent: 'center',
        backgroundColor : "#f5ebe0"
    },

    profile : {
        position : "absolute",
        right : 0
    },

    header : {
        fontSize : 20,
        fontWeight : "500",
        marginLeft : "16%",
        marginTop : "1%"
    },

    titleInput : {
        marginTop : "2%",
        height : 'auto',
        padding : 10,
        width  : '100%',
        borderWidth : 1,
        borderRadius : 10,
        backgroundColor : "#edede9",
        borderColor : '#d6ccc2',
        marginBottom : "7%"
    },

    bodyInput : {
        backgroundColor : "#edede9",
        borderColor : '#d6ccc2',
        borderWidth : 1,
        borderRadius : 10,
        marginTop : "2%",
        padding : 10,
        textAlignVertical: 'top'
    }, 

    createBtn : {
        backgroundColor : '#588157',
        width : "35%",
        height : "23%",
        borderRadius : 25,
        marginTop : "10%",
        flexDirection : "row",
        marginLeft : "30%",
        marginBottom : "5%"
    }, 
    createTxt : {
        color : "white",
        textAlign : "center",
        fontSize : 16,
        marginLeft : "5%",
        marginTop : "11%"
    }, 
    createIcon : {
        marginLeft : "10%",
        marginTop : "7%"
    }
})

export default styles