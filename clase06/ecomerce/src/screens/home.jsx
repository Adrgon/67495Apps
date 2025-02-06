import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import categories from '../data/categories.json'
import { colors } from '../global/color'
import CategoryItem from '../components/CategoryItem'

const Home = () => {
  return (
    <View style={styles.flatListContainer}>
      <FlatList
        showsVerticalScrollIndicator={false} 
        keyExtractor={element => element}
        data={categories}
        renderItem={({item})=> <CategoryItem category={item} />}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    flatListContainer: {
        backgroundColor: colors.secondary,
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    }
})
