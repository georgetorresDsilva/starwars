import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { createNavigator, createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import TelaInicial from './componentes/TelaInicial/index.js';
import Trilogia1 from './componentes/Trilogia1/index.js';
import Trilogia2 from './componentes/Trilogia2/index.js';
import Trilogia3 from './componentes/Trilogia3/index.js';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Tela Inicial' component={TelaInicial} />
        <Stack.Screen name='Trilogia 1' component={Trilogia1} />
        <Stack.Screen name='Trilogia 2' component={Trilogia2} />
        <Stack.Screen name='Trilogia 3' component={Trilogia3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

