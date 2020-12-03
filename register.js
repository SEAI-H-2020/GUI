import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View, TextInput , Image} from 'react-native'
import { CheckBox } from 'react-native-elements'
import ButtonBlue  from './components/button';
import LogoBig from './components/logo'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


 


 const Register = ({ navigation, route }) => {
    return <Text>This is {route.params.name}'s profile</Text>;
  };

  export default Register;