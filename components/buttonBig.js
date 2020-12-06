import React from 'react'
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'




export default function ButtonBlueBig({text, onPress}) {
    return(
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btnContainerBigStyle}>
    <Text style={styles.btnTextStyle}>{ text }</Text>
      </View>
    </TouchableOpacity>
    )
  }



  const styles = StyleSheet.create({
    btnContainerBigStyle: {
        backgroundColor: '#6DAAC3',
        paddingVertical: 8,
        paddingHorizontal: 50,
        borderRadius: 5,
       
      },
      btnTextStyle: {
        color: '#ffffff',
        fontSize: 14,    
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontWeight: 'bold'
        
      }
    })