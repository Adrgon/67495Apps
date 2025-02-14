import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'
import { colors } from '../global/color'

const CategoryItem = ({ category, navigation}) => {
  return (
    <Card style={{ marginVertical: 10, marginHorizontal: 10 }}>
      <Pressable onPress={() => navigation.navigate('ItemListCategory', {category})}>
        <Text style={styles.text}>{category}</Text>
      </Pressable>
    </Card>
  );
};

export default CategoryItem

const styles = StyleSheet.create({
    text: {
        color: colors.tertiary,
        textAlign: 'center',
        fontSize: 20,
    }
})
