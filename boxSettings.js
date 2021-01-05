import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity, Image, ScrollView} from 'react-native';
import ButtonBlue  from '../components/button';
import LogoSmall from '../components/logoSmall';
import Navbar from '../components/navbar';
import SettingsBox from '../components/settingsBox';
import PeriodPicker from '../components/periodPicker';

export default function boxSettings ({navigation}) {
    return(
        
        <View style={styles.container}>
            <LogoSmall/>
            
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
                <PeriodPicker/>
                <TouchableOpacity onPress={() => navigation.navigate('boxSettings')}>
                    <Image
                        source={require('../images/edit.png')}
                        style={styles.icon}/>
                </TouchableOpacity>
            </View>

           {/* <ButtonBlue 
                style={styles.button}>
                text='Reset'
                onPress ={() => navigation.navigate('boxSettings')}>
           </ButtonBlue>*/}

            <Navbar/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#ffffff'
    },

    setting: {
        height: 45,
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row',
        bottom: 1,
        marginRight: '2%',
        marginBottom: '1%',
        marginVertical: '0.5%',
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


   
})