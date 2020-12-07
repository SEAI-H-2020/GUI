import React from 'react';
import { StyleSheet, Image} from 'react-native';

export default function LogoBig() {
    return(
        <Image 
            source = {require('../images/logo.png')} 
            style={styles.logoGrande}/>
    );
  }

  const styles = StyleSheet.create({
  logoGrande:{
    width: 248, 
    height: 107,
    marginBottom: '6%',
    marginTop: '10%'
  }
});
