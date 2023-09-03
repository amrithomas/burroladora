import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Keyboard(){
  const [showOperations, setShowOperations] = useState(true);

  //valor da conta
  const [total, setTotal] = useState("");

  //operação digitada pelo usuario
  const [operation, setOperation] = useState();

  //valor digitado pelo usuario
  const [inputValue, setInputValue] = useState();

  //expressão numerica
  const [expression, setExpression] = useState([]);[
  ]
  
  // const int = value;
  async function insertValue() {
    setInputValue();
    let values = [];
    values.push();
    // useEffect(() => {});
  }

  async function insertExpression(operation){
    
  }

  async function reset() {
    setInputValue(0);
    setExpression([]);
    setTotal(0);
  }

  return (
    <>
    <View style = {StyleSheet.create({ alignSelf:'center', bottom: -300, position: 'fixed', })}>
      {/* <View><Text style = {StyleSheet.create({ color: '#fff', alignSelf:'center', fontSize: 30 })}>teste</Text></View>   */}
      <View style={styles.rowViews}>
        <TouchableOpacity onPress = {() => console.log('oi')} style={styles.opeButtons} >
          <Text style={styles.insideButtons}>AC</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress = {() => console.log('oi')} style={styles.opeButtons} >
          <Text style={styles.insideButtons}>(  )</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress = {() => console.log('oi')} style={styles.opeButtons} >
            <Text style={styles.insideButtons}>%</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress = {() => console.log('oi')} style={styles.opeButtons} >
          <Text style={styles.insideButtons}>/</Text>
          </TouchableOpacity>
      </View>
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
        <TouchableOpacity onPress = {() => console.log('oi')} style={styles.opeButtons}>
          <Text style={styles.insideButtons}>*</Text>
          </ TouchableOpacity>
      </View>
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
        <TouchableOpacity onPress = {() => console.log('oi')} style={styles.opeButtons}>
          <Text style={styles.insideButtons}>-</Text>
        </TouchableOpacity>
      </View>
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
        <TouchableOpacity onPress = {() => console.log('oi')} style={styles.opeButtons} >
          <Text style={styles.insideButtons}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowViews}>
        <TouchableOpacity onPress = {() => insertValue(1)} style={styles.zeroButton} >
          <Text style={styles.insideButtons}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => insertValue(1)} style={styles.numButtons} >
          <Text style={styles.insideButtons}>,</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress = {() => console.log('oi')} style={styles.equalButton} >
          <Text style={styles.insideButtons}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  rowViews:{
    flexDirection: 'row',
    width: '100%'
  },
  numButtons: {
    backgroundColor: '#272929',
    margin: 5,
    borderRadius: 40,
    width: 90,
    height: 90,
  },
  opeButtons: {
    backgroundColor: '#290086',
    opacity: 50,
    margin: 5,
    borderRadius: 40,
    width: 90,
    height: 90,
  },
  insideButtons: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
  },
  equalButton: {
    backgroundColor: '#5203FC',
    opacity: 50,
    margin: 5,
    borderRadius: 40,
    width: 90,
    height: 90,
  },
  zeroButton: {
    backgroundColor: '#272929',
    margin: 5,
    borderRadius: 40,
    width: 190,
    height: 90,
  },
  


})
