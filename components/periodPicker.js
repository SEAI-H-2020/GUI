import React, {useState, setState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
//import Icon from 'react-native-vector-icons/Feather';

//global.samplePeriod = '1 min';

function PeriodPicker({canEdit, samplePeriod, onChangeItem}) {
    console.log('entrou no picker');
    const [period, setValue] = useState();


    const [items, setItems] = useState([ 
        {label: "1 min", value: "1 min"},
        {label: "5 min", value: "5 min"},
        {label: "10 min", value: "10 min"},
        {label: "15 min", value: "15 min"},
        {label: "30 min", value: "30 min"},
        {label: "1 h", value: "1 h"},
    ]);
    
    console.log('no period picker: '+canEdit);
    let controller;

    return(
        <DropDownPicker
        disabled={canEdit} 
        items={items}
        placeholder={samplePeriod+' min'}
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

        //defaultValue={period}
        onChangeItem={onChangeItem}
    />
    );

}

export default PeriodPicker;