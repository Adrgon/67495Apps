import { StyleSheet, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./BottomTabNavigator";
import AuthStack from "./AuthStack";
import {useDispatch, useSelector} from 'react-redux'
import { setUser } from "../features/user/UserSlice";


const Navigator = () => {
  
const {user} = useSelector(state => state.auth.value)


// obtener la session

  return (

      <NavigationContainer>
      {user ? <BottomTabNavigator /> : <AuthStack />}
      </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
