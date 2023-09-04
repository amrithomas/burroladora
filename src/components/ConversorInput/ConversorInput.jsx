import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  SafeAreaView
} from "react-native";
import SelectDropdown from "react-native-select-dropdown";

import Icon_ArrowDown from "react-native-bootstrap-icons/icons/caret-down-fill";

const ConversorInput = (props) => {

  const selectButtonStyle = {
    backgroundColor: "rgba(217,217,217,0.25)",
    borderRadius: 10,
  };

  const selectButtonTextStyle = {
    color: "white",
  };

  const { type } = props;

  const units = type === 'distancia'
    ? ["Quilômetro", "Metro", "Centímetro", "Milímetro", "Micrômetro", "Nanômetro"]
    : ["Celsius", "Fahrenheit", "Kelvin"];

  const [inputText, setInputText] = useState();
  const [result, setResult] = useState();
  const [unidadeOrigem, setUnidadeOrigem] = useState(units[0]);
  const [unidadeDestino, setUnidadeDestino] = useState(units[1]);

  // Função de conversão genérica
  function conversor(value, unidadeOrigem, unidadeDestino) {
    if (type === 'distancia') {
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
    else if (type === 'temperatura') {
      if (unidadeOrigem === 'Celsius' && unidadeDestino === 'Fahrenheit') {
        return (value * 9 / 5) + 32;
      } else if (unidadeOrigem === 'Fahrenheit' && unidadeDestino === 'Celsius') {
        return (value - 32) * 5 / 9;
      } else if (unidadeOrigem === 'Celsius' && unidadeDestino === 'Kelvin') {
        return value + 273.15;
      } else if (unidadeOrigem === 'Kelvin' && unidadeDestino === 'Celsius') {
        return value - 273.15;
      } else if (unidadeOrigem === 'Fahrenheit' && unidadeDestino === 'Kelvin') {
        return (value - 32) * 5 / 9 + 273.15;
      } else if (unidadeOrigem === 'Kelvin' && unidadeDestino === 'Fahrenheit') {
        return (value - 273.15) * 9 / 5 + 32;
      }
    }

    return 0; // Retorno padrão
  }

  useEffect(() => {
    const valorConvertido = conversor(Number(inputText), unidadeOrigem, unidadeDestino);
    setResult(valorConvertido.toString());
  }, [inputText, unidadeOrigem, unidadeDestino]);

  return (
    <View style={styles.content}>
      <SafeAreaView style={styles.box}>
        <SelectDropdown
          defaultButtonText="Selecione"
          dropdownOverlayColor='#00000066'
          renderDropdownIcon={() => <Icon_ArrowDown fill={'#fff'} />}
          style={styles.select}
          data={units}
          buttonStyle={selectButtonStyle}
          buttonTextStyle={selectButtonTextStyle}
          onSelect={(selectedItem, index) => setUnidadeDestino(selectedItem)}
        />
        <Text style={styles.input} value={result}>
          {result}
        </Text>
      </SafeAreaView>
      <View style={styles.divider}></View>
      <SafeAreaView style={styles.box}>
        <SelectDropdown
          defaultButtonText="Selecione"
          dropdownOverlayColor='#00000066'
          renderDropdownIcon={() => <Icon_ArrowDown fill={'#fff'} />}
          style={styles.select}
          data={units}
          buttonStyle={selectButtonStyle}
          buttonTextStyle={selectButtonTextStyle}
          onSelect={(selectedItem, index) => setUnidadeOrigem(selectedItem)}
        />
        <TextInput
          style={styles.input}
          placeholder="..."
          value={inputText}
          keyboardType="numeric"
          onChangeText={(value) => setInputText(value)}
          />
      </SafeAreaView>
    </View>
  );
};

export default ConversorInput;

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#272929",
    margin: 10,
    flex: 1,
    justifyContent: "space-between",
    alignContent: "space-between",
  },
  select: {
    backgroundColor: "#D9D9D9",
    color: "white",
  },
  input: {
    alignSelf: "flex-end",
    margin: 10,
    fontSize: 24,
    color: "white",
  },
  content: {
    backgroundColor: "#272929",
    margin: 5,
    flex: 1,
    justifyContent: "space-between",
    alignContent: "space-between",
    borderRadius: 15,
  },
  divider: {
    borderBottomColor: "#000",
    borderBottomWidth: 15,
  },
});
