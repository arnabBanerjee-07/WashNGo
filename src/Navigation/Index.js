import 'react-native-gesture-handler';
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import mmkv from '../Component/mmkv';
import route from './route';
import Signin from '../Screens/Authentication/Signin';
import Home from '../Screens/HomeScreen/Home';
import Signup from '../Screens/Authentication/Signup';
import Welcome from '../Screens/WelcomeScreen/Welcome';

const Stack = createStackNavigator();

const Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={route.Welcome}>
        <Stack.Screen name={route.Welcome} component={Welcome} />
        <Stack.Screen
          name={route.Signin}
          component={Signin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={route.Home}
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={route.Signup}
          component={Signup}
          options={{headerShown: false}}
        />
         </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Index;