import {Platform, View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import {useFonts} from 'expo-font'

import Header from './src/components/Header';
import Home from './src/screens/Home';
import ItemListCategory from './src/screens/ItemListCategory';
import Detail from './src/screens/Detail';
import { colors } from './src/global/color';

export default function App() {
  const [categorySelected, setCategorySelected] = useState("");
  const [itemIdSelected, setItemIdSelected] = useState("");



  const [fontsLoaded, fontError] = useFonts({
    Josefin: require("./assets/JosefinSans-Regular.ttf"),
  })


  if(!fontsLoaded || fontError) {
    return null;
  }


  if(fontsLoaded && !fontError) {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Categories" />
        {!categorySelected ? (
          <Home setCategorySelected={setCategorySelected} />
        ) : !itemIdSelected ? (
          <ItemListCategory
            categorySelected={categorySelected}
            setCategorySelected={setCategorySelected}
            setItemIdSelected={setItemIdSelected}
          />
        ) : (
          <Detail 
            idSelected={itemIdSelected} 
            setProductSelected={setItemIdSelected}
          />
        )}
        {/* <StatusBar style="dark" /> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //marginTop: 50,
    marginTop: Platform.OS === 'android' ? 0 : 0,
    backgroundColor: colors.base,
    flex: 1,
    alignItems: 'center',
  }
});
