import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
// Imagem botão de apagar
import erase from '../../../assets/erase.png';


const ConversorKeyboard = () => {

    const insertValue = (value) => {
    
    }; 
    const buttons = [
        '7', '8', '9',
        '4', '5', '6',
        '1', '2', '3',
        '-', '0', 'C',
      ];


    return(
     <View style = {styles.container}>
        <View>
            {buttons.map((button, index) => (
                <TouchableOpacity
                    key={index}
                    onPress = {() => insertValue(button)}
                    style = {styles.buttons}
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
        flex: 1
    },
    insideButton: {
        color: '#000',
        fontSize: 20
    },
    buttons:{
        backgroundColor:'#fff',
        flexDirection: 'row',
        height: '80',
        width: '80',
        margin: 2
    }

});


export default ConversorKeyboard;