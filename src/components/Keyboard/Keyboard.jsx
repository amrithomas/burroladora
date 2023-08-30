import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Keyboard() {
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

  async function insertValue(value) {
    setInputValue(value);
    let values = [];
    values.push(value);
    console.log(values);
    document.getElementById('saida').Text = values;
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
    <View>
      <View><Text id ="saida"></Text></View>  
      <View>
        <TouchableOpacity onPress = {() => console.log('oi')} style={styles.opeButtons} >
          <Text>AC</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress = {() => console.log('oi')} style={styles.opeButtons} >
          <Text>()</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress = {() => console.log('oi')} style={styles.opeButtons} >
            <Text>%</Text>
          </TouchableOpacity>
        <TouchableOpacity onPress = {() => console.log('oi')} style={styles.opeButtons} >
          <Text>/</Text>
          </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress = {() => insertValue(7)} style={styles.numButtons}>
          <Text>7</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => insertValue(8)} style={styles.numButtons}>
          <Text>8</Text>  
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => insertValue(9)} style={styles.numButtons}>
          <Text>9</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => console.log('oi')} style={styles.opeButtons}>
          <Text>*</Text>
          </ TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress = {() => insertValue(4)} style={styles.numButtons}>
          <View>4</View>  
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => insertValue(5)} style={styles.numButtons}>
          <View>5</View>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => insertValue(6)} style={styles.numButtons}>
          <View>6</View>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => console.log('oi')} style={styles.opeButtons}>
          <View>-</View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress = {() => insertValue(1)} style={styles.numButtons} >
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => insertValue(2)} style={styles.numButtons} >
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => insertValue(3)} style={styles.numButtons} >
          <View>3</View>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => console.log('oi')} style={styles.opeButtons} >
          <Text>*</Text>
        </TouchableOpacity>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  numButtons: {
    backgroundColor: '#272929',
    width: 30,
  },
  opeButtons: {
    backgroundColor: '#290086',
    opacity: 50,
    width: 30,
  }


})
