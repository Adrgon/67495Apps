import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";

import AddButton from "../components/AddButton";

import MapPreview from "../components/MapPreview";
import { googleMapsApiKey } from "../databases/googleMaps";
import { colors } from "../global/color";
import {
  useGetLocationQuery,
  usePostLocationMutation,
} from "../services/shopService";
import { useSelector } from "react-redux";

const LocationSelector = ({ navigation }) => {
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  //const [triggerPostUserLocation, result] = usePostLocationMutation();
  //const { localId } = useSelector((state) => state.auth.value); 


  const onConfirmAddress = () => {

  };



  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Address</Text>
      {/* Flatlist con las directions */}
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
