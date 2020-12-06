import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput , Image} from 'react-native'
import { CheckBox } from 'react-native-elements'
import ButtonBlue  from './components/button';
import LogoBig from './components/logo'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
/*import Login from './login';*/
/*import Register from './register';*/


const Login = ({ navigation }) =>  {
  
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState('true');
  const [error, setError] = useState('');  



  return (
    <View style={styles.container}>
    
    <LogoBig/>
      
     
      <Text style={styles.title}> User name: </Text>
      
      <View style={styles.inputView} >
           
          <TextInput  
            style={styles.inputText}
            placeholder="Username..." 
            placeholderTextColor="#003f5c"
            onChangeText={(val)=> setUserName(val)}/>
            
      </View>
      
      <Text style={styles.title}> Password: </Text>
    
      <View style={styles.inputView} >
      
          <TextInput  
          style={styles.inputText}
          placeholder="Password..." 
          placeholderTextColor="#003f5c"
          secureTextEntry
          onChangeText={(val)=> setPassword(val)}/>
      </View>
    
       
    <ButtonBlue text='Confirm'/>
    <ButtonBlue text='Register' onPress={() => navigation.navigate('Profile', { name: 'Jane' })} />
    
    </View>
      );
    
    }
    /*<ButtonBlue text='Confirm' onPress={this.props.handleSubmit}/>*/
    export default Login;

const styles = StyleSheet.create({
container: {
  flex: 1,
  
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