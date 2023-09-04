import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import DisplayCalculadora from '../../components/DisplayCalculadora/DisplayCalculadora';
import { Dimensions } from "react-native";

import erase from '../../../assets/erase.png'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Keyboard(){ 

  const [showOperations, setShowOperations] = useState(true);
    
  //valor digitado pelo usuario
  const [input, setInput] = useState('');
  //valor da conta
  const [result, setResult] = useState('');

  async function insertValue(value){
    
    if (value === '='){
      try{
        const evalResult = eval(input);
        setResult(evalResult.toString());
      }catch(error){
        setResult('Erro');
      }
      setInput('');
    } else if (value === 'AC') {
      setInput('');
      setResult('');
    } else if (value === '%') {
      setInput((prevValue) => prevValue += '/100*');
    } else if (value === 'C'){
      setInput((prevValue) => prevValue.slice(0, -1));
    } else if (value === '()'){
      setInput((prevValue) => '(' + prevValue + ')');
    } 
    else {
      setInput((prevValue) => prevValue + value);
    }
  }

  return (
    <>
    {/* Passar os Cálculos para o Visor */}
    <DisplayCalculadora result = {result} input = {input}/>

    <View style={ styles.rowBackspace }> 
      <TouchableOpacity onPress={() => insertValue('C')} style={ {marginRight: 10}}>
        <Image
          source={erase}
          style = {{width: 50, height: 50}}
        />
      </TouchableOpacity>
    </View>

    <View style = {StyleSheet.create({ alignSelf:'center' })}>
      {/* Primeira Linha do Teclado */}
      <View style={styles.rowViews}>
        <TouchableOpacity onPress = {() => insertValue('AC')} style={styles.opeButtons} >
          <Text style={styles.insideButtons}>AC</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress = {() => insertValue('()')} style={styles.opeButtons} >
          <Text style={styles.insideButtons}>(  )</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress = {() => insertValue('%')} style={styles.opeButtons} >
            <Text style={styles.insideButtons}>%</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress = {() => insertValue('/')} style={styles.opeButtons} >
          <Text style={styles.insideButtons}>÷</Text>
          </TouchableOpacity>
      </View>
      {/* Segunda Linha do Teclado */}
      <View style={styles.rowViews}>
        <TouchableOpacity onPress = {() => insertValue(7)} style={styles.numButtons}>
          <Text style={styles.insideButtons}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => insertValue(8)} style={styles.numButtons}>
          <Text style={styles.insideButtons}>8</Text>  
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => insertValue(9)} style={styles.numButtons}>
          <Text style={styles.insideButtons}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => insertValue('*')} style={styles.opeButtons}>
          <Text style={styles.insideButtons}>×</Text>
        </ TouchableOpacity>
      </View>
      {/* Terceira Linha do Teclado */}
      <View style={styles.rowViews}>
        <TouchableOpacity onPress = {() => insertValue(4)} style={styles.numButtons}>
          <Text style={styles.insideButtons}>4</Text>  
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => insertValue(5)} style={styles.numButtons}>
          <Text style={styles.insideButtons}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => insertValue(6)} style={styles.numButtons}>
          <Text style={styles.insideButtons}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => insertValue('-')} style={styles.opeButtons}>
          <Text style={styles.insideButtons}>-</Text>
        </TouchableOpacity>
      </View>
      {/* Quarta Linha do Teclado */}
      <View style={styles.rowViews}>
        <TouchableOpacity onPress = {() => insertValue(1)} style={styles.numButtons} >
          <Text style={styles.insideButtons}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => insertValue(2)} style={styles.numButtons} >
          <Text style={styles.insideButtons}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => insertValue(3)} style={styles.numButtons} >
          <Text style={styles.insideButtons}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => insertValue('+')} style={styles.opeButtons} >
          <Text style={styles.insideButtons}>+</Text>
        </TouchableOpacity>
      </View>
      {/* Quinta Linha do Teclado */}
      <View style={styles.rowViews}>
        <TouchableOpacity onPress = {() => insertValue(0)} style={styles.zeroButton} >
          <Text style={styles.insideButtons}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => insertValue('.')} style={styles.numButtons} >
          <Text style={styles.insideButtons}>,</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress = {() => insertValue('=')} style={styles.equalButton} >
          <Text style={styles.insideButtons}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  rowBackspace: {
    alignSelf: 'center',
    alignItems: 'flex-end',
    width: (((windowWidth/5)*4)+(10*4)),
    borderBottomColor: '#222',
    borderBottomWidth: 1,
  },

  rowViews:{
    flexDirection: 'row',
    width: '100%',
  },
  numButtons: {
    backgroundColor: '#272929',
    margin: 5,
    borderRadius: 1000,
    width: windowWidth/5,
    height: windowWidth/5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  opeButtons: {
    backgroundColor: '#290086',
    opacity: 50,
    margin: 5,
    borderRadius: 1000,
    width: windowWidth/5,
    height: windowWidth/5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  insideButtons: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '200',
    textAlign: 'center',
  },
  equalButton: {
    backgroundColor: '#5203FC',
    opacity: 50,
    margin: 5,
    borderRadius: 100,
    width: windowWidth/5,
    height: windowWidth/5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  zeroButton: {
    backgroundColor: '#272929',
    margin: 5,
    borderRadius: 1000,
    width: ((windowWidth/5)*2)+10,
    height: windowWidth/5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  


})
