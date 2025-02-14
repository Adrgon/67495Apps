import React from 'react'
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from "../screens/Home";
import ItemListCategory from "../screens/ItemListCategory";
import Detail from '../screens/Detail'

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          component={ItemListCategory}
          name="ItemListCategory"
          options={{ title: "Productos" }}
        />
        <Stack.Screen
          component={Detail}
          name="Detail"
          options={{ title: "Producto" }}
        />
        <Stack.Screen
          component={Home}
          name="Home"
          options={{
            title: "My home",
            headerStyle: {
              backgroundColor: "#60511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator
