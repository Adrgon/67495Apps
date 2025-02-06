import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'
import { colors } from '../global/color'

const CategoryItem = ({category}) => {
  return (
    <Card >
      <Text style={styles.text}>{category}</Text>
    </Card>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    text: {
        color: colors.tertiary,
        textAlign: 'center',
        fontSize: 20,
    }
})
