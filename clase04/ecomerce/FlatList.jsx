import React from "react";
import { View, FlatList, StyleSheet, Text, StatusBar } from "react-native";

const DATA = [
  {
    id: "0001",
    title: "First Item",
  },
  {
    id: "0002",
    title: "Second Item",
  },
  {
    id: "0003",
    title: "Third Item",
  },
  {
    id: "0004",
    title: "Third Item",
  },
  {
    id: "0005",
    title: "Third Item",
  },
  {
    id: "0006",
    title: "Third Item",
  },
  {
    id: "0007",
    title: "Third Item",
  },
  {
    id: "0008",
    title: "Third Item",
  },
  {
    id: "0009",
    title: "Third Item",
  },
  {
    id: "0010",
    title: "Third Item",
  },
  {
    id: "0011",
    title: "Third Item",
  },
  {
    id: "0012",
    title: "Third Item",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <View style={styles.container}>
    <FlatList
      data={DATA}
      renderItem={({ item }) => <Item title={item.title} />}
      keyExtractor={(item) => item.id}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
