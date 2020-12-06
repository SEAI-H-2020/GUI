import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput , Image} from 'react-native'
import { CheckBox } from 'react-native-elements'
import ButtonBlueBig  from './components/buttonBig';
import LogoBig from './components/logo'
import ButtonBlue  from './components/button';
import FormInput from './components/inputText'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EmailTextField from './components/inputEmail'

 
/**return <Text>This is {route.params.name}'s profile</Text>; botao para violtar para trás */

 const Register = ({ navigation, route }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return(
    <View style={styles.container}>
    
      <LogoBig/>

      <ButtonBlueBig text='Sign up with Google'/>

      <Text style={styles.title}> User name: </Text>

      <FormInput
           
           onChangeText={(val)=> setUsername(val)} /** poe o valor na variavel newUsername */
           

      />

      <Text style={styles.title}> Email address: </Text> 

      <EmailTextField 
                term = {email} 
               
                onTermChange = {newEmail => setEmail(newEmail)}
      />

      <Text style={{fontSize:8}}>email:{email}</Text>

      <Text style={styles.title}> Password: </Text>

      <FormInput
           
           onChangeText={(val)=> setPassword(val)}
           secureTextEntry
           value = {password} 
           
      />

      <Text style={styles.title}> Confrim Password: </Text>

      <FormInput
           
           onChangeText={(val)=> setPassword(val)}
           secureTextEntry
           confirmvalue = {password} 
           
      />
            
      <ButtonBlue text='Confirm'/>
      </View>
);
    




    
  }

  export default Register;


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      alignItems: 'center',
      
    },
    title:{
      fontWeight:"bold",
      fontSize:20,
      color: 'black',
      fontFamily: "Montserrat",
      alignSelf: 'flex-start',
      marginLeft: '10%',
      marginBottom: '1%',
      marginTop: '1.5%'
    
    }
  });