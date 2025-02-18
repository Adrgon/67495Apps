import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/color'

const Card = ({children, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        width: 250,
        height: 40,
        shadowColor: colors.tertiary,
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
