import React from 'react';
import { StyleSheet, Image} from 'react-native';

export default function LogoSmall() {
    return(
        <Image 
            source = {require('../images/logo_2.png')} 
            style={styles2.logoSmall}/>
    );
  }

  const styles2 = StyleSheet.create({
  logoSmall:{
    width: 230, 
    height: 100,
    marginBottom: '4%',
    marginTop: '4%',
    /*borderColor: '#375764',
    borderWidth: 3*/
  }
});