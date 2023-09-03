import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";

import Calculadora from "./src/pages/Calculadora";
import ConversorDistancia from "./src/pages/ConversorDistancia";
import ConversorGraus from "./src/pages/ConversorGraus";
import CustomDrawer from "./src/components/CustomDrawer";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Drawer.Navigator initialRouteName="Calculadora" drawerContent={(props) => <CustomDrawer {...props}/>} >
        <Drawer.Screen name="Calculadora" component={Calculadora} />
        <Drawer.Screen name="Comprimentos" component={ConversorDistancia} />
        <Drawer.Screen name="Graus" component={ConversorGraus} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
  },
});
