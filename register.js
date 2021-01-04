import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput , Image} from 'react-native'
import { CheckBox } from 'react-native-elements'
import ButtonBlueBig  from '../components/buttonBig';
import LogoBig from '../components/logo'
import ButtonBlue  from '../components/button';
import FormInput from '../components/inputText'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EmailTextField from '../components/inputEmail'

 
/**return <Text>This is {route.params.name}'s profile</Text>; botao para violtar para trás */

 const Register = ({ navigation, route }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState(''); 
  const [isLoading, setLoading] = useState(true); 
  const [confirmPassword, setConfirmPassword] = useState('');



  const _registo=() => {
    if(confirmPassword == password){
      
      fetch('http://smartsensorbox.ddns.net:5000/insertuser/'+username+'/'+password+'/'+email)
      // fetch('http://smartsensorbox.ddns.net:5000/insertuser/demo/demopw/demo@email.com')
          .then((response) => response.json())
          .then((json) => setResponse(json.result))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      console.log(response);

      if (response== 'Utilizador já existe na DB') {
        alert('Utilizador já existe na base de dados');
      } 
      if(response== 'Utilizador inserido na DB com sucesso') {
        navigation.navigate('chooseBox');
      }
    }
    else{
      alert('Passwords não são iguais')
    }  
  };
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

      <Text style={styles.title}> Confirm Password: </Text>

      <FormInput
           
           onChangeText={(val)=> setConfirmPassword(val)}
           secureTextEntry
           confirmvalue = {confirmPassword} 
           
      />
            
      <ButtonBlue text='Confirm'  onPress={_registo}/>
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