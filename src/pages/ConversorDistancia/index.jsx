import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ConversorInput from '../../components/ConversorInput/ConversorInput';

export default function ConversorDistancia({ navigation }) {


    return  (
        <>
            <View>
                <ConversorInput></ConversorInput>
            </View>
        </>
    )
}