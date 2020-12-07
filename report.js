import 'react-native-gesture-handler';
import * as React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import ButtonBlue  from '../components/button';
import LogoSmall from '../components/logoSmall';
import Navbar from '../components/navbar';
import FormInput from '../components/inputText';

export default function reportProblems ({navigation}) {
    return(
        <View style={styles.container}>
            <LogoSmall/>

            <Text style={styles.normalText}> Type problem: </Text>
            <FormInput/>

            <Text style={styles.normalText}> Tell us more: </Text>
            <FormInput/>

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

    normalText: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: '600',
        textAlign: 'left',
        fontSize: 14,
        borderColor: '#375764',
    }
})