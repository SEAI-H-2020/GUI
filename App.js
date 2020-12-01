import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View, TextInput , Image} from 'react-native'
import { CheckBox } from 'react-native-elements'
import ButtonBlue  from './components/button';


export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      email:"",
      password:"",
      checked: 'true',
    }
  }



  render(){
    return (
  <View style={styles.container}>

    <Image source = {require('./logo5.png')} style={styles.logo}/>
    
   
    <Text style={styles.title}> User name: </Text>
    
    <View style={styles.inputView} >
         
        <TextInput  
          style={styles.inputText}
          placeholder="Email..." 
          placeholderTextColor="#003f5c"
          onChangeText={text => this.setState({email:text})}/>
    </View>
    
    <Text style={styles.title}> Password: </Text>

    <View style={styles.inputView} >
    
        <TextInput  
        style={styles.inputText}
        placeholder="Password..." 
        placeholderTextColor="#003f5c"
        onChangeText={text => this.setState({email:text})}/>
    </View>

    <CheckBox
    title='Remember my password'
    checked={this.state.checked}
    
    onPress={() => {this.setState({checked: !this.state.checked}) }}
                 
              
   />

 <ButtonBlue text='Confirm' onPress={this.props.handleSubmit}/>
 <ButtonBlue text='Register' onPress={this.props.handleSubmit}/>

  </View>
    );
  }
}

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
    borderWidth: 2
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
