import { StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./BottomTabNavigator";
import AuthStack from "./AuthStack";
const Navigator = () => {
  const [user, setUser] = useState('')

  return (

      <NavigationContainer>
      {user ? <BottomTabNavigator /> : <AuthStack />}
      </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
