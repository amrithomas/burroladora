import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";

// Icons
import Icon_X from "react-native-bootstrap-icons/icons/x-lg";
import Icon_Coins from "react-native-bootstrap-icons/icons/currency-exchange";
import Icon_Rulers from "react-native-bootstrap-icons/icons/rulers";
import Icon_Calculator from "react-native-bootstrap-icons/icons/calculator-fill";
import Icon_Star from "react-native-bootstrap-icons/icons/star-fill";

export default function CustomDrawer({ navigation }) {
  return (
  // Fundo do Drawer/ Drawer itself
	<DrawerContentScrollView contentContainerStyle={{backgroundColor: '#272929', height: '100%'}}>
    
    {/* Container principal / Wrapper */}
		<View style={ {flex: 1, flexDirection: 'column', justifyContent: 'space-between', padding: 20, backgroundColor: '#f1f1f120'} }>
    
      {/* View do botão de fechar */}
			<View style={ [{backgroundColor: '#f1f1f120'}] }>
        <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => navigation.closeDrawer()}>
          <Icon_X fill="#fff" width={25} height={25} viewBox="0 0 16 16"/>
        </TouchableOpacity>
      </View>

      {/* Header do Drawer */}
			<View style={[styles.drawerHeader, {backgroundColor: '#f1f1f120'}]}>
				<Text style={[styles.headerTitle, styles.whiteText]}>BURROLADORA</Text>
				<Text style={[styles.headerSubTitle, styles.whiteText]}>A calculadora para burros</Text>
			</View>

      {/* Drawer Main */}
			<View style={ [styles.drawerMain, {backgroundColor: '#f1f1f120'}] }>

        {/* Container das opções */}
        <View style={ [styles.optionsContainer, {backgroundColor: '#f1f1f120'}] }>

          {/* Opção Calculadora */}
          <TouchableOpacity style={ [styles.optionsItem, {backgroundColor: '#f1f1f120'}] } onPress={() => navigation.navigate("Calculadora")}>
            <Icon_Calculator fill="#fff" width={24} height={24} viewBox="0 0 16 16" style={ styles.optionsIcon }/>
            <Text style={ [styles.optionsText, styles.whiteText] }>Calculadora</Text>
          </TouchableOpacity>

          {/* Opção Moedas */}
          <TouchableOpacity style={ [styles.optionsItem, {backgroundColor: '#f1f1f120'}] } onPress={() => navigation.navigate("Moedas")}>
            <Icon_Coins fill="#fff" width={24} height={24} viewBox="0 0 16 16" style={ styles.optionsIcon }/>
            <Text style={ [styles.optionsText, styles.whiteText] }>Moedas</Text>
          </TouchableOpacity>

          {/* Opção Medidas */}
          <TouchableOpacity style={ [styles.optionsItem, {backgroundColor: '#f1f1f120'}] } onPress={() => navigation.navigate("Comprimentos")}>
            <Icon_Rulers fill="#fff" width={24} height={24} viewBox="0 0 16 16" style={ styles.optionsIcon }/>
            <Text style={ [styles.optionsText, styles.whiteText] }>Medidas</Text>
          </TouchableOpacity>
                </View>
        </View>

      {/* Footer do Drawer */}
      <View style={ [styles.footer, { backgroundColor: '#f1f1f120' }] }>
        <View style={ {flexDirection: 'row'} }>
          <Icon_Star fill="#ffff00" style={ [styles.star]}/> 
          <Icon_Star fill="#ffff00" style={ [styles.star]}/>
          <Icon_Star fill="#ffff00" style={ [styles.star]}/>
          <Icon_Star fill="#ffff00" style={ [styles.star]}/>
          <Icon_Star fill="#ffff00" style={ [styles.star]}/>
        </View>
        <Text style={[styles.footerText, styles.whiteText]}>Avalie-nos</Text>  
      </View>

    </View>

	</DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  whiteText: {
    color: '#fff',
  },

	drawerHeader: {
		width: '100%',
		alignItems: 'center',
		paddingVertical: 10,
		borderBottomColor: '#000',
		borderBottomWidth: 1	
	},

	headerTitle: {
		fontSize: 32,
		fontWeight: 'bold',
	},
	
	headerSubTitle: {
		fontSize: 18,
	},

	drawerMain: {
    flexDirection: 'column',
    height: '70%'
  },

  optionsContainer: {
    height: '30%',
  },

	optionsItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 10,
	},

  optionsIcon: {
    marginHorizontal: 10,
  },

	optionsText: {
		fontSize: 20,
	},

  footer: {
    alignItems: 'center',
    padding: 5,
  },

  star: {
    marginHorizontal: 3,
  },

  footerText: {

  },
});
