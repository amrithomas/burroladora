import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Dimensions } from "react-native";

// Icons
import Icon_X from "react-native-bootstrap-icons/icons/x-lg";
import Icon_Calculator from "react-native-bootstrap-icons/icons/calculator-fill";
import Icon_Thermomenter from 'react-native-bootstrap-icons/icons/thermometer-half'
import Icon_Rulers from "react-native-bootstrap-icons/icons/rulers";
import Icon_Star from "react-native-bootstrap-icons/icons/star-fill";

const windowHeight = Dimensions.get('window').height;

export default function CustomDrawer({ navigation }) {
  return (
    // Fundo do Drawer/ Drawer itself
    <DrawerContentScrollView contentContainerStyle={{backgroundColor: '#272929'}}>
      
    {/* Container principal / Wrapper */}
		<View style={ {flex: 1, flexDirection: 'column', justifyContent: 'space-between', padding: 20, height: windowHeight} }>
      
      {/* View do botão de fechar */}
			<View>
        <TouchableOpacity style={{ alignSelf: 'flex-end', padding: 10, left: 5 }} onPress={() => navigation.closeDrawer()}>
          <Icon_X fill="#fff" width={25} height={25} viewBox="0 0 16 16"/>
        </TouchableOpacity>
      </View>

      {/* Header do Drawer */}
			<View style={[styles.drawerHeader]}>
				<Text numberOfLines={1} adjustsFontSizeToFit={true} style={[styles.headerTitle, styles.whiteText]}>BURROLADORA</Text>
				<Text adjustsFontSizeToFit={true} style={[styles.headerSubTitle, styles.whiteText]}>A calculadora para burros</Text>
			</View>

      {/* Drawer Main */}
			<View style={ [styles.drawerMain] }>

        {/* Container das opções */}
        <View style={ [styles.optionsContainer] }>

          {/* Opção Calculadora */}
            <DrawerItem
              label={"Calculadora"}
              labelStyle={ {color: '#fff'} }
              icon={() => <Icon_Calculator fill="#fff" width={24} height={24} viewBox="0 0 16 16" style={ styles.optionsIcon }/>}
              onPress={() => navigation.navigate("Calculadora")}
              // focused={true}
              // activeTintColor="#5203FC00"
            />

            {/* Opção Temperatura */}
            <DrawerItem
              label={"Temperatura"}
              labelStyle={ {color: '#fff'} }
              icon={() => <Icon_Thermomenter fill="#fff" width={24} height={24} viewBox="0 0 16 16" style={ styles.optionsIcon }/>}
              onPress={() => navigation.navigate("Graus")}
              // focused={true}
              // activeTintColor="#5203FC"
            />

            {/* Opção Comprimento */}
            <DrawerItem
              label={"Comprimento"}
              labelStyle={ {color: '#fff'} }
              icon={() => <Icon_Rulers fill="#fff" width={24} height={24} viewBox="0 0 16 16" style={ styles.optionsIcon }/>}
              onPress={() => navigation.navigate("Comprimentos")}
              // focused={true}
              // activeTintColor="#5203FC"
            />
          </View>
        </View>

      {/* Footer do Drawer */}
      <View style={ [styles.footer] }>
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
    marginVertical: 10,
    backgroundColor: '#ffffff08',
    borderRadius: 5,
	},

  optionsIcon: {
    marginHorizontal: 10,
  },

	optionsText: {
		fontSize: 18,
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
