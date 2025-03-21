import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";


//import allProducts from "../data/products.json";
import { useGetProductByIdQuery } from "../services/shopService";
import { useDispatch } from "react-redux";
import { addCartItem } from "../features/cart/cartSlice";

const Detail = ({route, navigation}) => {

  const [orientation, setHorientation] = useState('portrait');
  const { width, height } = useWindowDimensions();
  const dispatch = useDispatch();

  const {productId: idSelected} = route.params
  console.log(idSelected)
  const {data: product, error, isloading} = useGetProductByIdQuery(idSelected)
console.log(product)

  useEffect(() => {
    if(width > height) setHorientation("landscape")
    else setHorientation("portrait")
    
  }, [width, height]);

const handleAddCart = () => {
  dispatch(addCartItem({...product, quantity: 1}))
}

  return (
    <View>
      <Button onPress={() => navigation.goBack()} title="Go back" />
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
            style={
              orientation === "portrait" ? styles.image : styles.imageLandscape
            }
          />
          <View
            style={
              orientation === "portrait"
                ? styles.textContainer
                : styles.textContainerLandscape
            }
          >
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Button title="Add cart" onPress={handleAddCart}></Button>
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
