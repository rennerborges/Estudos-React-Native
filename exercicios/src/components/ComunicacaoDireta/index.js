import React, { cloneElement } from 'react';
import { View, Text } from 'react-native';

const styles = {

    filho: {
        fontSize: 20
    },
    pai: {
        fontSize: 25,
        marginTop: 15,
        marginBottom: 20
    },
    avo: {
        fontSize: 30
    },
}

export const Filho = props =>
    <View>
        <Text style={styles.filho}>Filho: {props.nome} {props.sobrenome}</Text>
    </View>

export const Pai = props =>
    <View>
        <Text style={styles.pai}>Pai: {props.nome} {props.sobrenome}</Text>
        {React.Children.map(props.children,
            item => React.cloneElement(item, {...props, ...item.props}))}
    </View>

Pai.defaultProps = {
    nome: "Mr.Catra"
}
export const Avo = props =>
    <View>
        <Text style={styles.avo} >Avo: {props.nome} {props.sobrenome}</Text>
        <Pai {...props} nome="Washington">
            <Filho nome="Ana Clara" />
            <Filho nome="Renner" />
        </Pai>
        <Pai nome="Luiz" sobrenome="Freitas">
            <Filho nome="Thander" />
            <Filho nome="Halyson" />
            <Filho nome="Mateus" />
        </Pai>
    </View>