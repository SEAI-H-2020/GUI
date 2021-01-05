import 'react-native-gesture-handler';
import React, {useState, setState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import SettingsBox  from '../components/settingsBox';
import LogoSmall from '../components/logoSmall';
import Navbar from '../components/navbar';
import UnitPicker from '../components/unitPicker';

//import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function userSettings ({navigation}) {
    return(
        <View style={styles.container}>
            <LogoSmall/>
            <ScrollView>
           
            <Text style={styles.text}> Name: </Text>
            <View style={styles.setting}>
                <SettingsBox/>
                <TouchableOpacity onPress={() => navigation.navigate('userSettings')}>
                    <Image
                        source={require('../images/edit.png')}
                        style={styles.icon}/>
                </TouchableOpacity>
            </View>

            <Text style={styles.text}> Email Address: </Text>
            <View style={styles.setting}>
                <SettingsBox/>
                <TouchableOpacity onPress={() => navigation.navigate('userSettings')}>
                    <Image
                        source={require('../images/edit.png')}
                        style={styles.icon}/>
                </TouchableOpacity>
            </View>

            <Text style={styles.text}> Unit System: </Text>
            <View style={styles.setting}>
                <UnitPicker/>
                <TouchableOpacity onPress={() => navigation.navigate('userSettings')}>
                    <Image
                        source={require('../images/edit.png')}
                        style={styles.icon}/>
                </TouchableOpacity>
            </View>

            <Text style={styles.text}> Boxes: </Text>
            <View style={styles.setting}>
                <SettingsBox
                    text='Smart Sensor Box 1'/>
                <TouchableOpacity onPress={() => navigation.navigate('userSettings')}>
                    <Image
                        source={require('../images/delete.png')}
                        style={styles.icon}/>
                </TouchableOpacity>
            </View>

            <Image
                source={require('../images/logout.png')}
                style={styles.logout}/>

            </ScrollView>
            <Navbar/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },

    setting: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row',
        marginRight: '2%'
    },

    text: {
        alignSelf: 'flex-start',
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 15,
        marginBottom: '2%',
        marginLeft: '8%',
    },

    logout: {
        alignSelf: 'center',
        margin: '10%'
    },

    
})