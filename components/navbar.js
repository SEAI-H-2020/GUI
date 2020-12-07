import 'react-native-gesture-handler';
import * as React from 'react';
import {View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Navbar() {
  const navigation = useNavigation();
  return(
    <View style={styles.navbarContainer}>

      <View style={styles.allIcons}>

        <TouchableOpacity onPress={() => navigation.navigate('ReportProblems')}>
          <Image
            source={require('../images/problem_icon.png')}
            style={styles.icon}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('BoxSettings')}>
          <Image
            source={require('../images/boxsettings_icon.png')}
            style={styles.icon}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('UserSettings')}>
          <Image
            source={require('../images/usersettings_icon.png')}
            style={styles.icon}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('mainPage')}>
          <Image
            source={require('../images/main_icon.png')}
            style={styles.icon}/>
        </TouchableOpacity>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  navbarContainer: {
    backgroundColor: '#E0E0E0',
    marginTop: '5%',
    height: 55,
    width: '100%',
    position: 'absolute',
    bottom:0
  },

  allIcons: {
    flex: 4,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    
  },

  icon: {
    width: 41.45,
    height: 41
  }
})