import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { colors } from '../global/color';

import HomeStackNavigator from './HomeStackNavigator';
import CartStackNavigator from './CartStackNavigator'
import OrderStackNavigator from './OrderStackNavigator'

import CartTemp from '../screens/CartTemp'
import OrderTemp from '../screens/OrdersTemp'

const Tab = createBottomTabNavigator();
import Header from '../components/Header'

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Shop"
        component={HomeStackNavigator}
      />
      
      <Tab.Screen
        name="Cart"
        component={CartTemp}
      />

      <Tab.Screen
        name="Orders"
        component={OrderTemp}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.secondary,
    shadowColor: "black",
    elevation: 4,
    borderRadius: 15,
    height: 60,
  },
});
