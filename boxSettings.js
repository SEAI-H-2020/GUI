import 'react-native-gesture-handler';
//import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {View, Text, StyleSheet,TouchableOpacity, Image, ScrollView} from 'react-native';
import ButtonBlue  from '../components/button';
import LogoSmall from '../components/logoSmall';
import Navbar from '../components/navbar';
import SettingsBox from '../components/settingsBox';

export default function boxSettings ({navigation}) {
    return(
        
        <View style={styles.container}>
            <LogoSmall/>
            <ScrollView>
            
            <Text style={styles.text}> Box name: </Text>
            <View style={styles.setting}>
                <SettingsBox/>
                <TouchableOpacity onPress={() => navigation.navigate('boxSettings')}>
                    <Image
                        source={require('../images/edit.png')}
                        style={styles.icon}/>
                </TouchableOpacity>
            </View>

            <Text style={styles.text}> Instalation date: </Text>
            <View style={styles.setting}>
                <SettingsBox/>
                <TouchableOpacity onPress={() => navigation.navigate('boxSettings')}>
                    <Image
                        source={require('../images/edit.png')}
                        style={styles.icon}/>
                </TouchableOpacity>
            </View>

            <Text style={styles.text}> Sample period: </Text>
            <View style={styles.setting}>
                <SettingsBox/>
                <TouchableOpacity onPress={() => navigation.navigate('boxSettings')}>
                    <Image
                        source={require('../images/edit.png')}
                        style={styles.icon}/>
                </TouchableOpacity>
            </View>

            <ButtonBlue 
                text='Reset'
                onPress ={() => navigation.navigate('boxSettings')}>
            </ButtonBlue>

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
    }
})