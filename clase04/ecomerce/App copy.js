import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View, TextInput, StyleSheet, ScrollView } from 'react-native';

const productsExample = [
  { id: 1, value: "Tomate" },
  { id: 2, value: "Peras" },
  { id: 3, value: "Pan" },
  { id: 4, value: "Pan" },
  { id: 5, value: "Pan" },
  { id: 6, value: "Pan" },
  { id: 7, value: "Pan" },
  { id: 8, value: "Pan" },
  { id: 9, value: "Pan" },
  { id: 10, value: "Pan" },
  { id: 11, value: "Pan" },
  { id: 12, value: "Pan" },
  { id: 13, value: "Pan" },
  { id: 14, value: "Pan" },
  { id: 15, value: "Pan" },
  { id: 16, value: "Pan" },
];

export default function App() {
  const [textItem, setTextItem] = useState("") // retorna un arreglo con dos elementos
  const [itemList, setItemList] = useState(productsExample) 
  //console.log(arr)
  //console.log(arr[0]) // valor
  //console.log(arr[1]) // funcion

  //console.log(textItem) // ""
  //console.log(setTextItem) // funcion 

  const handleChangeText = (text) => setTextItem(text)


  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          value={textItem}
          onChangeText={handleChangeText}
        />
        <Button title="Agregar" color="#5555ff" />
      </View>
      <ScrollView style={styles.productsContainer}>
      {itemList.map(item => (
        <View key={item.id} style={styles.product}>
          <Text style={styles.productText}>{item.value} </Text>
        </View>
      ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#888888",
    flex: 1,
    paddingTop: 30,
  },
  inputContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "20",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    fontSize: 16,
    width: "250",
  },
  productsContainer: {
    
    borderWidth: 1,
    marginTop: 15,
    paddingVertical: 10,
    width: "90%",
  },
  product: {
    alignItems: "center",
    backgroundColor: "#cccccc",
    borderRadius: 5,
    justifyContent: "center",
    marginVertical: 10,
    paddingVertical: 15,
    width: "90%",

  },

  productText: {
    fontSize: 10,
    fontWeight: "bold", 
  }

});
