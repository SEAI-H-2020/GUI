import React, { useState } from 'react'
import { TextInput, Text, StyleSheet, View } from 'react-native'



const EmailTextField = ({ term, placeholder, onTermChange, onTermSubmit }) => {

    const [error, setError] = useState('')
/*
    isEmailValid = () => {  /**Como se faz diz email função dentro de uma função quero usa-la na onEndEditing={isEmailValid} */
  /*      let email = term
        let Pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        Pattern.test(String(email).toLowerCase()) ? setError('') : setError("Invalid Email Address")
    }
*/
    return (
        
        <View style = {{width:'100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text style = {styles.ErrorText}> {error} </Text>
       
            <View style ={styles.inputView}>
                <TextInput
                style={styles.inputText}
                autoCorrect = {false}
                placeholder = {placeholder}
                value = {term}
                onChangeText={onTermChange}
               
                   
                    
                    > 

                </TextInput>

            </View>
            </View>
        
    )}

    export default EmailTextField
    const styles = StyleSheet.create({
        inputView:{
            width:"80%",
            borderRadius:5,
            height:50,
            marginBottom:5,
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
          ErrorText: {
            fontSize: 12,
            color: 'red',
            marginHorizontal: 20,
            width:"80%"
        }
        })
