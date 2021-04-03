import React from 'react';
import {StyleSheet, Text, View, ScrollView, StatusBar} from 'react-native';

export default function AppList(){
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Listagem!!</Text>
            <StatusBar style='light'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        

    },
    texto:{
        color: '#fff',
        
        
    }
});