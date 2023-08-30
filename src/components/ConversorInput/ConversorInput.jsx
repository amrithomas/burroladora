import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  SafeAreaView,
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";

export default function ConversorInput() {
  const distance = [
    "Quilômetro",
    "Metro",
    "Centímetro",
    "Milímetro",
    "Micrômetro",
    "Nanômetro",
  ];

  const [inputText, setInputText] = useState("Teste");
  const [result, setResult] = useState("Teste");

  function conversor() {
    
  }

  return (
    <View>
      <SafeAreaView style={styles.box}>
        <SelectDropdown
          data={distance}
        />
        <Text style={styles.input} value={result}/>
      </SafeAreaView>

      <SafeAreaView style={styles.box}>
        <SelectDropdown
          data={distance}
        />
        <TextInput style={styles.input} value={inputText}  onChangeText={(value) => setInputText(value)}/>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {},
  input: {},
});
