import { StyleSheet, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./BottomTabNavigator";
import AuthStack from "./AuthStack";
import {useDispatch, useSelector} from 'react-redux'
import { setUser } from "../features/user/UserSlice";

import { useDB } from "../hooks/useDB";

const Navigator = () => {

const dispatch = useDispatch()
const {user} = useSelector(state => state.auth.value)
const {getSession} = useDB()

// obtener la session
useEffect(()=>{
  (async ()=> {
    try{
      const response = await getSession()
      if(response) {
        const user = response;
        dispatch(
          setUser({
            email: user.email,
            localId: user.localId,
            idToken: user.token
        }))
      }
    } catch (err){
      console.log(err)
    }
  })()
},)

  return (

      <NavigationContainer>
      {user ? <BottomTabNavigator /> : <AuthStack />}
      </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
