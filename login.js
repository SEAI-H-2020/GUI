import 'react-native-gesture-handler';
//import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, } from 'react-native';
//import { CheckBox } from 'react-native-elements';
import ButtonBlue from '../components/button';
import LogoBig from '../components/logo';
import Interface from './apiTest';
import AsyncStorage from '@react-native-community/async-storage';





const Login = ({ navigation }) =>  {
  const [isLoading, setLoading] = useState(true);
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [request, setRequest] = useState('false');
  const [error, setError] = useState('');  
  const [response, setResponse] = useState('');  
  

  
  


const _login=() => {
  fetch('http://smartsensorbox.ddns.net:5000/users/'+username+'/'+password)
    .then((response) => response.json())
    .then((json) => setResponse(json.result))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
    console.log(response);
    if(response=='Correct username and password!'){
      // alert('logged in');
       setRequest('false');
       navigation.navigate('chooseBox');
   
     } else if(response=='Incorrect password!'){
         alert(' password is incorrrect');
         setRequest('false');
     }
     else if(response=='Check the username.'){
       alert('Username is incorrrect');
       setRequest('false');
     }
};

  return (
    <View style={styles.container}>
    
    <LogoBig/>
      
     
      <Text style={styles.title}> User name: </Text>
      
      <View style={styles.inputView} >
           
          <TextInput  
            style={styles.inputText}
            placeholder="Username..." 
            placeholderTextColor="#003f5c"
            onChangeText={(val)=> setUserName(val)}
            value={username}
            autoCapitalize="none"
            />
      </View>
      
      <Text style={styles.title}> Password: </Text>
    
      <View style={styles.inputView} >
      
          <TextInput  
          style={styles.inputText}
          placeholder="Password..." 
          placeholderTextColor="#003f5c"
          secureTextEntry
          onChangeText={(val)=> setPassword(val)}
          value={password}
          />
      </View>
    
       {Interface()}

       <ButtonBlue 
                  text='Confirm'
                  onPress={_login}
                  //onPress={()=>setRequest('true')}
                  //onPress={() => navigation.navigate('mainPage')}
                  />
        <ButtonBlue text='Register' onPress={() => navigation.navigate('Profile', { name: 'Jane' })} />
    
    </View>
      );
    
    }
   /* <ButtonBlue text='Confirm'onPress={() => navigation.navigate('mainPage')}/>*/
    export default Login;

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#ffffff',
  alignItems: 'center',
  
},
logo:{

  width: 330, 
  height: 200,
  marginBottom: '16%',
  marginTop: '10%'
  
  
},
title:{
  fontWeight:"bold",
  fontSize:20,
  color: 'black',
  fontFamily: "Montserrat",
  alignSelf: 'flex-start',
  marginLeft: '10%',
  marginBottom: '1%'

},

inputView:{
  width:"80%",
  borderRadius:5,
  height:50,
  marginBottom:20,
  justifyContent:"center",
  padding:20,
  borderColor: '#0C688F',
  borderWidth: 2,
  backgroundColor: 'white'
},
inputText:{
  height:50,
  color:"black"
},
welcome: {
  fontSize:30,
  textAlign: 'center',
  margin: 10,
  color: '#fff',
  fontFamily: 'Montserrat' ,

},


});
