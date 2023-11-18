import { createStackNavigator } from "@react-navigation/stack";
import React,{ useContext } from 'react'
import Register from "../screens/Register/register";
import LogIn from "../screens/LogIn/logIn";
import Home from "../screens/Home/home";
import Blog from "../screens/Blog/blog";
import { AuthContext } from "../hooks/context/context";

const Stack = createStackNavigator();

export default function StackNavigator(){

    const authContext = useContext(AuthContext);

    return(
        <Stack.Navigator initialRouteName={authContext.tokenValid ? "Home" : "Log In"}>
            <Stack.Screen name="Register" component={Register} options={{headerShown : false}} />
            <Stack.Screen name="Log In" component={LogIn} options={{headerShown : false}} />
            <Stack.Screen name="Home" component={Home} options={{headerShown : false}}/>
            <Stack.Screen name="Blog" component={Blog} options={{headerShown : false}} />
        </Stack.Navigator>
    )
}