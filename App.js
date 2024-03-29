import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import UserDetails from './screens/UserDetails';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen
				name="Home"
				component={Home}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="UserDetails"
				component={UserDetails}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	</NavigationContainer>
	);
}