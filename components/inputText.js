
import React from 'react'
import { StyleSheet, Text, View, TextInput , Image} from 'react-native'


const FormInput = ({ label, value, onChangeText, placeholder, secureTextEntry}) => {
    
    return(
        <View style={styles.inputView}>
            
            <TextInput
                style={styles.inputText}
                placeholder={placeholder}
                autoCorrect={false}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChangeText}
                />

        </View>
    );

};
    
export default FormInput;

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
      }
    });