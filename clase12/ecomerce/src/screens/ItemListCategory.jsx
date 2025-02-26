import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import { colors } from '../global/color'
//import products from '../data/products.json'
import ProductItem from '../components/ProductItem'
import Search from '../components/Search'
import { useGetProductsByCategoryQuery } from '../services/shopService'


const ItemListCategory = ({
  route,
  navigation
}) => {
  const [keyWord, setKeyword] = useState("");
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [error, setError] = useState("");

  const { category: categorySelected } = route.params;

  const {data: productsFetched, error: ErrorFormFetched, isLoading} = useGetProductsByCategoryQuery(categorySelected)
  //console.log(productsFetched);

   useEffect(() => {
    // Products filtered by category
    // No digits
    regex = /\d/;
    const hasDigit = regex.test(keyWord);
    if (hasDigit) {
      setError("No se permiten números en la búsqueda");
      return;
    }

/*      const productsPrefiltered = products.filter(
      (product) => product.category === categorySelected
    );  */
     // Product filtered by name

     if(!isLoading){
       const productsFilter = productsFetched.filter((product) =>
         product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase())
       );
       setProductsFiltered(productsFilter);
       setError("");
     }
  }, [keyWord, categorySelected, productsFetched, isLoading]);
  return (
    <View style={styles.flatListContainer}>
      <Search
        error={error}
        onSearch={setKeyword}
        goBack={() => navigation.goBack()}
      />
      <FlatList
        data={productsFiltered}
        renderItem={({ item }) => (
          <ProductItem product={item} navigation={navigation} />
        )}
        keyExtractor={(producto) => producto.id}
      />
    </View>
  );
};

export default ItemListCategory

const styles = StyleSheet.create({
  flatListContainer: {
    width: "100%",
    backgroundColor: colors.secondary,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
