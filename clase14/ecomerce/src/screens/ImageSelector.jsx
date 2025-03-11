import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ImageSelector = () => {
  return (
    <View>
{/*       
    Imagen cargada

    Sin Imagen 
*/}
    </View>
  )
}

export default ImageSelector

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 20,
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
  noPhotoContainer: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: colors.primary,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
