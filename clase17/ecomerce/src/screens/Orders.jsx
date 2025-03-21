import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
//import OrderData from "../data/orders.json";
import OrderItem from "../components/OrderItem";
import { useGetOrdersQuery } from "../services/shopService";
import { useSelector } from "react-redux";

const OrderScreen = () => {
  const {localId} = useSelector(state => state.auth.value)
  const {data: OrderData, error, isLoading, isSuccess} = useGetOrdersQuery()
  const [ordersFiltered, setOrderFiltered] = useState()
  //console.log("Aca estan todas las ordenes", OrderData)

  useEffect(()=>{
    if(isSuccess){
      const responseTransformed = Object.values(OrderData);
      //console.log(responseTransformed)
      const ordersByUser = responseTransformed.filter( order => order.user === localId)
      setOrderFiltered(ordersByUser)
    }
  },[])

  return (
    <View>
      <FlatList
        data={ordersFiltered}
        keyExtractor={(orderItem) => orderItem.id}
        renderItem={({ item }) => {
          return <OrderItem order={item} />;
        }}
      />
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
