import React from 'react'
import { StyleSheet, Image} from 'react-native'


export default function LogoBig() {
    return(
        <Image source = {require('./logo5.png')} style={styles.logoGrande}/>
    )
  }




  const styles = StyleSheet.create({
  logoGrande:{
      width: 330, 
    height: 200,
    marginBottom: '16%',
    marginTop: '10%'
  }
})