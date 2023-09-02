import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import CheckCircleFillIcon from "react-native-bootstrap-icons/icons/check-circle-fill";

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

        <TouchableOpacity style={ [styles.optionsItem, {backgroundColor: '#f1f1f120'}] }>
          <Text style={ [styles.optionsText, styles.whiteText] }>
            <Icon_Calculator fill="#fff" width={24} height={24} viewBox="0 0 16 16" style={ styles.optionsIcon }/>
            Calculadora</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ [styles.optionsItem, {backgroundColor: '#f1f1f120'}] }>
          <Text style={ [styles.optionsText, styles.whiteText] }>
            <Icon_Coins fill="#fff" width={24} height={24} viewBox="0 0 16 16" style={ styles.optionsIcon }/>
            Moedas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={ [styles.optionsItem, {backgroundColor: '#f1f1f120'}] }>
          <Text style={ [styles.optionsText, styles.whiteText] }>
            <Icon_Rulers fill="#fff" width={24} height={24} viewBox="0 0 16 16" style={ styles.optionsIcon }/>
            Medidas</Text>
        </TouchableOpacity>
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
    height: '70%'
  },

	optionsItem: {
		paddingVertical: 10,
    margin: 10
	},

  optionsIcon: {
      
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
