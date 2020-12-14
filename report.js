import 'react-native-gesture-handler';
import * as React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import ButtonBlue  from '../components/button';
import LogoSmall from '../components/logoSmall';
import Navbar from '../components/navbar';
import FormInputReport from '../components/inputText_2';
import FormInput from '../components/inputText';

export default function reportProblems ({navigation}) {
    return(
        <View style={styles.container}>
            <LogoSmall/>
            <View style={styles.textContainer}>
                <Text style={styles.normalText}> Type problem: </Text>
                <FormInput/>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.normalText}> Tell us more: </Text>
                <FormInputReport/>
            </View>

            <ButtonBlue 
                text='Submit'
                onPress ={() => navigation.navigate('ReportProblems')}>
            </ButtonBlue>

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

    textContainer: {
        width: '90%',
        alignSelf: 'flex-start',
        margin: '4%',
        marginLeft: '10%',
        /*borderColor: '#375764',
        borderStyle: 'solid',
        borderWidth: 3,*/
    },

    normalText: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 15,
    }
})