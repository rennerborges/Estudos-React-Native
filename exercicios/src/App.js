import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Simples from './components/Simples';
import ParImpar from './components/ParImpar';
import {Inverter,MegaSena} from './components/Multi';
 
export default class App extends Component {
  render(){
    return (
      <View style={styles.container}> 
        <Simples texto="Bem-vindo Renner"/>
        <ParImpar numero={32}></ParImpar>
        <Inverter texto="oditrevni uotsE"></Inverter>
        <MegaSena></MegaSena>
      </View>
    )
  }
}

const styles = {
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  f20:{
    fontSize: 20 
  }  

}