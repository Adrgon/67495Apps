import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import MyProfile from '../screens/MyProfile'
import ImageSelector from '../screens/ImageSelector'
import ListAddress from '../screens/ListAddress'
import LocationSelector from '../screens/LocationSelector'


import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const MyProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MyProfile"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="Image selector" component={ImageSelector} />
      <Stack.Screen name='List Address' component={ListAddress} />
      <Stack.Screen name='Location Selector' component={LocationSelector} />
    </Stack.Navigator>
  );
}

export default MyProfileStackNavigator

const styles = StyleSheet.create({})
