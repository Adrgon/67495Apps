import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import Header from './src/components/Header';
import { colors } from './src/global/color';
import Home from './src/screens/Home';
import ItemListCategory from './src/screens/ItemListCategory';
import Detail from './src/screens/Detail';


export default function App() {
  const [categorySelected, setCategorySelected] = useState("")
  console.log(categorySelected)
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
      )}

      {/* <Detail /> */}
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
