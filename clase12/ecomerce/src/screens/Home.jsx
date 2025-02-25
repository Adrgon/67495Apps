import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import categories from '../data/categories.json'
import { colors } from '../global/color'
import CategoryItem from '../components/CategoryItem'
//import Counter from '../components/Counter'


const Home = ({navigation}) => {
  return (
    <View style={styles.flatListContainer}>
{/*       <Counter /> */}
      <FlatList
        showsVerticalScrollIndicator={false} 
        keyExtractor={element => element}
        data={categories}
        renderItem={({item})=> <CategoryItem 
          category={item} 
          navigation={navigation} />}
      />
    </View>
  )
}

export default Home

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
