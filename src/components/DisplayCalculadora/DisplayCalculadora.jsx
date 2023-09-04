import { View, Text, StyleSheet } from "react-native";

export default function DisplayCalculadora({result, input}){
	return (
		// Container principal do Display
		<View style={ [styles.display, {height: '30%'}] }>
			{/* Resultado */}
			<View style={ [styles.result, {height: '50%'}] }>
				<Text adjustsFontSizeToFit={true} style={ [styles.resultText, {color: "#ff0"}] }>{result}</Text>
			</View>
			
			{/* Expressão */}
			<View style={ [styles.expression, {height: '50%'}] }>
				<Text adjustsFontSizeToFit={true} style={ [styles.expressionText, {color: "#fff"}] }>{input}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	display: {
		padding: 10,

	},
	
	result: {
		alignItems: 'flex-end',
		justifyContent: "flex-end",
	},
	
	resultText: {
		fontSize: 56,
		fontWeight: '200',
	},

	expression: {
		alignItems: 'flex-end',
		justifyContent: "flex-end",
	},

	expressionText: {
		fontSize: 32,
		fontWeight: '200',
	},

});