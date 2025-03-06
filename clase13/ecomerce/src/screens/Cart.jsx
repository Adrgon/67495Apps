import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CartItem from "../components/CartItem";

//import CartData from "../data/cart.json";
import { useSelector } from "react-redux"; 
import { usePostOrderMutation } from "../services/shopService";



const Cart = () => {
const {items: CartData, total} = useSelector((state)=> state.cart.value)
const [triggerPostOrder, result] = usePostOrderMutation()
/*   const total = CartData.reduce(
    (acumulador, currentItem) =>
      (acumulador += currentItem.price * currentItem.quantity),
    0
  );

  let total2 = 0;
  for (const currentItem of CartData) {
    console.log(currentItem.id);
    total2 += currentItem.price * currentItem.quantity;
  } */

  onConfirmOrder = () => {
    triggerPostOrder({items: CartData, user: "Luka", total})
  }
  console.log(result)

  return (
    <View style={styles.container}>
      <FlatList
        data={CartData}
        keyExtractor={(pepe) => pepe.id}
        renderItem={({ item }) => {
          return <CartItem cartItem={item} />;
        }}
      />
      <View style={styles.totalContainer}>
        <Pressable onPress={onConfirmOrder}>
          <Text>Confirm</Text>
        </Pressable>
        <Text>Total: ${total}</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 120,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
