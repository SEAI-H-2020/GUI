import 'react-native-gesture-handler';
import * as React from 'react';
import {View, ScrollView, TouchableOpacity, StyleSheet, Image} from 'react-native';
import ButtonBlue  from '../components/button';
import LogoSmall from '../components/logoSmall';
import Navbar from '../components/navbar';
import ValueBox from '../components/valueBox';


function main ({navigation}) {
    return (
        //<ScrollView>
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
                        <ValueBox />
                    </View>
                    <View style={styles.iconPlusValue}>
                        <Image 
                            style={{width: 100, height: 99, marginBottom: '1%'}}
                            source={require('../images/humidity.png')}
                        />
                        <ValueBox />
                    </View>
                </View>
                
                <View style={styles.sensorsContainer}>
                    <View style={styles.iconPlusValue}>
                        <Image 
                            style={{width: 90, height: 82, marginBottom: '1%'}}
                            source={require('../images/noise.png')}
                        />
                        <ValueBox />
                    </View>
                    <View style={styles.iconPlusValue}>
                        <Image 
                            style={{width: 100, height: 82, marginBottom: '1%'}}
                            source={require('../images/wind.png')}
                        />
                        <ValueBox />
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
       // </ScrollView>
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