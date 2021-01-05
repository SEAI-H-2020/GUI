import React, {useState, setState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';


function UnitPicker() {

    const [value, setValue] = useState(global.unitSystem);

    global.unitSystem = value;
    //console.log('o que está a passr:'+global.unitSystem);

    const [items, setItems] = useState([ {label: "Metric", value: "Metric"},{label: "Imperial", value: "Imperial"} ]);

    let controller;

    return(
        <DropDownPicker
        items={items}
        controller={instance => controller = instance}
        containerStyle={{
                width: 200,
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
            backgroundColor: '#fafafa'
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

export default UnitPicker;



