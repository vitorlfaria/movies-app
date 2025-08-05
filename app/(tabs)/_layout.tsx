import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, Text } from "react-native";

const _Layout = () => {
	return (
		<Tabs>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: () => <Text>🏠</Text>,
					headerShown: false,
				}}
			/>
		</Tabs>
	);
};

export default _Layout;

const styles = StyleSheet.create({});
