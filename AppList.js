import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import AppItem from './AppItem';
import { useState } from 'react';

export default function AppList() {



    const [items, setItems] = useState([
        { id: 1, quantidade: 5, descricao: "arroz" },
        { id: 2, quantidade: 1, descricao: "feijão" },
        { id: 3, quantidade: 0.5, descricao: "lentilha" },
        { id: 4, quantidade: 1, descricao: "massa" },
        { id: 5, quantidade: 1, descricao: "katchup" },
        { id: 6, quantidade: 1, descricao: "queijo-ralado" },
        { id: 7, quantidade: 5, descricao: "arroz" },
        { id: 8, quantidade: 1, descricao: "feijão" },
        { id: 9, quantidade: 0.5, descricao: "lentilha" },
        { id: 10, quantidade: 1, descricao: "massa" },
        { id: 11, quantidade: 1, descricao: "katchup" },
        { id: 12, quantidade: 1, descricao: "queijo-ralado" }
    ]);

    return (



        <View style={styles.container}>
            <StatusBar style="light" />
            <Text style={styles.title}>Lista de Compras</Text>
            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={styles.itemsContainer}>
                {items.map(item => {
                    return <AppItem key={item.id} id={item.id} item={item.quantidade + '  de ' + item.descricao} />
                })}
            </ScrollView>
        </View>
    );


}


const styles = StyleSheet.create({
    contentContainer: {
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#c39',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 0



    },
    container: {
        flex: 1,
        backgroundColor: '#D93600',
        alignItems: 'center',
        justifyContent: 'center'

    },
    texto: {
        color: '#fff',

        backgroundColor: 'red',
        width: '100%',
        fontSize: 20

    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 20
    },
    scrollContainer: {
        flex: 1,
        width: '80%',

    },
    itemsContainer: {
        
        marginTop: 10,
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'stretch',
        backgroundColor: 'blue',

    },
});