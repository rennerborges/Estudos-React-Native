import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
}

export default class App extends Component {

  state = { ...initialState }

  addDigit = numero => {
    if(numero === '.' && this.state.displayValue.includes('.')){
      return
    }

    let veficar = this.state.displayValue === '0' || this.state.clearDisplay;
    let numeroDigitado = veficar ? '' : this.state.displayValue;
    let displayValue =  numeroDigitado + numero;
    
    this.setState({displayValue})

  }

  clearMemory = () => {
    this.setState({...initialState})
  }

  setOperation = operation => {

  }
  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          <Button label='AC' triple onClick={this.clearMemory} />
          <Button label='/' operation onClick={() => this.setOperation('/')} />
          <Button label='7' onClick={this.addDigit} />
          <Button label='8' onClick={this.addDigit} />
          <Button label='9' onClick={this.addDigit} />
          <Button label='*' operation onClick={this.setOperation} />
          <Button label='4' onClick={this.addDigit} />
          <Button label='5' onClick={this.addDigit} />
          <Button label='6' onClick={this.addDigit} />
          <Button label='-' operation onClick={this.setOperation} />
          <Button label='1' onClick={this.addDigit} />
          <Button label='2' onClick={this.addDigit} />
          <Button label='3' onClick={this.addDigit} />
          <Button label='+' operation onClick={this.setOperation} />
          <Button label='0' double onClick={this.addDigit} />
          <Button label='.' onClick={this.addDigit} />
          <Button label='=' operation onClick={this.setOperation} />
        </View>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})
