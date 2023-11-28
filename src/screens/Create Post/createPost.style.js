import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    mainContainer : {
        paddingBottom : "13%",
        paddingLeft : "8%",
        paddingRight : "8%",
        justifyContent: 'center',
        backgroundColor : "#f5ebe0",
        height : "100%"
    },

    profile : {
        position : "absolute",
        right : 0
    },

    header : {
        fontSize : 20,
        fontWeight : "500",
        marginTop : "2%"
    },

    addImageBtn : {
        flexDirection : 'row',
        backgroundColor : "#81b29a",
        padding : 15,
        borderRadius : 15,
        alignItems : "center",
        marginBottom : "7%"
    },  

    titleInput : {
        marginTop : "2%",
        height : 'auto',
        padding : 10,
        width  : '100%',
        borderWidth : 1,
        borderRadius : 10,
        backgroundColor : "#edede9",
        borderColor : '#d6ccc2'
    },

    bodyInput : {
        backgroundColor : "#edede9",
        borderColor : '#d6ccc2',
        borderWidth : 1,
        borderRadius : 10,
        padding : 10,
        textAlignVertical: 'top',
        marginTop : "2%"
    }, 

    createBtn : {
        backgroundColor : '#588157',
        width : "35%",
        height : "23%",
        borderRadius : 25,
        marginTop : "3%",
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
    }, 
    modal : {
        height: "100%",
        paddingTop : "70%",
        alignItems : 'center',
        backgroundColor : '#00000050'
    }, 
    box : {
        width : '80%',
        height : "30%",
        backgroundColor : "white",
        padding : 30,
        borderRadius : 20,
        zIndex : 2,
    },
    btn : {
        marginTop : "10%",
        backgroundColor : 'grey',
        padding : 10,
        borderRadius : 20,
        width : " 40%",
    },
    innerBox: {
        justifyContent : "center",
        alignItems : "center"
    }

})

export default styles