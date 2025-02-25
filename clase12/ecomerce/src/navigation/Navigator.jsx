import { StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./BottomTabNavigator";

const Navigator = () => {
  return (

      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
