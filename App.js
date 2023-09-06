import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { Image } from 'react-native';

import Calculadora from './src/pages/Calculadora';
import ConversorDistancia from './src/pages/ConversorDistancia';
import ConversorGraus from './src/pages/ConversorGraus';

import CustomDrawer from './src/components/CustomDrawer';
import ButtonCardapio from './src/components/ButtonCardapio';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        // opções da barra superior do aplicativo
        screenOptions={{
          drawerStyle: { backgroundColor: '#272929'},
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#000' },
          headerShadowVisible: false,
          // headerTitle: '',
          headerLeft: () => <ButtonCardapio />,
        }}
        initialRouteName="Calculadora"
        // propriedade que define o Drawer customizado
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen name="Calculadora" component={Calculadora} options={ {title: "" }}/>
        <Drawer.Screen name="Comprimentos" component={ConversorDistancia} options={ {title: "Comprimento", headerTitleStyle: {color: '#fff'} } }/>
        <Drawer.Screen name="Graus" component={ConversorGraus} options={ {title: "Temperatura", headerTitleStyle: {color: '#fff'} } }/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
