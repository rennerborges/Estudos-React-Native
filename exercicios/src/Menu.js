import React from 'react';
import {createDrawerNavigator} from 'react-navigation';
import './config/index';

import Simples from './components/Simples';
import ParImpar from './components/ParImpar';
import {Inverter,MegaSena} from './components/Multi';
import Contador from './components/Contador';
import Plataformas from './components/Plataforma';
import ValidarProps from './components/ValidarProps';
import Evento from './components/Evento';
import {Avo} from './components/ComunicacaoDireta';
import ColorName from './components/ColorName';
import ListaFlex from './components/ListaFlex'; 


export default createDrawerNavigator({
    ListaFlex: {
        screen: ()=> <ListaFlex/>,
        navigatorOptions: {title: 'Lista de alunos'} 
    },
    ColorName:{
        screen: ()=> <ColorName/>
    },
    "Comunicação Direta": {
        screen: ()=> <Avo nome="Jose" sobrenome="Borges"/>
    },
    Evento: {
        screen: Evento
    },
    "Validar Propriedades": {
        screen: ()=> <ValidarProps ano={8}/>
    },
    Plataformas: {
        screen: Plataformas
    },
    Contador: {
        screen: ()=> <Contador numeroInicial={0}/>
    },
    "Mega Sena": {
        screen: ()=> <MegaSena/>,
        navigatorOptions: "Mega Sena"
    },
    Inverter: {
        screen: ()=> <Inverter texto="Renner"/>
    },
    "Par & ímpar": {
        screen: ()=> <ParImpar numeros={1}/>,
        navigatorOptions: "Par & ímpar"
    },
    Simples: {
        screen: ()=> <Simples texto="Aplicativo do Renner"/>
    }
}, {drawerWidth: 300})
