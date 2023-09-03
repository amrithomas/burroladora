import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ConversorInput from '../../components/ConversorInput/ConversorInput';

export default function ConversorDistancia({ navigation }) {


    return (

        <View style={styles.container}>

            <View style={styles.conversor}>
                <ConversorInput type={'distancia'}></ConversorInput>
            </View>
            <View style={styles.teclado}>

            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    conversor: {
        flex : 2 / 3, 
    },
})