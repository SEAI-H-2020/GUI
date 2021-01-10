import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import SettingsBox  from '../components/settingsBox';
import ButtonBlue from '../components/button';
import LogoSmall from '../components/logoSmall';
import Navbar from '../components/navbar';
import UnitPicker from '../components/unitPicker';

//import { GestureHandlerRootView } from 'react-native-gesture-handler';
//const aux = true;

export default function userSettings ({navigation}) {

    const [editableUser, setEditableUser] = useState(false);
    const [editableEmail, setEditableEmail] = useState(false);

    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState('');
    const [response, setResponse] = useState('');

    let [username, setUsername] = useState('');
    let [email, setEmail] = useState('');

    let [sync, setSync] = useState();
    let [sample, setSample] = useState();
    let [shutdown, setShutdown] = useState();
    let [firmware, setFirmware] = useState();

    
    useEffect(() => {

        fetch('http://smartsensorbox.ddns.net:5000/usersettings/1')
        .then((response) => response.json())
        .then((json) => setUser(json[0]))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));

    }, [global.editable]);

    const _editUser=() => {
        setEditableUser(true);
    }

    const _editEmail=() => {
        setEditableEmail(true);
    }

    const saveChanges=() => {

        if (username == null) {
            username = user.username;
        }
        if (email == '') {
            console.log('esta merda entra aqui');
            email = user.email;
            console.log('Qual é o valor do email? '+email)
        }

        sync = user.sync_period;
        sample = user.sample_time;
        shutdown = user.shutdown_on_wakeup;
        firmware = user.latest_firmware;

        const data = {
            method: 'PUT',
            headers: { 
                'accept': 'application/json',
                'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    "sync_period": sync,
                    "sample_time": sample,
                    "shutdown_on_wakeup": shutdown,
                    "username": ''+username+'',
                    "latest_firmware": firmware,
                    "email": ''+email+''
                  })
                
        };

        console.log('entrou no savechages')
        console.log('o que está dentro do header: '+data.headers)
        console.log('o que está dentro do data: '+data.body)
        fetch('http://smartsensorbox.ddns.net:5000/usersettings/1', data)
        .then((response) => response.text())
        .then((json) => setResponse(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));

        console.log('atualizou?? '+response);

        setEditableUser(false);
        setEditableEmail(false);
        console.log('editable user: '+editableUser);
        console.log('editable email: '+editableEmail);
   
    }
    

    return(
        <View style={styles.container}>
            <LogoSmall/>
            <ScrollView>
           
            <Text style={styles.text}> Name: </Text>
            <View style={styles.setting}>
                <SettingsBox
                    text={username}
                    valueFromApi={user.username}
                    onChangeText={(val)=>setUsername(val)}
                    editable={editableUser}/>
                <TouchableOpacity onPress={_editUser}>
                    <Image
                        source={require('../images/edit.png')}
                        style={styles.icon}/>
                </TouchableOpacity>
            </View>

            <Text style={styles.text}> Email Address: </Text>
            <View style={styles.setting}>
                <SettingsBox
                    text={email}
                    valueFromApi={user.email}
                    onChangeText={(val)=>setEmail(val)}
                    editable={editableEmail}/>
                <TouchableOpacity onPress={_editEmail}>
                    <Image
                        source={require('../images/edit.png')}
                        style={styles.icon}/>
                </TouchableOpacity>
            </View>

            <Text style={styles.text}> Unit System: </Text>
            <View style={styles.setting}>
                <UnitPicker/>
                <TouchableOpacity onPress={() => navigation.navigate('UserSettings')}>
                    <Image
                        source={require('../images/edit.png')}
                        style={styles.icon}/>
                </TouchableOpacity>
            </View>

            <Text style={styles.text}> Boxes: </Text>
            <View style={styles.setting}>
                <SettingsBox
                    valueFromAppi='Smart Sensor Box 1'/>
                <TouchableOpacity>
                    <Image
                        source={require('../images/delete.png')}
                        style={styles.icon}/>
                </TouchableOpacity>
            </View>

            <ButtonBlue 
                text='Save'
                onPress={saveChanges}>
           </ButtonBlue>

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

//"{\n \"sync_period\": 10, \n \"sample_time\": 5, \n \"shutdown_on_wakeup\": true, \n \"username\":"+username+", \n \"latest_firmware\": 0.2, \n \"email\":"+user.email+" \"}")