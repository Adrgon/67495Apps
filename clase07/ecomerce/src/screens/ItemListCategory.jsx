import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/color'

const ItemListCategory = () => {
  return (
    <View>
      <Text>ItemListCategory</Text>
    </View>
  )
}

export default ItemListCategory

//const styles = StyleSheet.create({})
const styles = StyleSheet.create({
  flatListContainer: {
    width: "100%",
    backgroundColor: colors.secondary,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
