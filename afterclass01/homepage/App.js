import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, Image } from 'react-native';


export default function App() {
  return (
    <ScrollView>
      <View style={{ flexDirection: "row" }}>
        <Image style={styles.banner} source={require("./assets/bg.jpg")} />
      </View>

      <View style={styles.container}>
        <Text style={styles.titulo}>Vengadores</Text>
      </View>

      {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> */}
      <ScrollView >
        <View width={250}>
          <Image
            style={styles.film}
            source={require("./assets/theavengers.jpg")}
          />
        </View>

        <View width={250}>
          <Image
            style={styles.film}
            source={require("./assets/ageofultron_.jpg")}
          />
        </View>

        <View width={250}>
          <Image
            style={styles.film}
            source={require("./assets/infinitywar.jpg")}
          />
        </View>

        <View width={250}>
          <Image style={styles.film} source={require("./assets/endgame.jpg")} />
        </View>

        <View width={250}>
          <Image
            style={styles.film}
            source={require("./assets/secretwar.jpg")}
          />
        </View>
      </ScrollView>

      <Text style={styles.titulo}>Vengadores Originales</Text>
      <View style={styles.listado}>
        <View style={styles.listadoItem}>
          <Image
            style={styles.character}
            source={require("./assets/ironman.jpg")}
          />
        </View>

        <View style={styles.listadoItem}>
          <Image
            style={styles.character}
            source={require("./assets/capitanamerica.jpg")}
          />
        </View>

        <View style={styles.listadoItem}>
          <Image
            style={styles.character}
            source={require("./assets/thor.jpg")}
          />
        </View>

        <View style={styles.listadoItem}>
          <Image
            style={styles.character}
            source={require("./assets/hulk.jpg")}
          />
        </View>

        <View style={styles.listadoItem}>
          <Image
            style={styles.character}
            source={require("./assets/hawkeye.jpg")}
          />
        </View>

        <View style={styles.listadoItem}>
          <Image
            style={styles.character}
            source={require("./assets/blackwidow.jpg")}
          />
        </View>
      </View>

      <Text style={styles.titulo}>Peliculas</Text>
      <View style={styles.listado}>
        <View style={styles.listadoItem}>
          <Image
            style={styles.character}
            source={require("./assets/movie1.jpg")}
          />
        </View>

        <View style={styles.listadoItem}>
          <Image
            style={styles.character}
            source={require("./assets/movie2.jpg")}
          />
        </View>

        <View style={styles.listadoItem}>
          <Image
            style={styles.character}
            source={require("./assets/movie3.jpg")}
          />
        </View>

        <View style={styles.listadoItem}>
          <Image
            style={styles.character}
            source={require("./assets/movie4.jpg")}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
    textAlign: 'center', 
  }, 
  film: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  character: {
    width: '100%',
    height: 200,
    marginVertical: 5,
  },
  listado: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'sapce-between',
  },
  listadoItem: {
    flexBasis: '48%',
  },
});
