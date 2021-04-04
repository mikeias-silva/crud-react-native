import React from 'react';
import {
    SyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';


export default function AppItem2(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.textITem}>{props.item}</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.deleteButton}>
                    <Text style={styles.buttonText}>X</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: 20,
        widith: '100%'
    },
    buttonsContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        boderBottomWidith: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 10,
        marginTop: 10,
    },
    editButton: {
        marginLetft: 10,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
        ,
        deleteButton: {
            marginLetft: 10,
            height: 40,
            widith: 40,
            backgroundColor: 'red',
            borderRadius: 10,
            padding: 10,
            fontSize: 12,
            elevation: 10,
            shadowOpacity: 10,
            shadowColor: '#ccc',
            alignItems: 'center'
        },
        buttonText: {
            color: '#fff',
            fontWeight: 'bold',
        },
        textITem: {
            fontSize: 20,
        }
    }
});