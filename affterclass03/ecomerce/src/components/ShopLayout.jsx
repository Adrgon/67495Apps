import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/color'
import { useSelector } from 'react-redux' 


const ShopLayout = ({children}) => {
    const isDark = useSelector((state) => state.global.value.darkMode);
    const backgroundColor = isDark ? colors.tertiary : colors.base
  return (
    <View style={{...styles.flatListContainer, backgroundColor}}>
      {children}
    </View>
  )
}

export default ShopLayout

const styles = StyleSheet.create({
    flatListContainer: {
            width: '100%',
            backgroundColor: colors.secondary,
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
        }
})
