import 'react-native-gesture-handler';

import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import ButtonBlue  from '../components/button';
import LogoSmall from '../components/logoSmall';
import Navbar from '../components/navbar';
import ValueBox from '../components/valueBox';
import DateTimePicker from "@react-native-community/datetimepicker";
import {LineChart } from "react-native-chart-kit";
import 'react-native-svg';
import { ScrollView } from 'react-native-gesture-handler';


//moment(variavel, "YYYY-MM-DD hh:mm:ss");

const screenWidth = Dimensions.get("window").width;

export default function tempPage () {
    const [date, setDate] = useState(new Date(1598051730000));
    const [dateFinal, setDateFinal] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [modeFinal, setModeFinal] = useState('date');
    const [show, setShow] = useState(false);
    const [showFinal, setShowFinal] = useState(false);
    
    const chartConfig = {
        backgroundGradientFrom: "white",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "white",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
      };
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // optional
            strokeWidth: 2 // optional
          }
        ],
        legend: ["Temperature"] // optional
      };

      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
      const showModeFinal = (currentMode) => {
        setShowFinal(true);
        setModeFinal(currentMode);
      };

      const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    
      };
      const onChangeFinal = (event, selectedDate) => {
        const currentDate = selectedDate || dateFinal;
        setShowFinal(Platform.OS === 'ios');
        setDateFinal(currentDate);
      
      };
      const showDatepicker = () => {
        showMode('date');
      };
    
      const showDatepickerFinal = () => {
        showModeFinal('date');
      };

    const [isLoading, setLoading] = useState(true);
    const [min, setMin] = useState([]);
    const [max, setMax] = useState([]);

    useEffect(() => {
     
      if(global.unitSystem == 'Metric') {
        fetch('http://smartsensorbox.ddns.net:5000/measurements/min')
        .then((response) => response.json())
        .then((json) => setMin(json.measurement[0]))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
        
        fetch('http://smartsensorbox.ddns.net:5000/measurements/max')
        .then((response) => response.json())
        .then((json) => setMax(json.measurement[0]))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));

        }

      else { 
        fetch('http://smartsensorbox.ddns.net:5000/measurements/imperial/min')
        .then((response) => response.json())
        .then((json) => setMin(json.measurement[0]))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
        
        fetch('http://smartsensorbox.ddns.net:5000/measurements/imperial/max')
        .then((response) => response.json())
        .then((json) => setMax(json.measurement[0]))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
          
      } 

  });
     
    return(
      
      <View style={styles.container}>
        <LogoSmall/>
        <ScrollView>
          
          {/*<View style={styles.container_values}>
              <View style={styles.iconPlusValue}>
                  <Text style={styles.title} > Day average: </Text>
                  <ValueBox />
              </View>
              <View style={styles.iconPlusValue}>
                  <Text style={styles.title}>Night average: </Text>
                  <ValueBox />
              </View>
          </View>*/}
          
          <View style={styles.container_values}>
              <View style={styles.iconPlusValue}>
                  <Text style={styles.title}> Maximum: </Text>
                  <ValueBox value={min.temperature}/>
              </View>
              <View style={styles.iconPlusValue}>
                  <Text style={styles.title}> Minimum: </Text>
                  <ValueBox value={max.temperature}/>
              </View>
          </View>

          <LineChart 
            data={data}  
            width={screenWidth}  height={200}  
            chartConfig={chartConfig}/>
          
          <View>
            <View style={styles.container_dates}>
            
              <ButtonBlue text='Data Inicial'onPress={showDatepicker}/>
              <ButtonBlue text='Data Final'onPress={showDatepickerFinal}/>
                
            </View>
        
            {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date} /* a data está aqui guadada mas nao percebo o formato*/
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
              )}
            {showFinal && (
            <DateTimePicker
              testID="dateTimePicker"
              value={dateFinal} /* a data está aqui guadada mas nao percebo o formato*/
              mode={modeFinal}
              is24Hour={true}
              display="default"
              onChange={onChangeFinal}
            />
            )}
          </View>
        </ScrollView>           
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

    container_values: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row',
        maxHeight: 150,
        marginLeft:'4%',
        marginRight: '4%',
           
    },
    iconPlusValue: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
       
    },
    title:{
        fontWeight:"normal",
        fontSize:15,
        color: 'black',
        fontFamily: "Montserrat"     
      },
      container_dates: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        maxHeight: 100,
        maxWidth: '100%'      
    },    
});



