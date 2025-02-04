import React from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native'
import { colors2 } from '../../constanst/color';

const ProductInput = ({ textItem, addItem, handleChangeText }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={textItem}
        onChangeText={handleChangeText}
        placeholder="Limpiar la casa"
      />
      <Button title="Agregar" color="#5555ff" onPress={addItem} />
    </View>
  );
};

export default ProductInput

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    borderBottomWidth: 1,
    backgroundColor: colors2.green3,
    borderBottomColor: "black",
    width: 240,
    fontSize: 16,
    height: 35,
    paddingHorizontal: 5,
  },
});
