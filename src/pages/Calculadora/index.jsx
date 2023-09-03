import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Keyboard from '../../components/Keyboard/Keyboard';

export default function Calculadora({ navigation }) {



    return  (
        <>
            <View style = {styles.container}>
                <Keyboard></Keyboard>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
    },
})