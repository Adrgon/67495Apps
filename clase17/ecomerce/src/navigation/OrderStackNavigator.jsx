import React from "react";
import Order from "../screens/Orders";
//import OrdersTemp from "../screens/OrdersTemp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const OrderStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Order"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Order" component={Order} />
    </Stack.Navigator>
  );
};

export default OrderStack;
