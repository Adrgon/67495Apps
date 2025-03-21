import { useEffect } from 'react';
import {useFonts} from 'expo-font'
import Navigator from './src/navigation/Navigator';
import { SafeAreaView, View, StyleSheet, Platform, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store'
import { colors } from './src/global/color';

import { useDB } from './src/hooks/useDB';

//import { initDB } from './src/persistence';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Josefin: require("./assets/JosefinSans-Regular.ttf"),
  });
  // inicializar base de session
  const { initDB } = useDB();

  useEffect(() => {
    initDB();
  }, []);

  if (!fontsLoaded || fontError) {
    return null;
  }

  if (fontsLoaded && !fontError) {
    return (
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    // alignItems: "center",
    backgroundColor: colors.primary,
  },
});
