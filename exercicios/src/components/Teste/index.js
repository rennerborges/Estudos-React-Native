import React, { Component } from 'react';
import { View, Text, ToastAndroid, TouchableHighlight, Platform, TextInput, DatePickerAndroid, Alert, Button } from 'react-native';

let style = {
    font30: {
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    View: {
        display: 'flex',
        minHeight: '100%',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Input: {
        width: '50%',
        height: 40,
        fontSize: 15,
        borderColor: 'gray',
        borderWidth: 1
    },
    Bottom: {
        marginTop: 15,
    }
}

export default class Teste extends Component {
    constructor(props) {
        super(props)
        this.state = {
            texto: '',
            color: '#cecece',
            nomes: {
                x: 'red'
            }
        }

        this.Toast = this.Toast.bind(this)
        this.Nome = this.Nome.bind(this)
    }

    mudarTexto(texto) {
        this.setState({ texto })
    }
    Toast() {

        if (Platform.OS === 'android') {
            ToastAndroid.show(this.state.texto, ToastAndroid.LONG)
            this.setState({ red: true })
        } else {
            Alert.alert('Seu texto', this.state.texto)
        }

    }

    Nome() {
        let valorNome = {
            A: 100800,
            B: 24050,
            C: 45086,
            D: 87245,
            E: 17306,
            F: 86533,
            G: 98576,
            H: 45770,
            I: 33240,
            J: 463530,
            K: 973990,
            L: 860850,
            M: 238670,
            N: 369400,
            O: 567002,
            P: 983209,
            Q: 694570,
            R: 987559,
            S: 866620,
            T: 100890,
            U: 940980,
            V: 109476,
            W: 466420,
            X: 926520,
            Y: 297543,
            Z: 120283,
        }
        let nome = this.state.texto.toUpperCase().replace(/ /gi, '').split('');
        let corNome = nome.reduce((acm, item) => {
            return acm + valorNome[item]
        }, 0)
        corNome = corNome.toString(16);
        if (corNome.length < 6) {
            for (let i = 0; corNome.length < 6; i++) {
                corNome = '0' + corNome;
            }
        }
        this.setState({ color: '#' + corNome })
    }


    render() {
        return (
            <View style={{ ...style.View, backgroundColor: this.state.color }}>
                <Text style={style.font30}>Bem-Vindo Renner</Text>
                <Text> {this.state.texto != '' ? this.state.texto : 'Escreva seu texto'}</Text>
                <TextInput style={style.Input} placeholder="Informe o texto desejado" onChangeText={(value) => this.mudarTexto(value)} value={this.state.texto}></TextInput>
                {(this.state.texto.length !== 0) &&
                    <View>
                        <TouchableHighlight style={{ ...style.Bottom, width: 230 }}>
                            <Button title='Clique Aqui' onPress={this.Toast}></Button>
                        </TouchableHighlight>

                        <TouchableHighlight style={style.Bottom}>
                            <Button title="Olhe a cor do seu nome!!!!" onPress={this.Nome}></Button>
                        </TouchableHighlight>

                    </View>
                }

            </View>
        )
    }
}