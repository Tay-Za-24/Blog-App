import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer : {
        paddingLeft : "8%",
        paddingRight : "8%",
        justifyContent: 'center',
    },

    profile : {
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
        fontWeight : "bold"
    },

    activeTab : {
        opacity : 1
    },  

    loadingIndicator : {
        marginTop : "50%"
    },

    post : {
        width : "100%",
        height : 150,
        marginBottom : '8%',
        flexDirection : 'row',
    },

    image : {
        width : 150,
        height : "100%",
        borderTopLeftRadius : 10,
        borderBottomLeftRadius : 10,
    },
    desc : {
        paddingLeft : '8%',
        paddingTop : "3%",
        paddingRight : '5%',
    }, 
    postTtl : {
        fontWeight : '600',
        fontSize : 20,
    }, 
    postDate : {
        marginTop : '40%',
        opacity : 0.6
    }, 
    readTime : {
        marginTop : '40%',
        marginLeft : '15%',
        opacity : 0.6
    }
})  

export default styles;