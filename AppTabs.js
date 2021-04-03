
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
const Stack = createStackNavigator();


import AppList from './AppList';
import AppForm from './AppForm';
import { color } from 'react-native-reanimated';


function AppTab() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                title="stacknavigator"
                tabBarOptions={{
                    style: {
                        elevation: 0,
                        shadowOpacity: 0,
                        height: 64,
                        activeBackgroundColor: '#c3c',
                        color: '#c3c333',
                        backgroundColor: 'blue',
                    },
                    tabStyle: {
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    labelStyle: {
                        fontSize: 13,
                        marginLeft: 16
                    },
                    inactiveBackgroundColor: '#fafafc',
                    activeBackgroundColor: '#ebebf5',
                    inactiveTintColor: '#c1bccc',
                    activeTintColor: '#32264d'
                }}>
                <Tab.Screen name="Cadastro" component={AppForm} />
                <Tab.Screen
                    name="Lista"
                    component={AppList}/>

            </Tab.Navigator>

        </NavigationContainer>

    );
}

export default AppTab;
