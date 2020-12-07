import 'react-native-gesture-handler';
//import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
//import {Button, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/login';
import Register from './pages/register';
import chooseBox from './pages/choosebox';
import main from './pages/main';
import reportProblems from './pages/report';
import boxSettings from './pages/boxSettings';
import userSettings from './pages/userSettings';
import tempPage from './pages/temp';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="Profile" component={Register} />
        <Stack.Screen name="chooseBox" component = {chooseBox} />
        <Stack.Screen name="mainPage" component = {main} />
        <Stack.Screen name="ReportProblems" component={reportProblems} />
        <Stack.Screen name="BoxSettings" component={boxSettings} />
        <Stack.Screen name="UserSettings" component={userSettings} />
        <Stack.Screen name="tempPage" component={tempPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

