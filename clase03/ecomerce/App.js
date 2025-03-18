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
      <Button
        title="Press me"
        onPress={() => Alert.alert("Simple Button pressed")}
      />

      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert("Button with adjusted color pressed")}
      />

      <Button
        title="Press me"
        disabled
        onPress={() => Alert.alert("Cannot press this one")}
      />

      <View style={styles.fixToText}>
        <Button
          title="Left button"
          onPress={() => Alert.alert("Left button pressed")}
        />
        <Button
          title="Right button"
          onPress={() => Alert.alert("Right button pressed")}
        />
      </View>

      <Image
        style={styles.tinyLogo}
        source={require("./assets/react-native.png")}
      />
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <Image
        style={styles.logo}
        source={{
          uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
        }}
      />

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
