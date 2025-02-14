import { StyleSheet, Text, Image, Pressable } from 'react-native'
import React from 'react'
import Card from './Card'
import { colors } from '../global/color';

const ProductItem = ({
  product,
  setItemIdSelected = () => {},
}) => {

  return (
    <Card style={styles.additionalStylesCard}>
      <Pressable
        style={styles.pressable}
        onPress={() => setItemIdSelected(product.id)}
      >
        <Text style={styles.textCategory}>{product.title}</Text>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{ uri: product.images[0] }}
        />
      </Pressable>
    </Card>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 100,
    borderRadius: 8,
  },
  additionalStylesCard: {
    height: 120,
    width: 300,
    margin: 10,
  },
  textCategory: {
    color: colors.tertiary,
    width: "70%",
  },
  pressable: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
  },
});
