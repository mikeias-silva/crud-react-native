import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar} from 'react-native';

export default function AppForm(){
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Form!</Text>
            <Text style={styles.texto}>Form!</Text>
            <Text style={styles.texto}>Form!</Text>
            <Text style={styles.texto}>Form!</Text>
            <StatusBar style='light'/>
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
    texto:{
        color: '#fff'
    }
});