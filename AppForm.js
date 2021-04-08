import { CommonActions } from '@react-navigation/routers';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Database from './database.js';
import { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';




export default function AppForm({ route, navigation }) {
    const id = route.params ? route.params.id : undefined;
    const [descricao, setDescricao] = useState('');
    const [quantidade, setQuantidade] = useState('')



    useEffect(() => {
        if (!route.params) return;
        setDescricao(route.params.descricao);
        setQuantidade(route.params.quantidade.toString());
    }, [route])

    function handleDescriptionChange(descricao) {
        setDescricao(descricao);
    }

    function handleQuantityChange(quantidade) {
        setQuantidade(quantidade);
    }


    async function handleButtonPress() {
        const listItem = { descricao, quantidade: parseInt(quantidade) + 'Kg' };
        Database.saveItem(listItem, id)
            .then(response => navigation.navigate("AppList", listItem));
    
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Item para comprar!</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={handleDescriptionChange}
                    placeholder="O que está faltando em casa?"
                    clearButtonMode="always"
                    value={descricao} />
                <TextInput
                    style={styles.input}
                    onChangeText={handleQuantityChange}
                    placeholder="Digite a quantidade em Kg"
                    keyboardType={'numeric'}
                    clearButtonMode="always" 
                    value={quantidade}
                    clearTextOnFocus={true}
                    />
                {/*//     value={quantidade.toString()} />
                // <TouchableOpacity style={styles.button}>
                //     <Text style={styles.buttonText}>Salvar</Text>
                // </TouchableOpacity>*/}
                <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                    <Icon style={styles.buttonText} size={20} name="save" >Salvar</Icon>
                </TouchableOpacity>
                <StatusBar style='light' />
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D93600',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
    },
    inputContainer: {
        flex: 1,
        marginTop: 30,
        width: '90%',
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'stretch',
        backgroundColor: '#fff'
    },
    input: {
        marginTop: 10,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'stretch'
    },
    button: {
        marginTop: 10,
        height: 60,
        backgroundColor: 'blue',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        shadowOpacity: 20,
        shadowColor: '#ccc',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    }
});