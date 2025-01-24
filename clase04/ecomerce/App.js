import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View, TextInput, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';

const productsExample = [
  { id: 1, value: "Tomate" },
  { id: 2, value: "Peras" },
  { id: 3, value: "Pan" },
];

export default function App() {
  const [textItem, setTextItem] = useState("") // retorna un arreglo con dos elementos
  const [itemList, setItemList] = useState([]) 
  const [modalVisible, setModalVisible] = useState(false)
  const [itemSelected, setItemSelected] = useState({})

  const handleChangeText = (text) => setTextItem(text)
  const handleModal = (item) => {
    setItemSelected(item)
    setModalVisible(true)
  }

  const addItem = () => {
    setItemList( currentValue => [...currentValue, {id: Math.random().toString(), value: textItem}])
    setTextItem("")
  }

  const handleDelete = () => {
    const filter = itemList.filter(item => item.id !== itemSelected.id)
    setItemList(filter)
    setModalVisible(false)
  }

  const handleCancelModal = () => {
    setModalVisible(false);
    setItemSelected({})
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={textItem}
          onChangeText={handleChangeText}
        />
        <Button title="Agregar" color="#5555ff" onPress={addItem} />
      </View>
      <View style={styles.productsContainer}>
        <FlatList
          style={styles.flatlist}
          data={itemList}
          keyExtractor={(task) => task.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.product}
              onPress={() => handleModal(item)}
            >
              <Text style={styles.productText}>{item.value}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.textContainer}>
            <Text> Estas seguro que queres borrar</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textModal} > {itemSelected.value}</Text>
          </View>
          <View style={styles.btnContainer}>
            <Button title="Borrar" color="#ff5555" onPress={handleDelete} />
            <Button title="Cancelar" color="#55ff55" onPress={handleCancelModal} />
          </View>
        </View>
      </Modal>
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
    fontSize: 18,
    fontWeight: "bold", 
  },
  flatlist: {
    width: "100%"
  }, 
  modalContainer: {
    backgroundColor: "white",
    width: "80%", 
    alignContent: "center",
    gap: 20,
    paddingVertical: 20,
    borderRadius: 8,
  },
  textContainer: {},
  btnContainer: {
    flexDirection: "row",
    gap: 20,
  },
  textModal: {
    fontWeight: "bold",
  }
  

});
