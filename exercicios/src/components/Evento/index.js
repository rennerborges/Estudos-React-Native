import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../../estilo/Padrao';

export default class Evento extends Component {
    state = {
        texto: ''
    }

    mudarTexto = texto => {
        this.setState({ texto })
    }

    render() {
        return (
            <View>
                <Text style={styles.fonte40}>{this.state.texto}</Text>
                <TextInput style={styles.input} onChangeText={this.mudarTexto} />
            </View>
        )
    }
}