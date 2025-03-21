import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../global/color";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Search = ({ onSearch = () => {}, error = "", goBack = () => {} }) => {
  const [keyword, setKeyword] = useState("");
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={keyword}
        onChangeText={setKeyword}
      />
      <Pressable onPress={() => onSearch(keyword)}>
        <FontAwesome name="search" size={24} color="white" />
      </Pressable>
      <Pressable onPress={() => setKeyword("")}>
        <FontAwesome5 name="eraser" size={24} color="white" />
      </Pressable>
      <Pressable onPress={goBack}>
        <AntDesign name="back" size={24} color="white" />
      </Pressable>
      {error ? <Text>{error}</Text> : null}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
  },
  input: {
    width: 250,
    padding: 8,
    fontSize: 18,
    backgroundColor: colors.primary,
    color: colors.tertiary,
    borderRadius: 10,
  },
});
