import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from 'react';
import Register from "../screens/Register/register";
import LogIn from "../screens/LogIn/logIn";
import Home from "../screens/Home/home";
import Blog from "../screens/Blog/blog";
import { AuthContext } from "../hooks/context/context";
import { config, closeConfig } from '../component/transition';
import CreatePost from "../screens/Create Post/createPost";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const DrawerNavigator = createDrawerNavigator()

const DrawerScreens = () => (
  <DrawerNavigator.Navigator
    screenOptions={
      { drawerPosition:'right',
      headerShown:false,
      drawerStyle : {
        backgroundColor : "#faedcd",
        width : "60%"
      },
      drawerActiveBackgroundColor : "#d4a373",
      drawerLabelStyle : {
        color : "#283618",
      },
      drawerItemStyle : {
        borderRadius : 25,
      }
    }}
  >
    <DrawerNavigator.Screen 
      options={{drawerIcon : () => (
        <Ionicons name={"home"} size = {20}/>
      )}}
      name="Home" 
      component={InsideStack} 
    />

    <DrawerNavigator.Screen 
      options={{drawerIcon : () => (
        <Ionicons name={"brush"} size = {20}/>
      )}}
      name="Create Post" 
      component={CreatePost} 
    />
  </DrawerNavigator.Navigator>
);

const InsideStack = () => (
  <Stack.Navigator
    initialRouteName="Main"
    screenOptions={{
      gestureEnabled: true,
      transitionSpec: {
        open: config,
        close: closeConfig,
      },
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}
  >
    <Stack.Screen name="Main" component={Home} options={{ headerShown: false }} />
    <Stack.Screen name="Blog" component={Blog} options={{ headerShown: false }} />
    <Stack.Screen name="CreatePost" component={CreatePost} options={{headerShown : false}} />
  </Stack.Navigator>
);

const AuthStack = () => (
  <Stack.Navigator 
    initialRouteName="Login"
    screenOptions={{
      transitionSpec: {
        open: config,
        close: closeConfig,
      },
      cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
    }}
  >
    <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={LogIn} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default function StackNavigator() {
  const authContext = useContext(AuthContext);

  return (
    <Stack.Navigator initialRouteName={authContext.tokenValid ? "InsideStack" : "AuthStack"} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="InsideStack" component={DrawerScreens} options={{headerShown : false}}/>
      <Stack.Screen name="AuthStack" component={AuthStack} />
    </Stack.Navigator>
  );
}
