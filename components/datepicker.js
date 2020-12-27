import React, { useState , Component} from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
//import DatePicker from "@react-native-community/datetimepicker";
import DatePicker from "react-native-datepicker";


export default class DemoPicker extends Component {


constructor(props) {
    super(props);
    this.state = {date: ''}
}

selectDate = (date) =>{
    this.setState({date: date});
}
    

render(){
    return(
<View>
    <DatePicker
        style={{width: 200}}
        date={this.state.date}
        format="DD-MM-YYYY"
        minimumDate="10-07-2019"
        onDateChange={this.selectDate}                       
        />
</View>
    )
 }
}