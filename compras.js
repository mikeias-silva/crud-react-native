import React from 'react';
import {StyleSheet, Text, View, ScrollView, StatusBar} from 'react-native';

export default function AppCompras(){
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>COMPRAS!!</Text>
            <StatusBar style='light'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
        

    },
    texto:{
        color: '#fff',
        textShadowColor: '#fff',
      
    }
});