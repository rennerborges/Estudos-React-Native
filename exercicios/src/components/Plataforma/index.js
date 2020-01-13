import React from 'react';
import {Button, Alert, ToastAndroid, Platform} from 'react-native';

export default ()=>{
    const Notificar = msg =>{
        if(Platform.OS === 'android'){
            ToastAndroid.show(msg, ToastAndroid.LONG);
        }else{
            Alert.alert('Informação', msg);
        }
    }

    return(
    <Button title="Platform" onPress={()=> Notificar("Olá Renner")}/>
    )
}