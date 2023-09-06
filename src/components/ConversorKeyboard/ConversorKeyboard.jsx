import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { Dimensions } from "react-native";
// Imagem botão de apagar
import erase from '../../../assets/erase.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ConversorKeyboard = () => {

    const insertValue = (value) => {
    
    }; 
    const buttons = [
        '7', '8', '9',
        '4', '5', '6',
        '1', '2', '3',
        '-', '0', 'C',
      ];

      const rows = 4; // Número de linhas
      const cols = 3; // Número de colunas

    return(
     <View style = {styles.container}>
        <View style = {styles.a}>
            {buttons.map((button, index) => (
                <TouchableOpacity
                    key={index}
                    onPress = {() => insertValue(button)}
                    style = {[styles.buttons,
                    {
                        marginTop: index >= cols ? 5 : 0, // Adiciona margem superior após cada linha
                        marginLeft: index % cols !== 0 ? 5 : 0, // Adiciona margem esquerda após cada coluna (exceto a primeira)
                    },
                    
                    ]}
                    >
                    <Text style = {styles.insideButton}>
                    {button}
                    </Text>
                </TouchableOpacity>
            )
            
            )}
        </View>

     </View>   
    );      
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-end',
    },
    a:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    insideButton: {
        color: '#fff',
        fontSize: (windowWidth/5)-(windowWidth/10),
        fontWeight: '200',
    },
    buttons:{
        backgroundColor:'#272929',
        borderRadius: 1000,
        height: windowWidth/5,
        width: windowWidth/4,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }

});


export default ConversorKeyboard;