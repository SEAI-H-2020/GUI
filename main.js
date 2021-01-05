import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {View, TouchableOpacity, StyleSheet, Image, ActivityIndicator, FlatList, Text} from 'react-native';
import ButtonBlue  from '../components/button';
import LogoSmall from '../components/logoSmall';
import Navbar from '../components/navbar';
import ValueBox from '../components/valueBox';
//import userSettings from '/userSettings';


const main = ({navigation}) => {

    //const {navigation} = props;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {

        if(global.unitSystem == 'Metric') {
            fetch('http://smartsensorbox.ddns.net:5000/measurements/')
            .then((response) => response.json())
            .then((json) => setData(json.measurement[0]))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false)); 
        }
        else  { 
            fetch('http://smartsensorbox.ddns.net:5000/measurements/imperial')
            .then((response) => response.json())
            .then((json) => setData(json.measurement[0]))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
        } 

    });
    

    return (
    <View style={styles.container}>

        <LogoSmall/>

        <View style={styles.sensorsContainer}>
            <View style={styles.iconPlusValue}>
                <TouchableOpacity onPress={() => navigation.navigate('tempPage')}>
                    <Image 
                        style={{width: 100, height: 99, marginBottom: '1%'}}
                        source={require('../images/temp.png')}
                    />
                </TouchableOpacity>
                <ValueBox value={data.temperature}/> 
        </View>

        <View style={styles.iconPlusValue}>
                <Image 
                    style={{width: 100, height: 99, marginBottom: '1%'}}
                    source={require('../images/humidity.png')}
                />
                <ValueBox value={data.humidity}/>
            </View>
        </View>
        
        <View style={styles.sensorsContainer}>
            <View style={styles.iconPlusValue}>
                <Image 
                    style={{width: 90, height: 82, marginBottom: '1%'}}
                    source={require('../images/noise.png')}
                />
                <ValueBox value={data.noise_level}/>
            </View>
            <View style={styles.iconPlusValue}>
                <Image 
                    style={{width: 100, height: 82, marginBottom: '1%'}}
                    source={require('../images/wind.png')}
                />
                <ValueBox value={data.wind}/>
            </View>
        </View>

        <ButtonBlue
            text = 'Go back in time'
            onPress = {() => navigation.navigate('mainPage')}>
        </ButtonBlue>

        <ButtonBlue
            text = 'Export Data'
            onPress = {() => navigation.navigate('chooseBox')}>
        </ButtonBlue>

        <Navbar/>

    </View>
    );
}

    export default main;

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: '#ffffff'
        },
        
        sensorsContainer: {
            flex: 2,
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexDirection: 'row',
            width: 250,
            maxHeight: 150,
        },

        iconPlusValue: {
            flex: 2,
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
        },

    });