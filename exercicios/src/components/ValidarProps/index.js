import React from 'react';
import {Text} from 'react-native';
import PropsType from 'prop-types';

const ValidarProps = props => 
    <Text style={{fontSize: 35}}>
        {props.label}
        {props.ano ? 2000 + props.ano : 'Indefinido'}
    </Text>

ValidarProps.defaultProps = {
    label: "Ano: ",
}

ValidarProps.PropsType = {
    ano: PropsType.number.isRequired
}

export default ValidarProps