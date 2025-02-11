import {View, StyleSheet} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'


import Header from './src/components/Header';
import Home from './src/screens/Home';
import ItemListCategory from './src/screens/ItemListCategory';
import Detail from './src/screens/Detail';
import { colors } from './src/global/color';

export default function App() {
  const [categorySelected, setCategorySelected] = useState("");
  
    return (
      <View style={styles.container}>
        <Header title="Categories" />
        {!categorySelected ? (
          <Home setCategorySelected={setCategorySelected} />
        ) : (
          <ItemListCategory
            categorySelected={categorySelected}
            setCategorySelected={setCategorySelected}
          />
        ) 
      }
        <StatusBar style="dark" />
      </View>
    );

}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: colors.base,
    flex: 1,
    alignItems: 'center',
  }
});
