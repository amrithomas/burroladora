import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ConversorInput from '../../components/ConversorInput/ConversorInput';
import { NavigationContainer } from '@react-navigation/native';
import ConversorKeyboard from '../../components/ConversorKeyboard/ConversorKeyboard';

export default function ConversorGraus({ navigation }) {



    return (
        <View style={styles.container}>
            {/* <View style={styles.conversor}>
                <ConversorInput type={'temperatura'}/>
            </View> */}

            <View style={styles.teclado}>
                <ConversorKeyboard type={'temperatura'}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    teclado: {
        flex: 1 ,


    }
})