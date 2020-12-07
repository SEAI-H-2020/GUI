import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'


export default function valueBox ({text}) {
  return(
    <View style={styles.textContainer}>
        <Text style={styles.text}>{ text }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    width: 69,
    height: 31,
    /*left: 48,
    top: 214,*/
    color: '#FFFFFF',
    borderWidth: 1.5,
    borderStyle: 'solid',
    borderColor: '#0C688F',
    borderRadius: 5
  },

  text: {
    width: 68,
    height: 25,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 16,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#000000'
  },
});