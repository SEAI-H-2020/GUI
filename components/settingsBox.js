import React from 'react'
import { Text, View, StyleSheet } from 'react-native'


function settingsBox({text}) {
  return(
    <View style={styles.textContainer}>
        <Text style={styles.text}> {text} </Text>
    </View>
  );
}

export default settingsBox;

const styles = StyleSheet.create({
  textContainer: {
    width: '70%',
    height: 35,
    marginRight: '4%',
    alignSelf: 'flex-start',
    /*left: 48,
    top: 214,*/
    color: '#FFFFFF',
    borderWidth: 1.5,
    borderStyle: 'solid',
    borderColor: '#0C688F',
    borderRadius: 5
  },

  text: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 28,
    display: 'flex',
    textAlign: 'left',
    color: '#000000'
  },
});