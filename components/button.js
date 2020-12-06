import React from 'react'
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'





export default function ButtonBlue({text, onPress}) {
  return(
  <TouchableOpacity onPress={onPress}>
    <View style={styles.btnContainerStyle}>
  <Text style={styles.btnTextStyle}>{ text }</Text>
    </View>
  </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
  btnContainerStyle: {
    backgroundColor: '#6DAAC3',
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginTop: '4%'
  },
  btnTextStyle: {
    color: '#ffffff',
    fontSize: 14,    
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontWeight: 'bold'
    
  }
 
})

