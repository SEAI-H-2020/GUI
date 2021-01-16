import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet,TouchableOpacity, Image, ScrollView} from 'react-native';
import LogoSmall from '../components/logoSmall';
import Navbar from '../components/navbar';
import SettingsBox from '../components/settingsBox';
import PeriodPicker from '../components/periodPicker';
import ButtonBlue from '../components/button';

export default function boxSettings ({navigation}) {

    const [editablePeriod, setEditablePeriod] = useState(true);

    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState('');
    const [response, setResponse] = useState('');

    let [sample, setSample] = useState();

    let [username, setUsername] = useState('');
    let [email, setEmail] = useState('');
    let [sync, setSync] = useState();
    let [shutdown, setShutdown] = useState();
    let [firmware, setFirmware] = useState();

    
    useEffect(() => {
        fetch('http://smartsensorbox.ddns.net:5000/usersettings/1')
        .then((response) => response.json())
        .then((json) => setUser(json[0]))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));

    }, []);

    const _editPeriod=() => {
        setEditablePeriod(false);
    }

    const saveChanges=() => {

        username = user.username;
        email = user.email;
        sync = user.sync_period;
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

        /*console.log('entrou no savechages')
        console.log('o que está dentro do header: '+data.headers)
        console.log('o que está dentro do data: '+data.body)*/
        fetch('http://smartsensorbox.ddns.net:5000/usersettings/1', data)
        .then((response) => response.text())
        .then((json) => setResponse(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));

        console.log('atualizou?? '+response);

        setEditablePeriod(true);
   
    }

    return(
 
        <View style={styles.container}>
            <LogoSmall/>
            
            <Text style={styles.text}> Box name: </Text>
            <View style={styles.setting}>
                <SettingsBox valueFromApi={'sensorBox 1'}/>
                <TouchableOpacity>
                    <Image
                        source={require('../images/edit.png')}
                        style={styles.icon}/>
                </TouchableOpacity>
            </View>

            <Text style={styles.text}> Instalation date: </Text>
            <View style={styles.setting}>
                <SettingsBox valueFromApi={'10-01-2021'}/>
                <TouchableOpacity>
                    <Image
                        source={require('../images/edit.png')}
                        style={styles.icon}/>
                </TouchableOpacity>
            </View>


            <Text style={styles.text}> Sample period: </Text>
            <View style={styles.setting}>
                <PeriodPicker
                    canEdit={editablePeriod}
                    samplePeriod={user.sample_time}
                    onChangeItem={(item)=>setSample(item.value)}/>
                <TouchableOpacity onPress={_editPeriod}>
                    <Image
                        source={require('../images/edit.png')}
                        style={styles.icon}/>
                </TouchableOpacity>
            </View>

           <ButtonBlue 
                text='Save'
                onPress={saveChanges}>
           </ButtonBlue>

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