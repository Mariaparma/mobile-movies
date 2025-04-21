import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen.js'; 
import AvaliacaoScreen from './pages/AvaliacaoScreen.js'; // Corrigido o nome do componente

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Avaliacao" component={AvaliacaoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}