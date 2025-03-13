import React, {useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import * as ImagePicker from 'expo-image-picker';

import { colors } from "../global/color";
import AddButton from '../components/AddButton';
import { usePostProfileImageMutation } from '../services/shopService';
import { useDispatch, useSelector } from 'react-redux';
import {setCameraImage} from '../features/user/UserSlice'

const ImageSelector = ({navigation}) => {

  const [image, setImage] = useState(null)
  const [triggerPostImage, result] = usePostProfileImageMutation()

  const {localId} = useSelector(state => state.auth.value)
  console.log(localId)

  const dispatch = useDispatch()

   const vefifyCameraPermissions = async () => {
     // verificar permisos de camara
     const { granted } = await ImagePicker.requestCameraPermissionsAsync()
     return granted
   }

   const pickImage = async () => {
     // seleccionar una imagen
     try {
      const permissionCamera = await vefifyCameraPermissions()
      if(permissionCamera){
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: (ImagePicker.MediaType = ['images', 'videos']),
          allowsEditing: true,
          aspect: [1, 1],
          base64: true,
          quality: 0.2,
        });

        console.log(result)

        if(!result.canceled) {
          const img = `data:image/jpg;base64,${result.assets[0].base64}`
          setImage(img)
        }
      }
     } catch (error) {
      console.log(error)
     }
   }
  
   const confirmImage = () => {
     // guardar la imagen
     
     try {
      dispatch(setCameraImage(image))
      triggerPostImage({image, localId})
      navigation.goBack()
     } catch(err) {
      console.log(err)
     }

   }
  
  
  return (
    <View style={styles.container}>
      {image ? 
      (
        <>
        <Image 
          source={{uri: image}} 
          style={styles.image}
          />
        <AddButton 
          title="Take another photo"
          onPress={pickImage}
          />
        <AddButton 
          title='Confirm photo'
          onPress={confirmImage}
        />
        </>
      ) : 
      (
        <>
          <View style={styles.noPhotoContainer}>
            <Text> No photo to show... </Text>
          </View>
          <AddButton 
            title="Take a phhoto"
            onPress={pickImage}
          />
        </>
      )}
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
