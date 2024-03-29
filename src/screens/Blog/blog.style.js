import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image : {
        width : "100%",
        maxHeight : "70%",
        zIndex : 1,
    },
    blogTtl : {
        fontWeight : '600',
        fontSize : 20,
        marginBottom : "5%"
    }, 
    desc : {
        paddingLeft : '8%',
        paddingTop : "3%",
        paddingRight : '5%',
    }, 

    navBar : {
        flexDirection: 'row',
        width: "100%",
        backgroundColor : 'transparent',
        zIndex: 2,
        position: 'absolute',
        top : "7%"
    },  

    commentBox : {
        width : "100%",
        justifyContent : "center",
        alignItems : "center",
        padding : 10,
        backgroundColor : 'grey'
    }
    
})

export default styles