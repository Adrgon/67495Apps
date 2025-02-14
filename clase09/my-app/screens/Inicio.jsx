import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Inicio = ({navigation}) => {
  const info = {
    id: 4523462453452345,
    total: 600000,
    medidas: {peso: 100, alto: 150}
  }

  const visitarNosotros = () => {
    navigation.navigate('Nosotros', info)
  }
  return (
    <View>
      <Text>Inicio</Text>
      <Button title="Ir a Nosotros"
        onPress={()=> visitarNosotros()}
      ></Button>
    </View>
  )
}

export default Inicio

const styles = StyleSheet.create({})
