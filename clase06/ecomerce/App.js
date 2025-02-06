import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import Header from './src/components/Header';
import { colors } from './src/global/color';
import Home from './src/screens/home';


export default function App() {

  return (
    <View style={styles.container}>
      <Header title="Categories" />
      <Home />
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
    justifyContent: 'center',

  }
});
