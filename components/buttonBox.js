import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';


export default function ButtonBox({text, onPress}) {
  return(
  <TouchableOpacity onPress={onPress}>
    <View style={styles.btnContainerStyle}>
        <Text style={styles.btnTextStyle}>{ text }</Text>
    </View>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    btnContainerStyle: {
        paddingVertical: 8,
        paddingHorizontal: 25,
        marginTop: '4%',
        marginBottom: '20%',
        alignItems: 'center',
        backgroundColor: '#6DAAC3',
        borderColor: '#375764',
        borderStyle: 'solid',
        borderWidth: 3,
        borderRadius: 5
    },
    btnTextStyle: {
        color: '#ffffff',
        fontSize: 14,    
        textAlign: 'center',
        fontFamily: 'Montserrat',
        fontWeight: 'bold'
    }
  });