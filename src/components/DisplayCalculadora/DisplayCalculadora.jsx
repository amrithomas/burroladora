import { View, Text, StyleSheet } from "react-native";

export default function DisplayCalculadora({result, input}){
	return (
		// Container principal do Display
		<View style={ [styles.display, {backgroundColor: "#ffffff00", height: '25%'}] }>
			{/* Resultado */}
			<View style={ [styles.result, {backgroundColor: "#ffffff00", height: '50%'}] }>
				<Text style={ [styles.resultText, {color: "#fff", backgroundColor: "#ffffff00"}] }>{result}</Text>
			</View>
			
			{/* Expressão */}
			<View style={ [styles.expression, {backgroundColor: "#ffffff00", height: '50%'}] }>
				<Text style={ [styles.expressionText, {color: "#fff", backgroundColor: "#ffffff00"}] }>{input}</Text>
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