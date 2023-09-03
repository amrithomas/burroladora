import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Keyboard from '../../components/Keyboard/Keyboard';
import { SafeAreaView } from 'react-native-safe-area-context';
import DisplayCalculadora from '../../components/DisplayCalculadora/DisplayCalculadora';

export default function Calculadora({ navigation }) {

    // const [result, setResult] = useState('');
    // const [input, setInput] = useState('');

    return  (
        <>
            <SafeAreaView style = { [styles.container] }>
                {/* <DisplayCalculadora result = {3} input = {2}/> */}
                <Keyboard />
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
        flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'flex-end',
        // justifyContent: 'space-between',
    },
})