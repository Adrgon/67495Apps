import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

import AddButton from '../components/AddButton'
import { useGetProfileImageQuery } from '../services/shopService'
const MyProfile = ({navigation}) => {

  const {imageCamera, localId} = useSelector(state => state.auth.value)
  const {data: imageFromBase} = useGetProfileImageQuery(localId)


  const launchCamera = () => {
    navigation.navigate('Image selector')
  }

   const launchLocation = async () => {
    navigation.navigate("List Address");
  }; 

  const defaultImageRoute = "../../assets/defaultProfile.png"
  return (
    <View style={styles.container}>
      {imageFromBase || imageCamera ? (
        <Image
          source={{ uri: imageFromBase?.image || imageCamera }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <Image
          source={require(defaultImageRoute)}
          style={styles.image}
          resizeMode="cover"
        />
      )}

      <AddButton onPress={launchCamera} title="Add profile picture" />

       <AddButton onPress={launchLocation} title="My address" /> 
    </View>
  );
}

export default MyProfile

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 15,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
