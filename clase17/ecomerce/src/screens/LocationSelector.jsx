import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";

import AddButton from "../components/AddButton";

import MapPreview from "../components/MapPreview";

import { colors } from "../global/color";


import {googleMapsApiKey} from "../databases/googleMaps"
import { usePostLocationMutation } from "../services/shopService";
import { useSelector } from "react-redux";

const LocationSelector = ({ navigation }) => {
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const [triggerPostUserLocation, result] = usePostLocationMutation()
  const {localId} = useSelector((state) => state.auth.value)
  

  useEffect(() => {
    //IIFE Function
    (async () => {
      try {

        let { status } = await Location.requestForegroundPermissionsAsync();
        console.log(status)
        if(status !== "granted"){
          setError("Permission to acces location was denied")
        }

        if (status === "granted") {
          let location = await Location.getCurrentPositionAsync({});
          console.log(location);
          setLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          });
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(()=>{
    (async ()=>{
      try{
        const url_reverse_geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${googleMapsApiKey}`;
        const response = await fetch(url_reverse_geocode);
        const data = await response.json();
        console.dir(data)
        setAddress(data.results[0].formatted_address);
      }catch(err){
        console.log(err)
      }
    })()
  }, [location])

  const onConfirmAddress = () => {
    const date = new Date();
    triggerPostUserLocation({
      location: {
        latitude: location.latitude,
        longitude: location.longitude,
        address: address,
        updatedAt: date,
      },
      localId: localId,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Address</Text>
       {location ? (
        <>
          <Text style={styles.text}>
            Lat: {location.latitude}, long: {location.longitude}.
          </Text>
          <MapPreview location={location} /> 
          <Text style={styles.address}>Formatted address: {address}</Text>
          <AddButton onPress={onConfirmAddress} title="Confirm address" />
        </>
      ) : (
        <>
          <View style={styles.noLocationContainer}>
            <Text>{error}</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default LocationSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    paddingTop: 20,
    fontFamily: "Josefin",
    fontSize: 18,
  },
  noLocationContainer: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: colors.primary,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  address: {
    padding: 10,
    fontSize: 16,
  },
});
