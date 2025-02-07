import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../global/color'
import products from '../data/products.json'
import ProductItem from '../components/ProductItem'
import Search from '../components/Search'

const ItemListCategory = ({
  categorySelected = "", 
  setCategorySelected = ()=> {}
}) => {
  const [keyWord, setKeyword] = useState("")
  const [productsFiltered, setProductsFiltered] = useState([])
  const [error, setError] = useState("")

  console.log(categorySelected)

  useEffect(() => {
    /*  const digits = "asddssd";
    console.log(regex.test(digits));
    */
    regex = /\d/;
    const hasDigit = (regex.test(keyWord))
    console.log(hasDigit)
    if(hasDigit){
      setError("No se permiten números en la búsqueda")
      return 
    }

   

    const productsPrefiltered = products.filter(
      (product) => product.category === categorySelected
    );
    //Product filtered by name
    const productsFilter = productsPrefiltered.filter((product) =>
      product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase())
    );
    setProductsFiltered(productsFilter);
    setError("");
  }, [keyWord, categorySelected]);
  return (
    <View style={styles.flatListContainer}>
      <Search
        error={error}
        onSearch={setKeyword}
        goBack={() => setCategorySelected("")}
      />
      <FlatList
        data={productsFiltered}
        renderItem={({ item }) => <ProductItem product={item} />}
        keyExtractor={(producto) => producto.id}
      />
    </View>
  );
}

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
