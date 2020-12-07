import 'react-native-gesture-handler';
//import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {View, Text, StyleSheet,TouchableOpacity, Image} from 'react-native';
//import ButtonBox  from '../components/buttonBox';
import ButtonBlue  from '../components/button';
import LogoSmall from '../components/logo';
import Navbar from '../components/navbar';
import ValueBox from '../components/valueBox';

export default function boxSettings ({navigation}) {
    return(
        <View style={styles.container}>

            <LogoSmall/>

            <Text style={styles.Text}> Box name: </Text>
            <View style={styles.setting}>
                <ValueBox style={{width:'50%'}}/>
                <TouchableOpacity onPress={() => navigation.navigate('boxSettings')}>
                    <Image
                        source={require('../images/edit.png')}
                        style={styles.icon}/>
                </TouchableOpacity>
            </View>

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
    }
})