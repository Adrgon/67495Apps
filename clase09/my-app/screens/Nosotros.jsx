import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Nosotros = ({navigation, route}) => {
  console.log(route)
  const { id } = route.params
  const volver = () => {
    //navigation.navigate("Inicio")
    //navigation.push('Inicio')
    navigation.goBack()
  }
  return (
    <View>
      <Text>Nosotros</Text>
      <Text>{ id }</Text>
      <Button title='Volver' onPress={()=>{
        volver()
      }} />
    </View>
  )
}

export default Nosotros

const styles = StyleSheet.create({})
