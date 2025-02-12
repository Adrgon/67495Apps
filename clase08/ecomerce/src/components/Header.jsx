import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { colors } from '../global/color'

const Header = ({title="Hola!"}) => {
  const {height, width} = useWindowDimensions()
  return (
    <View style={styles.container}>
      <Text style={width > 360 ? styles.text : styles.textSM}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: colors.tertiary,
    fontFamily: "Josefin",
    fontSize: 24,
  },
  textSM: {
    color: colors.tertiary,
    fontFamily: "Josefin",
    fontSize: 18,
  },
});
