import { CommonActions } from '@react-navigation/routers';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Database from './database.js';
import { useState, useEffect } from 'react'



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
        const listItem = { descricao, quantidade: parseInt(quantidade) };
        Database.saveItem(listItem, id)
            .then(response => navigation.navigate("AppList", listItem));
    }

    return (
        <View style={styles.container}>

            <TextInput
                style={styles.input}
                onChangeText={handleDescriptionChange}
                placeholder="O que está faltando em casa?"
                clearButtonMode="always"
                value={descricao} />
            <TextInput
                style={styles.input}
                onChangeText={handleQuantityChange}
                placeholder="Digite a quantidade"
                keyboardType={'numeric'}
                clearButtonMode="always"
                value={quantidade.toString()} />

            <TouchableOpacity style={styles.button}
                onPress={handleButtonPress}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
            <StatusBar style='light' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 12,
        backgroundColor: '#D93600',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        color: '#fff'
    }
});