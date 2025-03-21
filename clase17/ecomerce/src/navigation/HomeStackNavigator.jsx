import React from "react";
import { View, StyleSheet, SafeAreaView} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screens/Home";
import ItemListCategory from "../screens/ItemListCategory";
import Detail from "../screens/Detail";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
      <Stack.Navigator 
        initialRouteName="Home" 
        screenOptions={{
          headerShown: false
        }}
        >
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={ItemListCategory} name="ItemListCategory" />
        <Stack.Screen component={Detail} name="Detail" />
      </Stack.Navigator>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({});
