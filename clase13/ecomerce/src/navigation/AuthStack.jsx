import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'



const Stack = createNativeStackNavigator()
import Login from '../screens/Login'
import Signup from '../screens/Signup'

const AuthStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
            headerShown: false
        }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})
