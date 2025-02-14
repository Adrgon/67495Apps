import {Platform, View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import React, { useState } from 'react'
import {useFonts} from 'expo-font'

/* import Header from './src/components/Header';
import Home from './src/screens/Home';
import ItemListCategory from './src/screens/ItemListCategory';
import Detail from './src/screens/Detail'; */
import { colors } from './src/global/color';

import Navigator from './src/navigation/Navigator';

export default function App() {
/*   const [categorySelected, setCategorySelected] = useState("");
  const [itemIdSelected, setItemIdSelected] = useState(""); */



  const [fontsLoaded, fontError] = useFonts({
    Josefin: require("./assets/JosefinSans-Regular.ttf"),
  })


  if(!fontsLoaded || fontError) {
    return null;
  }


  if(fontsLoaded && !fontError) {
    return (
      <Navigator />
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
