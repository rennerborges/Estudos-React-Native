import React from 'react';
import { Text } from 'react-native';
import styles from '../../estilo/Padrao';

export default props => {
    return <Text style={styles.ex}>{props.texto}</Text>
}
