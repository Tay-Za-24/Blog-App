import { createStackNavigator } from "@react-navigation/stack";
import Register from "../screens/Register/register";
import LogIn from "../screens/LogIn/logIn";
import Home from "../screens/Home/home";
import { FastField } from "formik";

const Stack = createStackNavigator();

export default function StackNavigator(){
    return(
        <Stack.Navigator initialRouteName="Log In">
            <Stack.Screen name="Register" component={Register} options={{headerShown : false}} />
            <Stack.Screen name="Log In" component={LogIn} options={{headerShown : false}} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}