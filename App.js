
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput , Image} from 'react-native'
import ButtonBlue  from './components/button';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogoBig from './components/logo'
import Login from './login';
import { CheckBox } from 'react-native-elements'
import Register from './register';



    

const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Login}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

