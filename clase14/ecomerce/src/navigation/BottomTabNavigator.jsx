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
import MyProfileStackNavigator from './MyProfileStackNavigator';

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: () => {
          return <Header route={route} />;
        },
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      })}
    >
      <Tab.Screen
        name="Ecomerce"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome5
                  name="store"
                  size={24}
                  color={focused ? "black" : colors.tertiary}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome6
                  name="cart-shopping"
                  size={24}
                  color={focused ? "black" : colors.tertiary}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Orders"
        component={OrderStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <FontAwesome5
                  name="receipt"
                  size={24}
                  color={focused ? "black" : colors.tertiary}
                />
              </View>
            );
          },
        }}
      />
      {/* Agregar el tab para el perfil */}
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
