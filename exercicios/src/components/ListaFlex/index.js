import React from 'react';
import { ScrollView, View, FlatList, Text } from 'react-native';

const aluno = [
    { id: 1, nome: 'Renner', nota: 7.9 },
    { id: 2, nome: 'Wanderson', nota: 9 },
    { id: 3, nome: 'Thander', nota: 7.5 },
    { id: 4, nome: 'Halyson', nota: 8 },
    { id: 5, nome: 'Luiz Alexandre', nota: 4 },
    { id: 6, nome: 'Mateus', nota: 5 },
    { id: 7, nome: 'Marcelo', nota: 7.3 },
    { id: 8, nome: 'Marco', nota: 7.2 },

    { id: 11, nome: 'Renner', nota: 7.9 },
    { id: 12, nome: 'Wanderson', nota: 9 },
    { id: 13, nome: 'Thander', nota: 7.5 },
    { id: 14, nome: 'Halyson', nota: 8 },
    { id: 15, nome: 'Luiz Alexandre', nota: 4 },
    { id: 16, nome: 'Mateus', nota: 5 },
    { id: 17, nome: 'Marcelo', nota: 7.3 },
    { id: 18, nome: 'Marco', nota: 7.2 },

    { id: 21, nome: 'Renner', nota: 7.9 },
    { id: 22, nome: 'Wanderson', nota: 9 },
    { id: 23, nome: 'Thander', nota: 7.5 },
    { id: 24, nome: 'Halyson', nota: 8 },
    { id: 25, nome: 'Luiz Alexandre', nota: 4 },
    { id: 26, nome: 'Mateus', nota: 5 },
    { id: 27, nome: 'Marcelo', nota: 7.3 },
    { id: 28, nome: 'Marco', nota: 7.2 },
];

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',
    display: 'flex',
    justifyContent: 'center',
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text>Senha: {props.nota}</Text>
    </View>

export default props =>{
    const renderItems = ({item}) => <Aluno {...item}/>

    return (
        <ScrollView>
            <FlatList data={aluno} renderItem={renderItems} keyExtractor={(_,index)=> index.toString()}  />
        </ScrollView>
    );
}