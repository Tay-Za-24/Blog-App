// stackNavigator.js
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import React, { useContext } from 'react';
import Register from "../screens/Register/register";
import LogIn from "../screens/LogIn/logIn";
import Home from "../screens/Home/home";
import Blog from "../screens/Blog/blog";
import { AuthContext } from "../hooks/context/context";
import { config, closeConfig } from '../component/transition';
import { ActivityIndicator, View } from 'react-native';

const Stack = createStackNavigator();

const InsideStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      gestureEnabled: true,
      transitionSpec: {
        open: config,
        close: closeConfig,
      },
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}
  >
    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    <Stack.Screen name="Blog" component={Blog} options={{ headerShown: false }} />
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
    <Stack.Navigator
      initialRouteName={authContext.tokenValid ? "InsideStack" : "AuthStack"}
      screenOptions={{headerShown : false}}
    >
      <Stack.Screen name="InsideStack" component={InsideStack} />
      <Stack.Screen name="AuthStack" component={AuthStack} />
    </Stack.Navigator>
  );
}
