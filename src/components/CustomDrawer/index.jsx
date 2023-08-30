import React from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CheckCircleFillIcon from "react-native-bootstrap-icons/icons/check-circle-fill";

const CustomDrawer = ({ navigation }) => {
  const navigateToScreen = (screenName) => () => {
    navigation.navigate(screenName);
  };

  return (
    <DrawerContentScrollView>
      <TouchableOpacity onPress={navigateToScreen("Calculadora")}>
        
        <Text><CheckCircleFillIcon fill="rgb(189, 189, 189)" />Calculadora</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToScreen("Comprimentos")}>
        <Text>Comprimentos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToScreen("Moedas")}>
        <Text>Moedas</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
