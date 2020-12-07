import 'react-native-gesture-handler';
//import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
//import ButtonBox  from '../components/buttonBox';
import ButtonBlue  from '../components/button';
import LogoSmall from '../components/logo';
import Navbar from '../components/navbar';
import ValueBox from '../components/valueBox';

export default function userSettings () {
    return(
        <View>
            <Text> Hello there, user settings page </Text>
        </View>
    );
}