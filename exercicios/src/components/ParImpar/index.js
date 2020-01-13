import React from 'react';
import {View,Text} from 'react-native';
import styles from '../../estilo/Padrao';

export default props => 
    <View>
        {
            props.numero % 2 == 0
            ? <Text style={styles.ex}>Par</Text>
            : <Text style={styles.ex}>Impar</Text>
        }
    </View>