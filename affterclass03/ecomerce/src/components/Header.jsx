import React, { useState } from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { useDispatch } from 'react-redux'

import { colors } from '../global/color'
import CustomSwitch from './CustomSwitch'
import { setDarkMode } from '../features/glbal/globalSlice'


const Header = ({route}) => {
  const {height, width} = useWindowDimensions()
  const dispatch = useDispatch()
  const [isEnabled, setIsEnabled] = useState(false)


  const handleTheme = () => {
    setIsEnabled(initialValue => !initialValue)
    dispatch(setDarkMode(!isEnabled))
  }
  return (
    <View style={styles.container}>
      <Text style={width > 360 ? styles.text : styles.textSM}>{route.name}</Text>
      <CustomSwitch 
        isEnabled={isEnabled}
        setIsEnabled={handleTheme}
      />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
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
