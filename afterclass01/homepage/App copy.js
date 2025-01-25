import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Green from "./components/Green";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Red />
        <Blue />
        <Green />
        <Text>Soy Batman</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
