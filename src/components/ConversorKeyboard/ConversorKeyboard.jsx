import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { Dimensions } from "react-native";
// Imagem botão de apagar
import erase from '../../../assets/erase.png';
//Componente da Tela
import ConversorInput from "../ConversorInput/ConversorInput";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ConversorKeyboard = ({type}) => {

    const [input, setInput] = useState('');

    const insertValue = (value) => {
        if (value === '-') {
          if (input.startsWith('-')) {
            return input; 
          } else {
            setInput((prevValue) => '-' + prevValue);
          }
        } else if (value === 'C') {
          setInput((prevValue) => prevValue.slice(0, -1));
        } else if (value === '.') {
          if (input.endsWith('.')) {
            return input; // Already ends with '.', no need to add another
          } else if (input.startsWith('.')) {
          } else {
            setInput((prevValue) => prevValue + value);
          }
        } else {
          setInput((prevValue) => prevValue + value);
        }
      };
      
      
 
    const buttons = [
        '7', '8', '9',
        '4', '5', '6',
        '1', '2', '3',
        '-', '0', '.',
      ];

      const rows = 4; // Número de linhas
      const cols = 3; // Número de colunas

      const typeInput = type;

    return(
        
        <View style = {styles.container}>
        <ConversorInput type={typeInput} value={input}/>
        
        <View style={ styles.rowBackspace }> 
            <TouchableOpacity onPress={() => insertValue('C')} style={ {marginRight: 55, alignSelf: 'flex-end'}}>
                <Image
                source={erase}
                style = {{width: 50, height: 50}}
                />
            </TouchableOpacity>
        </View>

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