import React, {useState, setState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
//import Icon from 'react-native-vector-icons/Feather';

global.samplePerid = '1 min';

function PeriodPicker() {

const [value, setValue] = useState(global.samplePeriod);

global.samplePeriod = value;
console.log('o que está a passr:'+global.samplePeriod);

const [items, setItems] = useState([ 
    {label: "1 min", value: "1 min"},
    {label: "5 min", value: "5 min"},
    {label: "10 min", value: "10 min"},
    {label: "15 min", value: "15 min"},
    {label: "30 min", value: "30 min"},
    {label: "1 h", value: "1 h"},
 ]);

let controller;

return(
    <DropDownPicker
    items={items}
    placeholder={'Select the sample period'}
    controller={instance => controller = instance}
    containerStyle={{
            width: 243,
            height: 35,
            marginRight: '4%',
            alignSelf: 'center',
            marginBottom: '2%',
            /*borderWidth: 1.5,
            borderStyle: 'solid',
            borderColor: '#0C688F',
            borderRadius: 5*/
         }}
    dropDownStyle={{
        backgroundColor: '#fafafa',
        marginTop: 2
    }}
    onChangeList={(items, callback) => {
        new Promise((resolve, reject) => resolve(setItems(items)))
            .then(() => callback())
            .catch(() => {});
    }}

    defaultValue={value}
    onChangeItem={item => setValue(item.value)}
/>
);

}

export default PeriodPicker;