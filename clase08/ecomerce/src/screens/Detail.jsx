import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";


import allProducts from "../data/products.json";

const Detail = ({ idSelected, setProductSelected }) => {
  //console.log(idSelected);

  const [product, setProduct] = useState(null);
  const [orientation, setHorientation] = useState('portrait');
  const { width, height } = useWindowDimensions();

  // Landscape = horizontal
  // Portrait = vertical


  useEffect(() => {
    if(width > height) setHorientation("landscape")
    else setHorientation("portrait")
    
  }, [width, height]);

  //console.log(orientation);

  useEffect(()=>{
    //Encontrar el producto por su id
    const productSelected = allProducts.find(
      (product) => product.id === idSelected
    );
    setProduct(productSelected);
  }, [idSelected])

  //console.log(product.images[0]);

  return (
    <View>
      <Button onPress={() => setProductSelected("")} title="Go back" />
      {product ? (
        <View
          style={
            orientation === "portrait"
              ? styles.mainContainer
              : styles.mainContainerLandscape
          }
        >
          <Image
            source={{ uri: product.images[0] }}
            resizeMode="cover"
            style={orientation === 'portrait' ? styles.image : styles.imageLandscape}
          />
          <View style={orientation === 'portrait' ? styles.textContainer : styles.textContainerLandscape}> 
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text style={styles.price}>${product.price}</Text>
            {/* <Button title="Add cart"></Button> */}
          </View>
        </View>
      ) : null} 
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
  },
  mainContainerLandscape: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
    gap: 10,
  },
  image: {
    width: "100%",
    height: 250,
  },
  imageLandscape: {
    width: "45%",
    height: 200,
  },
  textContainer: {
    flexDirection: "column",
  },

  textContainerLandscape: {
    width: "50%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    gap: 10,
  },
  price: {
    textAlign: "right",
    width: "100%",
  },
});
