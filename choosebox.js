import 'react-native-gesture-handler';
//import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonBox  from '../components/buttonBox';
import ButtonBlue  from '../components/button';
import LogoBig from '../components/logo';
global.unitSystem = 'Metric';

function chooseBox ({navigation}) {
    return (
        <View style={styles.container}>

            <LogoBig/>
            
            <Text style={styles.title}> Your Smart Sensor Boxes</Text>

            <ButtonBox
                text = 'Sensor Box 1' 
                onPress = {() => navigation.navigate('mainPage')}>
            </ButtonBox>

            <ButtonBlue
                text = 'Associate Smart Sensor Box'
                onPress = {() => navigation.navigate('chooseBox')}>
            </ButtonBlue>

        </View>
    );
}

export default chooseBox;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center'
       
    },

    text:{
        width: 216,
        height: 35,
        left: 31,
        top: 182,
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 15,
        lineHeight: 18,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#000000'  
    }
})