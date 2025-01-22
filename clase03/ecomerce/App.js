import { StatusBar } from 'expo-status-bar';
import { Button, Text, View, TextInput, StyleSheet } from 'react-native';

export default function App() {
/*   
const estiloTexto = {
    fontSize: 20, 
    color:"purple"
  } 
*/
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <Button title="Agregar" color="#5555ff" />
      </View>
      <View style={styles.productsContainer}>
        <View style={styles.product}>
          <Text style={styles.productText}>Item 1 </Text>
        </View>
        <View style={styles.product}>
          <Text style={styles.productText}>Item 2 </Text>
        </View>
        <View style={styles.product}>
          <Text style={styles.productText}>Item 3 </Text>
        </View>
        <View style={styles.product}>
          <Text style={styles.productText}>Item 4 </Text>
        </View>
      </View>
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
    alignItems: "center",
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
