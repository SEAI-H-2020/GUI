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
import moment from 'moment';



//moment(variavel).format("YYYY-MM-DD hh:mm:ss");

const screenWidth = Dimensions.get("window").width;

export default function tempPage () {
    const [date, setDate] = useState(new Date(1598051730000));
    const [dateFinal, setDateFinal] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [modeFinal, setModeFinal] = useState('date');
    const [show, setShow] = useState(false);
    const [showFinal, setShowFinal] = useState(false);
    const [dataInicial, setDataInicial] = useState();//data inicial para usar no fetch
    const [dataFinal, setDataFinal] = useState();//data final para usar no fetch
    const [isLoading, setLoading] = useState(true);
    const [min, setMin] = useState([]);
    const [max, setMax] = useState([]);
    const [avgDay, setAvgDay] = useState([]);
    const [avgNight, setAvgNight] = useState([]); 
    const [values, setValues] = useState([]);
    const [dataInicialPrint, setDataInicialPrint] = useState();//data inicial para fazer print
    const [dataFinalPrint, setDataFinalPrint] = useState();//data final para para fazer print

   
    
    

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
        labels: global.datas,
        datasets: [
          { 
            data: global.valores,
            color: (opacity = 1) => `rgba(8, 70, 141, ${opacity})`, // optional
            strokeWidth: 3 // optional
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
        setDataInicial(moment(selectedDate).format("YYYY-MM-DD 00:00:00"));
        setDataInicialPrint(moment(selectedDate).format("YYYY-MM-DD"));
        //console.log("data inicial" ,dataInicial);
    
      };
      const onChangeFinal = (event, selectedDate) => {
        const currentDate = selectedDate || dateFinal;
        setShowFinal(Platform.OS === 'ios');
        setDateFinal(currentDate);
        setDataFinal(moment(selectedDate).format("YYYY-MM-DD 23:59:00"));
        setDataFinalPrint(moment(selectedDate).format("YYYY-MM-DD"));
        //console.log("data final" ,dataFinal);

      
      };
      const showDatepicker = () => {
        showMode('date');
      };
    
      const showDatepickerFinal = () => {
        showModeFinal('date');
      };

 
 

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
       
          
       

  },[]);

  const _databaseDatas=() => {

    if (dataInicial && dataFinal ){
      
      
      if(global.unitSystem == 'Metric') {
        fetch('http://smartsensorbox.ddns.net:5000/measurements/average/daynight/'+dataInicial+'/'+dataFinal)
        .then((response) => response.json())
        .then((json) => setAvgDay(json.measurement[0]))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));


        fetch('http://smartsensorbox.ddns.net:5000/measurements/average/daynight/'+dataInicial+'/'+dataFinal)
        .then((response) => response.json())
        .then((json) => setAvgNight(json.measurement[1]))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));

        
       
       
        
        fetch('http://smartsensorbox.ddns.net:5000/measurements/temperature/'+dataInicial+'/'+dataFinal)
        .then((response) => response.json())
        .then((json) => setValues(json.measurement))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));

       
        console.log("tamanho do vetor",values.length); /**tamanho do vetor values */
        
        if(avgDay.temperature_day==null || avgNight.temperature_night == null ){
          alert("Não há valores válidos para as datas indicadas");
        }

        for (let i = 0; i < values.length; i++) {
          let aux =Math.ceil(values.length/50); /**O vetor global.datas[i] fica com 50 posicoes*/
          aux=aux*i;
          if (aux>=values.length) { /** '>=' Porque na posição values.length nao existe nada */
            break;
          }
          console.log(aux)
          global.valores[i]=values[aux].temperature;
         //console.log(i)
         //console.log(values[aux].tstamp)
          
        }
     
        for (let i = 0; i < values.length; i++) {
          let aux =Math.ceil(values.length/5); /**O vetor global.datas[i] fica com 5 posicoes*/
          aux=aux*i;
          
          if (aux>=values.length) {
            
           /* global.datas[i]= moment(values[values.length-1].tstamp).format("ll");*/
            break;
          }
          console.log("aux",aux);
          global.datas[i]= moment(values[aux].tstamp).format("ll");
      
          
        }
      
       
      }
        
      
    
      else{ /**Se NÃO for global.unitSystem == 'Metric'  */
      
        fetch('http://smartsensorbox.ddns.net:5000/measurements/average/daynight/'+dataInicial+'/'+dataFinal)
        .then((response) => response.json())
        .then((json) => setAvgDay(json.measurement[0]))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));


        fetch('http://smartsensorbox.ddns.net:5000/measurements/average/daynight/'+dataInicial+'/'+dataFinal)
        .then((response) => response.json())
        .then((json) => setAvgNight(json.measurement[1]))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));

        
       
       
        
        fetch('http://smartsensorbox.ddns.net:5000/measurements/imperial/temperature/'+dataInicial+'/'+dataFinal)
        .then((response) => response.json())
        .then((json) => setValues(json.measurement))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));

       
        console.log("tamanho do vetor",values.length); /**tamanho do vetor values */
        
        if(avgDay.temperature_day==null || avgNight.temperature_night == null ){ 
          alert("Não há valores válidos para as datas indicadas"); /**Pode-se tirar, o stress disto é que na 1a vez que se carrega aparece sempre */
        }

        for (let i = 0; i < values.length; i++) {
          let aux =Math.ceil(values.length/50); /**O vetor global.datas[i] fica com 50 posicoes*/
          aux=aux*i;
          if (aux>=values.length) { /** '>=' Porque na posição values.length nao existe nada */
            break;
          }
          console.log(aux)
          global.valores[i]=values[aux].temperature;
         //console.log(i)
         //console.log(values[aux].tstamp)
          
        }
     
        for (let i = 0; i < values.length; i++) {
          let aux =Math.ceil(values.length/5); /**O vetor global.datas[i] fica com 5 posicoes*/
          aux=aux*i;
          
          if (aux>=values.length) {
            
           /* global.datas[i]= moment(values[values.length-1].tstamp).format("ll");*/
            break;
          }
          console.log("aux",aux);
          global.datas[i]= moment(values[aux].tstamp).format("ll");
          
          
        }
      
     
      }
    }
    
  }
  
    return(
      
      <View style={styles.container}>

        <LogoSmall/>
      <ScrollView>
          
          
          
          <View style={styles.container_values}>
              <View style={styles.iconPlusValue}>
                  <Text style={styles.title}> Maximum: </Text>
                  <ValueBox value={max.temperature}/>
              </View>
              <View style={styles.iconPlusValue}>
                  <Text style={styles.title}> Minimum: </Text>
                  <ValueBox value={min.temperature}/>
              </View>
          </View>


          <LineChart 
            
            data={data}  
            width={screenWidth}  height={200}  
          chartConfig={chartConfig}
          />

          <View style={styles.container_values}>
              <View style={styles.iconPlusValue}>
                  <Text style={styles.title} > Day average: </Text>
                  <ValueBox value={avgDay.temperature_day}/>
              </View>
             <View style={styles.iconPlusValue}>
                  <Text style={styles.title}>Night average: </Text>
                  <ValueBox value={avgNight.temperature_night}/>
                  </View>
          </View>
         
          
          <View>
            <View style={styles.container_dates}>
              <View style={styles.column}>
                <ButtonBlue text='Initial Date' onPress={showDatepicker}/>
                <Text> {dataInicialPrint} </Text>
              </View>
              <View style={styles.column}>
                <ButtonBlue text='Final Date'onPress={showDatepickerFinal}/>
                <Text> {dataFinalPrint} </Text>
              </View>
            </View>

          

            <View style={styles.submit}>
              <ButtonBlue text='Submit'onPress={_databaseDatas}/>
            </View>
        
            {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date} /* a data está aqui guadada */
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
              )}
            {showFinal && (
            <DateTimePicker
              testID="dateTimePicker"
              value={dateFinal} /* a data está aqui guadada o*/
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
        marginBottom: 20,
           
    },
    column: {
      flexDirection: 'column',
      alignItems: 'center',
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
        maxWidth: '100%' ,
            
    },    
    submit: {
    
      alignItems: 'center',
      justifyContent: 'center',
      
      maxHeight: 100,
      maxWidth: '100%'      
  },  

});



