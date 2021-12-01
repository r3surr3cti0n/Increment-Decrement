import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function App() {
	const [szam, setSzam] = useState(0);

	const increment = () => {
		setSzam(szam + 1);
	};
	const decrement = () => {
		setSzam(szam - 1);
	};

	const reset = () => {
		setSzam(0);
	};

	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 23 }}>{szam}</Text>

			<View style={styles.flex}>
				<TouchableOpacity style={styles.btn} onPress={decrement}>
					<Text>decrement</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.btn} onPress={increment}>
					<Text>increment</Text>
				</TouchableOpacity>
			</View>

			<TouchableOpacity style={styles.btn} onPress={reset}>
				<Text>reset</Text>
			</TouchableOpacity>

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	btn: {
		display: "block",
		fontSize: 20,
		color: "#000",
		margin: 10,
		borderRadius: 5,
		border: "1px solid black",
		padding: "5px",
	},
	flex: {
		flexDirection: "row",
	},
});
