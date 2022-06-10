import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Pedidos from './src/pages/Pedidos';
import NovoPedido from './src/pages/NovoPedido';
import Detalhes from './src/pages/Detalhes';
import Login from './src/pages/Login';
import Modo from './src/pages/Modo';
import Arquitetura from './src/pages/Arquitetura';
import Sobre from './src/pages/Sobre'
import FAQ from './src/pages/FAQ';
import Envios from './src/pages/Envios';

const Stack = createStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTintColor: "#32cd30",
            backgroundColor: 'transparent',
          }}

        />

        <Stack.Screen
          name="Pedidos"
          component={Pedidos}
          options={{
            headerTintColor: "#32cd30",
            backgroundColor: 'transparent',
          }}

        />

        <Stack.Screen
          name="NovoPedido"
          component={NovoPedido}
          options={{
            headerTintColor: "#32cd30"
          }}

        />

        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{
            headerTintColor: "#32cd30"
          }}

        />

        <Stack.Screen
          name="Modo"
          component={Modo}
          options={{
            headerTintColor: "#32cd30",
            backgroundColor: 'transparent',
          }}

        />

        <Stack.Screen
          name="Arquitetura"
          component={Arquitetura}
          options={{
            headerTintColor: "#32cd30",
            backgroundColor: 'transparent',
          }}

        />

        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{
            headerTintColor: "#32cd30"
          }}

        />

        <Stack.Screen
          name="FAQ"
          component={FAQ}
          options={{
            headerTintColor: "#32cd30"
          }}

        />

        <Stack.Screen
          name="Envios"
          component={Envios}
          options={{
            headerTintColor: "#32cd30"
          }}

        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
