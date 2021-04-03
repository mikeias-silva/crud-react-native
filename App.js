/**  
* @format
* @flow strict-local
*/


import React from 'react';
import { Node } from 'react';
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


import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AppTab from './AppTabs';

const Section = ({ children, title }): Node => {
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <View style={styles.sectionContainer}>
            <Text style={[
                styles.sectionTitle,
                {
                    color: isDarkMode ? Colors.white : Colors.black,
                },
                { title }

            ]}></Text>

            <Text style={[
                styles.sectionDescription,
                {
                    color: isDarkMode ? Colors.lighe : Colors.dark
                }
            ]}>
                {children}
            </Text>
        </View>
    );
};

const App: () => Node = () => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
    };

    return (
        <>

        
            <AppTab />
            <StatusBar style="light" />
        </>
    );
};

const styles = StyleSheet.create({
    SectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;