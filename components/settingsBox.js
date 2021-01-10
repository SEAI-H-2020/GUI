import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';


const settingsBox = ({text, valueFromApi, onChangeText, editable}) => {


  return(
    <View style={styles.textContainer}>
        <TextInput
           style={styles.text}
           value={text}
           placeholder={valueFromApi}
           autoCorrect={false}
           editable={editable}
           onChangeText={onChangeText}/>
           
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
    lineHeight: 10,
    height: 35,
    //display: 'flex',
    textAlign: 'left',
    color: '#000000'
  },
});