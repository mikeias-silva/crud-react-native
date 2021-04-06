import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Database from './database.js';
import Icon from 'react-native-vector-icons/Feather';



export default function AppItem(props) {
    async function handleEditPress() {

        try {
            const item = await Database.getItem(props.id);
            props.navigation.navigate("AppForm", item);
        } catch (error) {
            console.log(error);
        }

    }

    function handleDeletePress() {
        Alert.alert(
            "Atenção",
            "Você tem certeza que deseja excluir esse item?",
            [
                {
                    text: "Não",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"

                },
                {
                    text: "Sim", onPress: () => {
                        Database.deleteItem(props.id)
                            .then(response =>
                                props.navigation.navigate("AppList", { id: props.id }));
                    }
                }
            ],
            {
                cancelable: false
            }
        );
    }
    return (
        <View style={styles.container}>
            <Text style={styles.textITem}>{props.item}</Text>
            <View style={styles.buttonsContainer} >

                <View style={styles.deleteButton}>

                    <Icon name="x" size={20} color="#fff" onPress={handleDeletePress} />

                </View>

                <View style={styles.editButton}>

                    <Icon name="edit-2" size={20} color="#fff" onPress={handleDeletePress} />

                </View>

            </View>

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: 20,
        width: '100%'
    },
    buttonsContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 10,
        marginTop: 10,
        
        
    },
    editButton: {
        marginLeft: 10,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center'
    },
    deleteButton: {
        marginLeft: 10,
        height: 40,
        width: 40,
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
    },

}
);