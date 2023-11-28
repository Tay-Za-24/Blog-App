import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer : {
        paddingLeft : "8%",
        paddingRight : "8%",
        justifyContent: 'center',
        backgroundColor : "#edede9"
    },

    menu : {
        position : "absolute",
        right : 0
    },
    
    searchBox : {
        height : 'auto',
        padding : 12,
        paddingLeft : 45,
        width  : '100%',
        borderWidth : 1,
        marginBottom : "10%",
        borderRadius : 30,
        backgroundColor : "#F7F8F9",
        borderColor : '#DADADA',
    },

    searchIcon : {
        position : "absolute",
        left : "5%",
        top : '18%',
        opacity : 0.3
    },

    closeIcon : {
        position : "absolute",
        opacity : 0.3,
        right : '5%',
        top : '12%'
    },

    tabBar : {
        flexDirection : "row",
        justifyContent : "space-around",
        marginBottom : '10%'
    },

    tab : {
        fontSize : 23,
        opacity : 0.3,
        fontWeight : "bold",
        color : "#3d405b"
    },

    activeTab : {
        opacity : 1,
        color : "#3d405b"
    },  

    loadingIndicator : {
        marginTop : "50%"
    },

    post : {
        width : "100%",
        height : 150,
        marginBottom : '8%',
        flexDirection : 'row',
        backgroundColor: "#eae0d5",
        borderRadius : 20,
        elevation : 5
    },

    image : {
        width : 150,
        height : "100%",
        borderTopLeftRadius : 10,
        borderBottomLeftRadius : 10,
    },
    desc : {
        width : "50%",
        paddingLeft : '8%',
        paddingTop : "3%",
        paddingRight : '5%',
    }, 
    postTtl : {
        fontWeight : '600',
        fontSize : 20,
        marginBottom : "3%",
    }, 

    postDate : {
        opacity : 0.6
    }, 

    postBody : {
        height : "37%"
    },
    
    readTime : {
        marginLeft : '15%',
        opacity : 0.6
    }, 

    userInfo : {
        height: "100%",
        paddingTop : "50%",
        alignItems : 'center',
        backgroundColor : '#00000050'
    },

    infoBox : {
        backgroundColor : "white",
        padding : 15,
        borderRadius : 20,
    },

    btnContain : {
        flexDirection : "row", 
        marginTop : "8%",
        marginLeft : "18%",
        marginBottom : "3%"
    },  

    logOutBtn : {
        backgroundColor : 'black',
        padding : 10,
        paddingLeft : 15,
        paddingRight : 15,
        borderRadius : 20,
        elevation: 10,
    }, 
    btnNothing : {
        backgroundColor : 'grey',
        padding : 10,
        paddingLeft : 15,
        paddingRight : 15,
        borderRadius : 20,
        marginLeft : "10%",
        width : "30%",
        alignItems : "center",
        elevation: 10,
    },

    name : {
        marginTop : '3%',
        marginLeft : "5%",
        fontSize : 20,
        fontWeight : 'bold'
    },  

    modalTxt : {
        marginBottom : "3%",
        fontSize : 16
    }, 

    emailCheck : {
        fontSize : 16,
        color  : "green"
    },

    emailNotVerified : {
        fontSize : 16,
        color : 'crimson'
    }   

})  

export default styles;