import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, Text, View, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';
import ProductInput from './src/components/ProductInput/ProductInput';
import CustomModal from './src/components/CustomModal/CustomModal';
import { colors1, colors2 } from './src/constanst/color';

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
/*     
    console.log(textItem);
    console.table(itemList);
    console.dir({id: 1, value: "Tomate"})
    console.warn("Esto es una advertencia")
    console.error("Esto es un error") 
    */
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
    <SafeAreaView style={styles.container}>
{/*       
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={textItem}
          onChangeText={handleChangeText}
          placeholder="Limpiar la casa"
        />
        <Button title="Agregar" color="#5555ff" onPress={addItem} />
      </View> 
      */}
      <ProductInput 
        addItem={addItem}
        handleChangeText={handleChangeText}
        textItem={textItem}
      />
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
{/*       <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalStyles}>
          <View style={styles.modalContainer}>
            <Text style={styles.textModal}>
              {" "}
              Estas seguro que queres borrar
            </Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textModal}> {itemSelected.value}</Text>
          </View>
          <View style={styles.btnContainer}>
            <Button title="Borrar" color="#ff5555" onPress={handleDelete} />
            <Button
              title="Cancelar"
              color="#55ff55"
              onPress={handleCancelModal}
            />
          </View>
        </View>
      </Modal> */}
      <CustomModal 
        handleCancelModal={handleCancelModal}
        handleDelete={handleDelete}
        itemSelected={itemSelected}
        modalVisible={modalVisible}
      />

      <StatusBar style='inverted' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    alignItems: "center",
    backgroundColor: colors2.ligthGreen,
    flex: 1,
  },
 /*  inputContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    borderBottomWidth: 1,
    backgroundColor: "#BE7B72",
    borderBottomColor: "black",
    width: 240,
    fontSize: 16,
    height: 35,
    paddingHorizontal: 5,
  }, */

  productsContainer: {
    marginTop: 15,
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
  },
  product: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors2.green1,
    width: "100%",
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 5,
  },

  productText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  flatlist: {
    width: "90%",
  },
  /* modalStyles: {
    backgroundColor: "#401F71",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  }, */
});
