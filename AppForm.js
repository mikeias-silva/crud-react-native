import { CommonActions } from '@react-navigation/routers';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Database from './Database';

export default function AppForm({ navigation }) {

    const [descricao, setDescricao] = useState('');
    const [quantidade, setQuantidade] = useState('');

    function handleDescriptionChange(descricao) {
        setDescricao(descricao);
    }

    function handleQuantityChange(quantidade) {
        setQuantidade(quantidade);
    }

    async function handleButtonPress() {
        const listItem = { id: new Date().getTime(), descricao, quantidade };
        let savedItems = [];
        const response = await AsyncStorage.getItem('items');
        console.log('items:', response)
        if (response) {
            savedItems = JSON.parse(response);
        }
        savedItems.push(listItem);
        await AsyncStorage.setItem('items', JSON.stringify(savedItems));

        console.log({ id: new Date().getTime(), descricao, quantidade });

        navigation.navigate('AppList', { screen: 'Lista' });
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                onChangeText={handleDescriptionChange}
                placeholder="O que está faltando em casa?"
                clearButtonMode="always" />
            <TextInput style={styles.input}
                onChangeText={handleQuantityChange}
                placeholder="Digite a quantidade"
                keyboardType={'numeric'}
                clearButtonMode="always"
            />

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