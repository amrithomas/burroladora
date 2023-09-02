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

  const [inputText, setInputText] = useState();
  const [result, setResult] = useState();
  const [unidadeOrigem, setUnidadeOrigem] = useState("Quilômetro");
  const [unidadeDestino, setUnidadeDestino] = useState("Metro");

  const selectButtonStyle = {
    backgroundColor: "rgba(217,217,217,0.25)",
  };

  const selectButtonTextStyle = {
    color: "white",
  };


  function conversor(value, unidadeOrigem, unidadeDestino) {
    const fatores = {
      Quilômetro: 1000,
      Metro: 1,
      Centímetro: 0.01,
      Milímetro: 0.001,
      Micrômetro: 0.000001,
      Nanômetro: 0.000000001,
    };

    const valorEmMetros = value * fatores[unidadeOrigem];

    const valorConvertido = valorEmMetros / fatores[unidadeDestino];

    return valorConvertido;
  }

  useEffect(() => {
    const valorConvertido = conversor(Number(inputText), unidadeOrigem, unidadeDestino);
    setResult(valorConvertido.toString());
  }, [inputText, unidadeOrigem, unidadeDestino]);

  return (
    <View style={styles.content}>
      <SafeAreaView style={styles.box}>
        <SelectDropdown style={styles.select}
          data={distance}
          buttonStyle={selectButtonStyle}
          buttonTextStyle={selectButtonTextStyle}
          onSelect={(selectedItem, index) => setUnidadeDestino(selectedItem)}

        />
        <Text style={styles.input} value={result} >{result}</Text>
      </SafeAreaView>
      <View style={styles.divider}></View>
      <SafeAreaView style={styles.box}>
        <SelectDropdown style={styles.select}
          data={distance}
          buttonStyle={selectButtonStyle}
          buttonTextStyle={selectButtonTextStyle}
          onSelect={(selectedItem, index) => setUnidadeOrigem(selectedItem)}
        />
        <TextInput style={styles.input} placeholder="..." value={inputText} onChangeText={(value) => setInputText(value)} />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#272929",
    margin: 10,
    flex: 1,
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
  select: {
    backgroundColor: "#D9D9D9",
    color: 'white'
  },
  input: {
    alignSelf: 'flex-end',
    margin: 10,
    fontSize: 24,
    color: 'white'
  },
  content: {
    backgroundColor: "#272929",
    margin: 5,
    flex: 1,
    justifyContent: 'space-between',
    alignContent: 'space-between',
    borderRadius: 15
  },
  divider: {
    borderBottomColor: "#000",
    borderBottomWidth: 15,
  },
});
