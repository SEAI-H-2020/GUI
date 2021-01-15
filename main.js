import 'react-native-gesture-handler';
import React, { useEffect, useState, useCallback } from 'react';
import {View, TouchableOpacity, StyleSheet, Image, Linking} from 'react-native';
import ButtonBlue  from '../components/button';
import LogoSmall from '../components/logoSmall';
import Navbar from '../components/navbar';
import ValueBox from '../components/valueBox';



const main = ({navigation}) => {

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

    const url = "http://smartsensorbox.ddns.net:5000/csv"; 
    //console.log('entrou')

    const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
        }, [url]);
    

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
            <TouchableOpacity onPress={() => navigation.navigate('humPage')}>
                <Image 
                    style={{width: 100, height: 99, marginBottom: '1%'}}
                    source={require('../images/humidity.png')}
                />
                <ValueBox value={data.humidity}/>
            </TouchableOpacity>
            </View>
        </View>
        
        <View style={styles.sensorsContainer}>
            <View style={styles.iconPlusValue}>
                <TouchableOpacity onPress={() => navigation.navigate('noisePage')}> 
                    <Image 
                        style={{width: 90, height: 82, marginBottom: '1%'}}
                        source={require('../images/noise.png')}
                    />
                    <ValueBox value={data.noise_level}/>
                </TouchableOpacity>
            </View>
            <View style={styles.iconPlusValue}>
                <TouchableOpacity onPress={() => navigation.navigate('windPage')}> 
                    <Image 
                        style={{width: 100, height: 82, marginBottom: '1%'}}
                        source={require('../images/wind.png')}
                    />
                    <ValueBox value={data.wind}/>
                </TouchableOpacity>
            </View>
        </View>
        
        <ButtonBlue
                text='Export Data'
                onPress={handlePress}/>

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

